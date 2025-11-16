import Image from "next/image";

export function HomepageHero() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            <span className="text-foreground">We </span>
            <span className="underline decoration-foreground decoration-[6px] underline-offset-4">
              build solutions
            </span>
            <span className="text-foreground">
              , run communities and invest in AI
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed">
            There's a lot of talking about AI. We prefer to ship and educate.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/home/DSCF5379.png"
              alt="AGIVC"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
