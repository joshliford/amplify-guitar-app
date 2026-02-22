import { BoomBox, CassetteTape, Home, Info, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function SideNavBar({ handleLogout, isDark, toggleDarkMode }) {
  const location = useLocation();

  // hide nav bar when on the auth page
  if (location.pathname === "/auth") return null;

  return (
    <div className="flex flex-col min-h-screen w-[175px] bg-gray-100 dark:bg-gray-700 border-r-2 border-[#e2e8f0] dark:border-[#149eca]/20">
      <nav>
        <ul className="flex flex-col gap-4 font-['Nunito_Sans'] text-xl p-3 mt-4">
          <div
            className={`group flex gap-2 items-center rounded-lg px-2 py-2 ${
              location.pathname === "/dashboard"
                ? "bg-[#149eca]/30 dark:bg-[#149eca]/10 transition-colors"
                : "hover:bg-[#d2d2d2] dark:hover:bg-[#149eca]/5 transition-colors"
            }`}
          >
            <Home
              className={
                location.pathname === "/dashboard"
                  ? "text-[#087ea4] dark:text-[#149eca]"
                  : "text-[#718096]/50 dark:text-[#e0e0e0] group-hover:text-[#087ea4] dark:group-hover:text-[#149eca] transition-colors"
              }
            />
            <li
              className={
                location.pathname === "/dashboard"
                  ? `text-[#087ea4] dark:text-[#149eca] font-semibold`
                  : `text-[#2d3748]/50 dark:text-[#e0e0e0] group-hover:text-[#087ea4] dark:group-hover:text-[#149eca] transition-colors`
              }
            >
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </div>

          <div
            className={`group flex gap-2 items-center rounded-lg px-2 py-2 ${
              location.pathname === "/jamroom"
                ? "bg-[#149eca]/30 dark:bg-[#149eca]/10 transition-colors"
                : "hover:bg-[#d2d2d2] dark:hover:bg-[#149eca]/5 transition-colors"
            }`}
          >
            <BoomBox
              className={
                location.pathname === "/jamroom"
                  ? "text-[#087ea4] dark:text-[#149eca]"
                  : "text-[#718096]/50 dark:text-[#e0e0e0] group-hover:text-[#087ea4] dark:group-hover:text-[#149eca] transition-colors"
              }
            />
            <li
              className={
                location.pathname === "/jamroom"
                  ? `text-[#087ea4] dark:text-[#149eca] font-semibold`
                  : `text-[#2d3748]/50 dark:text-[#e0e0e0] group-hover:text-[#087ea4] dark:group-hover:text-[#149eca] transition-colors`
              }
            >
              <Link to="/jamroom">Jam Room</Link>
            </li>
          </div>

          <div
            className={`group flex gap-2 items-center rounded-lg px-2 py-2 ${
              location.pathname === "/shed"
                ? "bg-[#149eca]/30 dark:bg-[#149eca]/10 transition-colors"
                : "hover:bg-[#d2d2d2] dark:hover:bg-[#149eca]/5 transition-colors"
            }`}
          >
            <CassetteTape
              className={
                location.pathname === "/shed"
                  ? "text-[#087ea4] dark:text-[#149eca]"
                  : "text-[#718096]/50 dark:text-[#e0e0e0] group-hover:text-[#087ea4] dark:group-hover:text-[#149eca] transition-colors"
              }
            />
            <li
              className={
                location.pathname === "/shed"
                  ? `text-[#087ea4] dark:text-[#149eca] font-semibold`
                  : `text-[#2d3748]/50 dark:text-[#e0e0e0] group-hover:text-[#087ea4] dark:group-hover:text-[#149eca] transition-colors`
              }
            >
              <Link to="/shed">The Shed</Link>
            </li>
          </div>

          <div
            className={`group flex gap-2 items-center rounded-lg px-2 py-2 ${
              location.pathname === "/about"
                ? "bg-[#149eca]/30 dark:bg-[#149eca]/10 transition-colors"
                : "hover:bg-[#d2d2d2] dark:hover:bg-[#149eca]/5 transition-colors"
            }`}
          >
            <Info
              className={
                location.pathname === "/about"
                  ? "text-[#087ea4] dark:text-[#149eca]"
                  : "text-[#718096]/50 dark:text-[#e0e0e0] group-hover:text-[#087ea4] dark:group-hover:text-[#149eca] transition-colors"
              }
            />
            <li
              className={
                location.pathname === "/about"
                  ? `text-[#087ea4] dark:text-[#149eca] font-semibold`
                  : `text-[#2d3748]/50 dark:text-[#e0e0e0] group-hover:text-[#087ea4] dark:group-hover:text-[#149eca] transition-colors`
              }
            >
              <Link to="/about">About</Link>
            </li>
          </div>
          <div className="group flex absolute bottom-4 gap-2 items-center rounded-lg px-2 py-2 hover:bg-[#d2d2d2] text-[#2d3748]/80 dark:text-[#e0e0e0] dark:hover:bg-[#149eca]/5 group-hover:text-[#087ea4] dark:group-hover:text-[#149eca] transition-colors">
            <Settings className="group-hover:text-[#087ea4] dark:group-hover:text-[#149eca]"/>
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 font-['Nunito_Sans'] group-hover:text-[#087ea4] dark:group-hover:text-[#149eca] hover:cursor-pointer text-xl">
                Profile
                <ChevronDown className="size-4" />
              </MenuButton>
              <MenuItems anchor="top" className="rounded-xl bg-white dark:bg-gray-800 border border-[#e2e8f0] dark:border-[#149eca]/20 shadow-md">
                <MenuItem as="div" className="flex justify-center items-center px-2 py-4 gap-2">
                  <span className="text-[#0d1117] dark:text-white text-lg font-['Nunito_Sans'] font-semibold">
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
                    className="text-[#4a5568] dark:text-[#e0e0e0] hover:text-red-500 dark:hover:text-red-400 font-semibold text-xl font-['Nunito_Sans'] hover:cursor-pointer transition mb-2"
                  >
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </ul>
      </nav>
    </div>
  );
}
