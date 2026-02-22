import { Link, useLocation } from "react-router-dom";

export default function Header() {

  // hide the header when on the auth page
  const location = useLocation();
  if (location.pathname === "/auth") return null;

  return (
    <div className="w-full border-b-2 border-[#e2e8f0] dark:border-[#149eca]/30 bg-white dark:bg-gray-800 shadow-lg dark:shadow-lg">
      <header className="max-w-screen px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to={"/dashboard"}>
            <h1 className="text-4xl text-[#0d1117] dark:text-white font-['Lora'] hover:text-[#087ea4] dark:hover:text-[#149eca] transition-colors mb-1">
              Amplify
            </h1>
          </Link>
        </div>
        <div className="flex flex-row justify-between">
          <h2 className="text-[#718096] dark:text-[#e0e0e0] font-['Lora'] text-xl">
            Gamified Guitar Learning Dashboard
          </h2>
        </div>
      </header>
    </div>
  );
}
