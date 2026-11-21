"use server";

import { Resend } from "resend";

import { CONTACT_PHONES, SITE_NAME } from "@/lib/site";

export type ContactField = "firstName" | "lastName" | "email" | "phone" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  // Echoed back on failure so the form keeps what the customer typed
  values?: Partial<Record<ContactField, string>>;
};

const MAX_LENGTH: Record<ContactField, number> = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 30,
  message: 5000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SEND_FAILED = `Sorry, we couldn't send your message right now. Please call us on ${CONTACT_PHONES[0]}.`;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function read(formData: FormData, field: ContactField) {
  const value = formData.get(field);
  // Collapse line breaks in single-line fields so they can't leak into email headers
  const text = typeof value === "string" ? value.trim() : "";
  return field === "message" ? text : text.replace(/[\r\n]+/g, " ");
}

export async function submitContactForm(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field, bots usually do
  if (formData.get("company")) {
    return { status: "success", message: "Thanks! We'll be in touch soon." };
  }

  const values = {
    firstName: read(formData, "firstName"),
    lastName: read(formData, "lastName"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    message: read(formData, "message"),
  } satisfies Record<ContactField, string>;

  const errors: ContactState["errors"] = {};
  if (!values.firstName) errors.firstName = "Please enter your first name.";
  if (!values.email) errors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = "Please enter a valid email.";
  if (!values.message) errors.message = "Please enter a message.";
  for (const field of Object.keys(values) as ContactField[]) {
    if (!errors[field] && values[field].length > MAX_LENGTH[field]) {
      errors[field] = `Please keep this under ${MAX_LENGTH[field]} characters.`;
    }
  }
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  // Comma-separate to notify several inboxes
  const to = process.env.CONTACT_TO_EMAIL;
  // onboarding@resend.dev only delivers to the Resend account owner's email;
  // verify a domain in Resend and set CONTACT_FROM_EMAIL to send anywhere else
  const from = process.env.CONTACT_FROM_EMAIL || `${SITE_NAME} Website <onboarding@resend.dev>`;

  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return { status: "error", message: SEND_FAILED, values };
  }

  const fullName = [values.firstName, values.lastName].filter(Boolean).join(" ");
  const rows: [string, string][] = [
    ["Name", fullName],
    ["Email", values.email],
    ["Phone", values.phone || "—"],
  ];

  const html = `
    <h2>New enquiry from the ${escapeHtml(SITE_NAME)} website</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(([label, value]) => `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>`)
        .join("")}
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap">${escapeHtml(values.message)}</p>
    <p style="color:#888">Reply to this email to respond directly to ${escapeHtml(fullName)}.</p>
  `;

  const text = [
    `New enquiry from the ${SITE_NAME} website`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    values.message,
  ].join("\n");

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to: to.split(",").map((address) => address.trim()),
      // Hitting Reply in the inbox goes straight to the customer
      replyTo: values.email,
      subject: `New enquiry from ${fullName}`,
      html,
      text,
    });
    if (error) {
      console.error("Contact form: Resend rejected the email", error);
      return { status: "error", message: SEND_FAILED, values };
    }
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return { status: "error", message: SEND_FAILED, values };
  }

  return { status: "success", message: "Thanks! Your message is on its way. We'll be in touch soon." };
}
