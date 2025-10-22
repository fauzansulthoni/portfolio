"use client";
import React, { useEffect } from "react";

const About = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      className="h-screen w-full flex items-center justify-end sm:px-8"
      id="about"
    >
      <div className="bg-slate-50 dark:bg-slate-700 w-full rounded-lg p-4 sm:p-8 shadow-lg h-fit">
        <h1 className="font-outfit font-bold xl:text-[4rem] text-4xl mb-8 dark:text-slate-50">
          {" "}
          About Me
        </h1>
        <p className="xl:text-[2rem] sm:text-[1.5rem] text-slate-600 mb-2 dark:text-slate-400">
          I'm Fauzan Sulthoni, a full stack developer with over 7 years of
          experience in education, where I worked as a teacher and
          administrative staff at PMDG. My background includes student data
          management, IT network administration, document archiving, and
          internal web app development.
        </p>
        <p className="xl:text-[2rem] sm:text-[1.5rem] text-slate-600 mb-2 dark:text-slate-400">
          After graduating from University of Darussalam Gontor in 2023 and
          completing my service in 2025, I shifted my focus to web development.
          Through self-learning and online courses from FreeCodeCamp, I’ve built
          a strong foundation in frontend and backend technologies. Now, I
          actively build personal projects to deepen my understanding of modern
          web architecture, UI design, and scalable systems.
        </p>
      </div>
    </div>
  );
};

export default About;
