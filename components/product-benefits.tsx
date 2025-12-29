"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Layout,
  Copy,
  Code2,
  Palette,
  Cpu,
  LayoutGrid,
  BookOpen,
  History,
  Github,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

const benefits: Benefit[] = [
  {
    title: "Built on Shadcn UI",
    description:
      "Engineered to extend Shadcn's visual language while adding meaningful motion and professional depth.",
    icon: Layout,
  },
  {
    title: "Framer Motion Powered",
    description:
      "Leverage the full power of industry-standard animation libraries for buttery smooth, fluid interactions.",
    icon: Zap,
  },
  {
    title: "Copy & Paste Simplicity",
    description:
      "No bloat. No complex setup. Just copy the code and give your app a premium feel in minutes.",
    icon: Copy,
  },
  {
    title: "Type Inference Ready",
    description:
      "Fully typed with TypeScript, providing great DX and error-free integration into your codebase.",
    icon: Code2,
  },
  {
    title: "Customizable Aesthetics",
    description:
      "Easily tweak colors, timings, and scales using Tailwind CSS and CSS variables to match your brand.",
    icon: Palette,
  },
  {
    title: "Performance Optimized",
    description:
      "Lightweight components that prioritize 60FPS animations without sacrificing your bundle size.",
    icon: Cpu,
  },
];

const dockItems = [
  { id: "components", icon: LayoutGrid, label: "Components" },
  { id: "docs", icon: BookOpen, label: "Docs" },
  { id: "changelog", icon: History, label: "Changelog" },
  { id: "github", icon: Github, label: "GitHub" },
  { id: "help", icon: HelpCircle, label: "Help" },
];

export default function ProductBenefits() {
  return (
    <section className="relative w-full py-24 px-4 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="h-full w-full opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6"
          >
            Built for Motion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Why Settle for Static? Bring your UI to life with professional-grade
            animations designed to integrate seamlessly into your Shadcn
            workflow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-dashed border-l border-t border-muted-foreground/20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 md:p-14 border-dashed border-r border-b border-muted-foreground/20 flex flex-col items-center text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="mb-8 p-4 rounded-2xl bg-muted/30 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon
                  className="w-8 h-8 text-foreground"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-foreground transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
