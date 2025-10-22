import React from "react";

const Hobbies = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
})=> {
  return (
    <div
      className="h-screen w-full flex items-center justify-end px-8"
      id="hobbies"
    >
      <div className="bg-slate-50 dark:bg-slate-700  w-full rounded-lg p-8 shadow-lg h-fit">
        <h1 className="font-outfit font-bold xl:text-[4rem] text-4xl mb-8 text-center dark:text-slate-50">
          {" "}
          Beyond the Code
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="xl:col-span-1 col-span-4">
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              <img src="/user.jpg" alt="" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
