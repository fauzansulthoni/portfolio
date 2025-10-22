"use client";
import React from "react";
const linkItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experiences",
    link: "#timeline",
  },
  {
    name: "Skills",
    link: "#skill",
  },
  {
    name: "Projects",
    link: "#project",
  },
  // {
  //   name: "Hobbies",
  //   link: "#hobbies",
  // },
];
const Sidebar = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="sticky top-0 h-screen w-[20%] pl-8 z-10 isolate xl:block hidden">
      <div className="flex items-center justify-center h-full">
        <div className="bg-slate-50 dark:bg-slate-600 w-full px-4 py-6 rounded-xl shadow-md">
          {/* Profile Image */}
          <div className="w-44 h-44 overflow-hidden rounded-full mb-3 mx-auto">
            <img
              src="./fauzan.jpg"
              alt="Fauzan profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-2 items-center justify-center">
            {linkItems.map((item, index) => (
              <li
                key={index}
                className={`w-full text-center ${
                  selectedMenu === item.link && "bg-slate-200 dark:bg-slate-500"
                } hover:bg-slate-200 dark:hover:bg-slate-500 py-2 transition-all duration-200 text-[1.8rem]`}
              >
                <a
                  onClick={() => {
                    setSelectedMenu(item.link);
                    const target = document.querySelector(item.link);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  // href={item.link}
                  className="block w-full h-full text-gray-800 dark:text-slate-50 cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="w-full text-center py-2 transition-all duration-300 text-[1.8rem]">
              <a
                onClick={() => {
                  const target = document.querySelector("#contact");
                  if (target) {
                    setSelectedMenu("#contact");
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-3 py-2 block bg-blue-500 hover:bg-blue-600 w-full text-slate-50 rounded-lg transition-all duration-200 cursor-pointer"
              >
                Catch Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
