import React from "react";
import Image from "next/image";
import Bucket from "./bucket";
import { MoveRight, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative w-full border min-h-screen overflow-hidden bg-background py-16 md:py-24 lg:py-32 flex flex-col">
      <div className="absolute inset-0 z-0 ">
        {/* <Image
          src="/hero-bg.png"
          alt="Abstract background"
          fill
          className="object-cover"
          priority
        /> */}
        <Image
          src="/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" /> */}
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex-1 flex flex-col">
        <div className="flex flex-col justify-between gap-12 flex-1 lg:grid lg:grid-cols-2 lg:gap-8 lg:justify-around">
          <div className="flex flex-col gap-2  items-start max-md:items-center max-md:text-center text-left">
            <div className="">
              <h1 className="mt-8  text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl max-md:text-4xl max-md:text-center text-shadow-2xs">
                A micro-interaction UI library for professionals.{" "}
              </h1>
              <p className="mt-4 text-pretty text-lg max-md:text-center text-shadow-2xs max-md:text-sm">
                People don’t fall in love with components. They fall in love
                with how something feels.{" "}
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
              <Button size="lg" className="px-5 text-base">
                <Link href="#link">
                  <span className="text-nowrap">Start Building</span>
                </Link>
              </Button>
              <Button
                key={2}
                size="lg"
                variant="ghost"
                className="px-5 text-base"
              >
                <Link href="#link">
                  <span className="text-nowrap">Request a demo</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-end  lg:justify-end w-full ">
            <div className="w-full max-w-[600px] lg:max-w-none">
              <Bucket />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
