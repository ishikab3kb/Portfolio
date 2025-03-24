"use client";
import Image from "next/image";
import ProfileImg from "../../public/assets/profile.jpg";
import { ArrowRight } from "lucide-react";
import ActionButton from "./ActionButton";

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section with Yellow Shape */}

        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src={ProfileImg}
            alt="Profile"
            width={600}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-amber-400 text-4xl md:text-5xl font-bold mb-2">
              I&apos;M ISHIKA JAIN.
            </h1>
            <h2 className="text-xl md:text-2xl font-bold">
              FRONTEND DEVELOPER
            </h2>
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed">
            I&apos;m a Front-End developer with a passion for developing
            optimized user-focused and scalable web applications. Judicious and
            creative when crafting effective websites and apps.
          </p>

          <ActionButton text="MORE ABOUT ME" icon={ArrowRight} />
        </div>
      </div>
    </>
  );
}
