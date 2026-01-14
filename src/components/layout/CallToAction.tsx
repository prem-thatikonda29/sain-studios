"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export const CallToAction = ({
  title = "Ready to start your project?",
  description = "Book a free discovery call and let's discuss how we can help you create amazing content.",
  buttonText = "Get Started",
}: CallToActionProps) => {
  return (
    <div className="mt-32 text-center">
      <div className="font-sans max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-transparent p-12 rounded-[2rem] border border-primary/20">
        <h3 className="text-3xl font-sans font-medium text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg">
          {description}
        </p>
        <Button asChild>
          <Link href="/contact">{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};
