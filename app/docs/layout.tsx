import { DocsLayout } from "@/components/layout/docs";
import type { ReactNode } from "react";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout tree={source.pageTree}>{children}</DocsLayout>;
}
