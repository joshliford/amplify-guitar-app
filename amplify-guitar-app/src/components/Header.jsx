import { Link, useLocation } from "react-router-dom";

export default function Header() {

  // hide the header when on the auth page
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register") return null;

  return (
    <div className="ml-[175px] border-b-2 border-stone-200 dark:border-[#778da9]/30 bg-white dark:bg-gray-800 shadow-sm">
      <header className="max-w-screen px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to={"/dashboard"}>
            <h1 className="text-4xl text-[#0d1117] dark:text-white font-['Lora'] hover:text-[#415a77] dark:hover:text-[#778da9] transition-colors mb-1">
              Amplify
            </h1>
          </Link>
        </div>
        <div className="flex flex-row justify-between">
          <h2 className="text-stone-400 dark:text-[#dcdcdc] font-['Lora'] text-xl">
            Gamified Guitar Learning Dashboard
          </h2>
        </div>
      </header>
    </div>
  );
}
