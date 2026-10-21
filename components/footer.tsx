import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/_adrenaline_adventures?igsh=c3c2c3FsN3M5ZGpy" },
  {
    name: "WhatsApp",
    href: "https://wa.me/918089713241?text=Hi%20Adrenaline%20Adventures%2C%20I%27d%20like%20to%20know%20more%20about%20your%20rides%20and%20programs.",
  },
  { name: "Facebook", href: "https://www.facebook.com/share/1DyAopkEGK/" },
];

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact-us" },
];

const email = "adrenalineadventuresindia@gmail.com";
const phone = "+918089713241";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night text-paper">
      <div className="mx-auto w-full max-w-page px-6 pb-8 pt-16 md:pt-24">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 md:pb-24 lg:grid-cols-[2fr_1.5fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-4">
              <Image src="/logo.png" alt="" width={56} height={56} className="h-14 w-auto object-contain" />
              <span className="flex flex-col gap-1">
                <span className="font-display text-subheading">Adrenaline Adventures</span>
                <span className="font-mono text-caption uppercase text-paper/50">Curated adventures, Crafted memories</span>
              </span>
            </Link>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-caption uppercase text-paper/50">Contact</h4>
            <div className="space-y-1 text-base">
              <a href={`tel:${phone}`} className="block transition-colors hover:text-accent">
                {phone}
              </a>
              <a href={`mailto:${email}`} className="block break-all text-paper/70 transition-colors hover:text-accent lg:break-normal">
                {email}
              </a>
            </div>
            <p className="text-sm leading-relaxed text-paper/50">
              Door No 36/267, Building No 7/619,
              <br />
              Thrikkakara, Ernakulam,
              <br />
              Ernakulam - 682021, Kerala, India
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-caption uppercase text-paper/50">Explore</h4>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-mono text-caption uppercase transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <ul className="flex flex-wrap items-center gap-6">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-caption uppercase text-paper/70 transition-colors hover:text-accent"
                >
                  {social.name} ↗
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-caption uppercase text-paper/40">
            © {new Date().getFullYear()} Adrenaline Adventures
          </p>
        </div>
      </div>
    </footer>
  );
}
