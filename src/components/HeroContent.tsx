"use client";
import Image from "next/image";
import ProfileImg from "../../public/assets/profile.jpg";
import { ArrowRight } from "lucide-react";
import ActionButton from "./ActionButton";
import { useTheme } from "@/context/ThemeContext";
import AboutModal from "./AboutModal";
import { useState } from "react";

export default function Home() {
  const { state } = useTheme();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Image Section with Yellow Shape */}

        <div className="relative rounded-2xl overflow-hidden text-center flex-1">
          <Image
            src={ProfileImg}
            alt="Profile"
            width={300}
            height={300}
            className="object-cover rounded-full  md:rounded-none md:w-[500px] md:h-[500px] xl:w-[600px] xl:h-[600px]"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6 flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div>
            <h1 className="text-amber-400 text-4xl md:text-5xl font-bold mb-2">
              I&apos;M ISHIKA JAIN.
            </h1>
            <h2 className="text-xl md:text-2xl font-bold">
              FRONTEND DEVELOPER
            </h2>
          </div>

          <p
            className={`${
              state.isDark ? "text-zinc-300" : "text-zinc-600"
            } text-lg leading-relaxed`}
          >
            I&apos;m a Front-End developer with a passion for developing
            optimized user-focused and scalable web applications. Judicious and
            creative when crafting effective websites and apps.
          </p>

          <ActionButton
            text="MORE ABOUT ME"
            icon={ArrowRight}
            action={() => setOpenModal(true)}
          />
          <AboutModal isOpen={openModal} onClose={() => setOpenModal(false)} />
        </div>
      </div>
    </>
  );
}
