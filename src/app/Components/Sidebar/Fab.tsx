"use client";
import React, { useState } from "react";
const anchors = [
  "#home",
  "#about",
  "#timeline",
  "#skill",
  "#project",
  "#contact",
];
const Fab = () => {
  const [counter, setCounter] = useState(0);
  return (
    <button
      onClick={() => {
        // console.log(anchors.length, counter);
        if (counter >= anchors.length) {
          const target = document.querySelector(anchors[0]);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
          setCounter(1);
        } else {
          const target = document.querySelector(anchors[counter]);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
          setCounter(counter + 1);
        }
      }}
      className="h-16 w-16 rounded-full bg-slate-400 text-black fixed bottom-8 right-8 text-3xl hover:ring-2 focus:ring-slate-100 hover:ring-slate-100 cusror-pointer shadow-2xl cursor-pointer xl:hidden"
    >
      {counter !== anchors.length ? (
        <i className="ri-arrow-down-line"></i>
      ) : (
        <i className="ri-arrow-up-line"></i>
      )}
    </button>
  );
};

export default Fab;
