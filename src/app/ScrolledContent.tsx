"use client";
import React, { useEffect, useState } from "react";
import Project from "./Components/Project/Project";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Contact from "./Components/Contact/Contact";
import Timeline from "./Components/TImeline/Timeline";
// import Hobbies from "./Components/Hobbies/Hobbies";
import Welcome from "./Components/Welcome/Welcome";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Sidebar from "./Components/Sidebar/Sidebar";
import Fab from "./Components/Sidebar/Fab";

gsap.registerPlugin(ScrollSmoother);
const ScrolledContent = () => {
  const [selectedMenu, setSelectedMenu] = useState("#home");

  return (
    <>
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div className="w-full xl:w-[80%]">
        <div className="overflow-hidden h-screen block">
          {/* <div id="smooth-content"> */}
          <Welcome
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          {/* About */}
          <About
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          {/* Timeline */}
          <Timeline
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          {/* Skill */}
          <Skill
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          {/* Project */}
          <Project
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          {/* Hobbies */}
          {/* <Hobbies /> */}
          {/* Contact */}
          <Contact
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
          {/* </div> */}
        </div>
      </div>
      <Fab />
    </>
  );
};

export default ScrolledContent;
