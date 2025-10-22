import React from "react";
const timelineItems = [
  {
    title: "High School Teacher at KMI Gontor",
    description: `Taught and mentored students at one of Indonesia’s most respected Islamic boarding schools, contributing to their academic and personal development.`,
    date: "Jun 2018 - Mar 2025",
  },
  {
    title: "Data Center Staff at PMDG",
    description: `Managed student data across PMDG institutions, digitized documents, and streamlined data circulation to support institutional operations.`,
    date: "Jun 2018 - Jul 2019",
  },
  {
    title: "IT Staff at PMDG 3",
    description: `Led IT training for students, maintained LAN infrastructure, coordinated Zoom facilities during COVID-19, and developed a web-based data system for internal use.`,
    date: "Jul 2019 - Jan 2022",
  },
  {
    title: "Student Certificate Administration Staff at PMDG",
    description: `Handled certificate issuance, EMIS data management, and archival systems. Built a tracer app for diploma tracking and managed printing logistics.`,
    date: "May 2022 - Mar 2025",
  },
  {
    title: "Executive Secretary at PMDG",
    description: `Coordinated leadership schedules, documented major events, managed institutional correspondence, and supported executive logistics and communication.`,
    date: "Feb 2022 - Mar 2025",
  },
];
const Timeline = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      className="xl:h-screen w-full flex items-center justify-end px-0 sm:px-8"
      id="timeline"
    >
      <div className="bg-slate-50 dark:bg-slate-700 w-full rounded-lg p-4 sm:p-8 shadow-lg max-h-screen overflow-y-auto">
        <h1 className="font-outfit font-bold xl:text-[4rem] text-4xl mb-8 dark:text-slate-50">
          Life Experience Timeline
        </h1>

        <div className="relative col-span-12 sm:px-4 space-y-6 sm:col-span-9">
          <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-600"
              >
                <h3 className="xl:text-[2.5rem] text-3xl  font-semibold tracking-wide dark:text-slate-50">
                  {item.title}
                </h3>
                <time className="sm:ext-[1rem] text-md tracking-wide uppercase dark:text-gray-400">
                  {item.date}
                </time>
                <p className="mt-3 sm:text-[1.5rem] dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  //   return (
  //     <section className="dark:bg-gray-100 dark:text-gray-800">

  //     </section>
  //   );
};

export default Timeline;
