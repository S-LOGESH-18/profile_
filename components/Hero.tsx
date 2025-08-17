import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-12 pt-20">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-32 -left-10 md:-left-28 md:-top-16 h-[70vh]"
          fill="white"
        />
        <Spotlight
          className="h-[60vh] w-[40vw] top-8 left-full"
          fill="purple"
        />
        <Spotlight className="left-64 top-20 h-[60vh] w-[40vw]" fill="blue" />
      </div>

      {/* Background Grid */}
      <div
        className="h-[70vh] w-full dark:bg-black-100 bg-white 
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center 
          dark:bg-black-100 bg-white 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-12 z-10">
        <div className="max-w-[89vw] md:max-w-xl lg:max-w-[55vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            An ASPIRING DEVELOPER
          </p>

          <TextGenerateEffect
            words="Code is my tool. Creation is my craft. Conquering is the result"
            className="text-center text-[32px] md:text-4xl lg:text-5xl"
          />

          <p className="text-center md:tracking-wider mb-2 text-sm md:text-base lg:text-xl">
            Hi! I&apos;m Logesh, an AI/ML Engineer | Data Scientist | Full Stack Developer.
          </p>

          {/* Buttons with spacing */}
          <div className="flex gap-4 mt-4">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a
              href="/Logesh Updated.pdf" // Place your resume file in the public/ folder
              download
            >
              <MagicButton
                title="Download Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
