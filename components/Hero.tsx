/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { heroProfile } from "@/data";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p> */}
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <img
            src={heroProfile.img}
            alt="hero"
            className={heroProfile.imgClassName}
          />
          <TextGenerateEffect
            words="Hi!👋 I'm Ayaan."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg xl:text-xl">
            I am a fourth-year{" "}
            <span className="text-purple text-decoration-line: underline">
              Computer Science
            </span>{" "}
            student at the{" "}
            <span className="text-purple">University of Pittsburgh</span>, passionate
            about{" "}
            <span className="italic text-purple">
              web and mobile app development.
            </span>{" "}
            Always eager to expand my technical skills, I continuously work on
            enhancing my portfolio outside the classroom. Through internships, I have
            explored various career paths in computer science, which led me to
            develop a keen interest in <span className="text-purple">finance</span>.
            To deepen my understanding of the synergy between finance and technology,
            I am pursuing a{" "}
            <span className="text-purple underline">Minor in Business Studies.</span>
          </p>
          <p className="mt-5 font-mono italic text-center md:tracking-wider mb-4 text-xs md:text-sm lg:text-md text-purple">
            Welcome to my Canvas, where I experiment with different ways to paint,
            express and exhibit my skills. <br />
            <br />
            Psssssttt...I built this website using Next.js, Three.js, FramerMotion,
            TypeScript, and TailwindCSS.
          </p>
          <a href="#about">
            <MagicButton
              title="More about me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
