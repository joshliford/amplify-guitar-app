export default function FilterButton({ label, value, filterOptions, isActive }) {
  return (
    <div>
      <button
        value={value}
        onClick={() => filterOptions(value)}
        className={`
                ${
                  isActive === value
                    ? `p-2 rounded-xl shadow-lg bg-[#1F5D3D] dark:bg-[#e5c391] dark:hover:bg-[#D4A574] dark:text-black text-white font-['Lora'] hover:cursor-pointer`
                    : `p-2 rounded-xl shadow-lg bg-white font-['Lora'] hover:bg-gray-100 dark:bg-slate-700 dark:hover:bg-slate-800 hover:cursor-pointer transition-colors`
                }`}
      >
        {label}
      </button>
    </div>
  );
}
