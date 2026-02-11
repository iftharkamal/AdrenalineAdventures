import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/landingImage.png"
        alt="Cyclists riding on a trail at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-end px-6 pb-10 pt-24 sm:pb-12">
        <div className="flex flex-col gap-6 text-white md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/80">
              Born from the spirit of exploration
            </p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">
              This is ADAD.
            </h1>
          </div>
          <Button
            className="h-11 w-fit rounded-xl bg-white px-5 text-sm font-medium text-neutral-900 hover:bg-white/90"
            aria-label="Discover ADAD"
          >
            Discover ADAD
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
