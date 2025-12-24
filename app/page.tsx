import Hero from "@/components/hero";
import { ComponentExample } from "@/components/component-example";
import { SaveButton } from "@/components/todo/save-button";

export default function Page() {
  return (
    <main className="min-h-screen light bg-white    font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
      <SaveButton />

      {/* <ComponentExample /> */}
    </main>
  );
}
