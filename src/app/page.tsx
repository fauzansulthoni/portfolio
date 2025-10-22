"user client";
import "remixicon/fonts/remixicon.css";
import ScrolledContent from "./ScrolledContent";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="bg-slate-800 w-full">
      {/* Welcome */}
      <div className="max-w-[1920px] mx-auto bg-slate-200 dark:bg-slate-800 shadow-lg flex">
        <ScrolledContent />
      </div>
    </div>
  );
}
