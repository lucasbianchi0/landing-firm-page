"use client";

import React, { forwardRef, useRef, useEffect } from "react";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<HTMLDivElement[]>([]);

  // Add your circles at positions in a circular layout
  const circleCount = 6;
  const angleIncrement = (2 * Math.PI) / circleCount;

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const radius = container.offsetWidth / 3; // Adjust the radius of the circle
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;

      circleRefs.current.forEach((circle, i) => {
        const angle = angleIncrement * i;
        const x = centerX + radius * Math.cos(angle) - circle.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - circle.offsetHeight / 2;

        circle.style.position = "absolute";
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
      });
    }
  }, []);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      {Array.from({ length: circleCount }).map((_, i) => (
        <Circle
          key={i}
          ref={(el) => {
            if (el) circleRefs.current[i] = el;
          }}
        >
          <Icons.user />
        </Circle>
      ))}
      {/* Optionally include a central element */}
      <Circle className="absolute">
        <Icons.openai />
      </Circle>
    </div>
  );
}

const Icons = {
  openai: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SVG Path here */}
    </svg>
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SVG Path here */}
    </svg>
  ),
};
