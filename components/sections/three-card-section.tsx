import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Card {
  title: string;
  description: string;
  cta?: {
    text: string;
    href: string;
  };
  children?: ReactNode;
}

interface ThreeCardSectionProps {
  title?: string;
  description?: string;
  cards: Card[];
  background?: "default" | "muted" | "subtle";
  className?: string;
  id?: string;
}

export function ThreeCardSection({
  title,
  description,
  cards,
  background = "default",
  className,
  id,
}: ThreeCardSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8",
        background === "muted" && "bg-muted/30",
        background === "subtle" && "bg-muted/10",
        className
      )}
    >
      <div className="max-w-[1400px] mx-auto">
        {title && (
          <div className="mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium tracking-tight text-foreground">
              {title}
            </h2>
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-2 lg:gap-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-muted/30 border border-border/30 rounded-xl p-6 sm:p-8 hover:bg-muted/40 transition-colors duration-200"
            >
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-1 leading-relaxed text-sm sm:text-base">
                {card.description}
              </p>
              {card.children && <div className="mb-6">{card.children}</div>}
              {card.cta && (
                <Link
                  href={card.cta.href}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:opacity-80 transition-opacity group mt-auto"
                >
                  <span>{card.cta.text}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

