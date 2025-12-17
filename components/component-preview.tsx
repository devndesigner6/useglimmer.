"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps extends React.ComponentProps<"div"> {
  align?: "center" | "start" | "end";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

export function ComponentPreview({
  children,
  className,
  align = "center",
  size = "md",
  ...props
}: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col w-full rounded-xl border border-fd-border",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative flex min-h-[400px] w-full overflow-hidden p-10 light bg-[#F0F0F0] text-foreground rounded-xl",
          align === "center" && "items-center justify-center",
          align === "start" && "items-start justify-center",
          align === "end" && "items-end justify-center"
        )}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { size } as any);
          }
          return child;
        })}
      </div>
    </div>
  );
}
