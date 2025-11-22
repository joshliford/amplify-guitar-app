import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import NavBar from "./NavBar";
import { ChevronDown } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header({ handleLogout, isDark, toggleDarkMode }) {

  // hide the header when on the auth page
  const location = useLocation();
  if (location.pathname === "/auth") return null;

  return (
    <div className="w-full border-b-4 border-[#D4A574] dark:border-[#E3B85B] bg-[#1F5D3D] dark:bg-[#1A1F2A] shadow-lg">
      <header className="max-w-screen px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to={"/dashboard"}>
            <h1 className="text-4xl text-[#FFFEF7] font-['Lora'] hover:text-[#EBD5B3] transition-colors mb-1">
              Amplify
            </h1>
          </Link>

          <div>
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 text-[#FFFEF7] font-['Nunito_Sans'] hover:text-[#EBD5B3] hover:cursor-pointer text-xl">
                Profile
                <ChevronDown className="size-4" />
              </MenuButton>
              <MenuItems anchor="bottom-end" className="rounded-xl bg-[#EBD5B3]/95">
                <MenuItem as="div" className="flex justify-center items-center px-2 py-4 gap-2">
                  <span className="text-black text-lg font-['Nunito_Sans'] font-semibold">
                    Dark Mode
                  </span>
                  <DarkModeToggle
                    isDark={isDark}
                    toggleDarkMode={toggleDarkMode}
                  />
                </MenuItem>
                <MenuItem as="div" className="flex justify-center">
                  <button
                    onClick={handleLogout}
                    className="text-black hover:text-red-600 font-semibold text-xl font-['Nunito_Sans'] hover:cursor-pointer transition mb-2"
                  >
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <h2 className="text-[#EBD5B3] font-['Lora'] text-xl">
            Gamified Guitar Learning Dashboard
          </h2>
          <NavBar />
        </div>
      </header>
    </div>
  );
}
