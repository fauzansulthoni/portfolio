import React from "react";
const skillItems = [
  { name: "bootstrap", img: "./logo/bootstrap.svg" },
  { name: "css", img: "./logo/css.svg" },
  { name: "html", img: "./logo/html.svg" },
  { name: "jquery", img: "./logo/jquery.svg" },
  { name: "js", img: "./logo/js.svg" },
  { name: "laravel", img: "./logo/laravel.svg" },
  { name: "mongodb", img: "./logo/mongodb.svg" },
  { name: "mui", img: "./logo/mui.svg" },
  { name: "mysql", img: "./logo/mysql.svg" },
  { name: "nodejs", img: "./logo/nodejs.svg" },
  { name: "php", img: "./logo/php.svg" },
  { name: "vite", img: "./logo/vite.svg" },
  { name: "redux", img: "./logo/redux.png" },
];

const Skill = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      className="xl:h-screen w-full flex items-center justify-end px-0 sm:px-8"
      id="skill"
    >
      <div className="bg-slate-50 dark:bg-slate-700 w-full rounded-lg p-4 sm:p-8 shadow-lg max-h-screen no-scroll-btn">
        <h1 className="font-outfit font-bold xl:text-[4rem] text-4xl mb-8 text-center dark:text-slate-50">
          {" "}
          What I've Learned
        </h1>
        <div className="grid grid-cols-6 gap-4 xl:h-full overflow-auto ">
          {skillItems.map((item, index) => (
            <div
              key={index}
              className="xl:col-span-1 col-span-3 flex flex-col justify-center items-center gap-2 bg-slate-200 dark:bg-slate-900 dark:text-slate-400 rounded-xl aspect-square"
            >
              <div className="sm:w-32 w-10 aspect-square overflow-hidden rounded-lg flex items-center justify-center">
                <img src={item.img} alt="" className="object-cover" />
              </div>
              <h2 className="text-xl tracking-wider mb-3 block ">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
