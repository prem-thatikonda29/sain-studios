"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
          {badge}
        </Badge>
      )}
      <h2 className="text-section font-semibold text-foreground tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-body text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
