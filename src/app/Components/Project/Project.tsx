import React from "react";
const ProjectItems = [
  {
    name: "School Management System – PMDG 3",
    description:
      "A campus-wide system used for two years to manage student data and track activities. It supported teachers and staff in decision-making and policy evaluation.",
    stack: "PHP, MySQL, CodeIgniter",
    link: "Not available",
  },
  {
    name: "School Management System – PMDG Alumni",
    description:
      "A basic student data management system built on request from PMDG Alumni. The code was handed over to their internal team after completion.",
    stack: "PHP, MySQL, CodeIgniter",
    link: "Not available",
  },
  {
    name: "PPI Turkey Election App",
    description:
      "An app built for the 2019 PPI Turkey election to help gather community data. Developed for Mr. Azhar Afif, an Indonesian postgraduate student in Turkey. Donated without charge.",
    stack: "PHP, MySQL, CodeIgniter",
    link: "Not available",
  },
  {
    name: "Teacher Database",
    description:
      "An internal tool to streamline reporting and data handling. Replaced manual Excel and Word workflows with a centralized web app for faster access and improved productivity.",
    stack: "PHP, MySQL, Laravel",
    link: "Not available (local server)",
  },
  {
    name: "Student Graduation Certificate Tracer",
    description:
      "Helps validate student data, track certificate issuance, and archive records. Designed to reduce errors and ensure accurate documentation across departments.",
    stack: "PHP, MySQL, Laravel",
    link: "Not available (local server)",
  },
  {
    name: "Hospital Management System",
    description:
      "My first React-based project, built to explore frontend development. Though logic is incomplete, it served as a learning experience in React and backend integration.",
    stack: "Express, React, MUI, MongoDB",
    link: "https://github.com/fauzansulthoni/hospital-management-system",
  },
  {
    name: "SpendWise – Spending Tracker",
    description:
      "A personal finance tracker to monitor transactions, control spending, and build budget plans. Built to explore scalable UI architecture and state management in React.",
    stack: "Express, React, MUI, MongoDB",
    link: "https://github.com/fauzansulthoni/spending-tracker-app",
  },
  {
    name: "Next.js Todo App",
    description:
      "An experimental project to deepen understanding of Next.js. Supports CRUD operations and image uploads, with a focus on data manipulation and routing.",
    stack: "Next.js, Tailwind CSS, MongoDB",
    link: "https://github.com/fauzansulthoni/next-todo-app",
  },
  {
    name: "React Todo App",
    description:
      "A simple task manager for daily activities. Ideal for beginners, with full CRUD implementation and insights into production-level app structure.",
    stack: "Express, React, MUI, MongoDB",
    link: "https://github.com/fauzansulthoni/todo-app",
  },
];
const Project = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleProjectClick = (link: string) => {
    if (link.includes("Not available")) {
      alert(`🚫 Sorry, this project link is not available yet. [${link}]`);
    } else {
      window.open(link, "_blank");
    }
  };
  return (
    <div
      className="xl:h-screen w-full flex items-center justify-end px-0 sm:px-8"
      id="project"
    >
      <div className="bg-slate-50 dark:bg-slate-700 w-full rounded-lg p-4 sm:p-8 shadow-lg max-h-screen no-scroll-btn">
        <h1 className="font-outfit font-bold xl:text-[4rem] text-4xl mb-8 text-center dark:text-slate-50">
          My Amazing Projects
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {ProjectItems.map((item, index) => (
            <div
              className="xl:col-span-1 col-span-2 bg-slate-200 dark:bg-slate-900 dark:text-slate-400 p-6 rounded-xl flex flex-col justify-center items-start"
              key={index}
            >
              <h2 className="sm:text-[2rem] text-2xl font-bold tracking-wider mb-2 block">
                {item.name}
              </h2>
              <h3 className="sm:text-[1.7rem] text-xl text-blue-500 font-semibold mb-4">
                {item.stack}
              </h3>
              <p className="sm:text-[1.5rem] text-md text-slate-500 mb-2">
                {item.description}
              </p>
              <a
                onClick={() => handleProjectClick(item.link)}
                className="sm:text-[1.5rem] text-blue-500"
                href="#"
              >
                View Project
                <i className="mx-2 ri-arrow-right-long-line"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
