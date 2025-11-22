import { Switch } from "@headlessui/react";

export default function DarkModeToggle({ isDark, toggleDarkMode }) {
  return (
    <div>
      <Switch
        checked={isDark}
        onChange={toggleDarkMode}
        className="group flex h-7 w-14 cursor-pointer rounded-full bg-black items-center ease-in-out"
      >
        <span className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7" />
      </Switch>
    </div>
  );
}
