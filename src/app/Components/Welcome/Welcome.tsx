"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

const Welcome = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useEffect(() => {
    gsap.from("#home", { x: 1000, duration: 0.5 });
    gsap.from("#greeting", {
      delay: 1,
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
    gsap.fromTo(
      "#wave",
      { rotate: -20 },
      {
        delay: 1,
        rotate: 20,
        duration: 0.3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: Infinity,
        transformOrigin: "70% 70%",
      }
    );
    gsap.to("#img", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center px-8"
      id="home"
    >
      <div
        id="img"
        className="w-44 h-44 overflow-hidden rounded-full mb-4 mx-auto border-8 border-slate-300 dark:border-slate-500 shadow-md xl:hidden"
      >
        <img
          src="./fauzan.jpg"
          alt="Fauzan profile"
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="bg-slate-50  dark:bg-slate-700 w-full rounded-lg p-8 shadow-lg h-fit">
        <h1
          id="greeting"
          className="font-outfit font-bold xl:text-[6rem] text-6xl mb-2 dark:text-slate-50"
        >
          {" "}
          Hi, I'm Fauzan{" "}
          <span id="wave" className="inline-block">
            👋
          </span>
        </h1>
        <span className="xl:text-[4rem] text-3xl text-blue-500 font-semibold tracking-wider mb-3 block ">
          Full Stack Developer
        </span>
        {/* <p className="text-lg text-slate-600">
          Curious by nature and passionate about full stack development.
        </p> */}
        <p className="xl:text-[4rem] text-3xl leading-tight text-slate-600 dark:text-slate-400">
          Curious by nature and passionate about full stack development.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
