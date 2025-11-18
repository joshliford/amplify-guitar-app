export default function FilterButton({ label, value, filterOptions, isActive }) {

    return (
        <div className="mt-8">
            <button value={value} onClick={() => filterOptions(value)}
                className={`
                ${isActive === value
                    ? `p-2 rounded-xl shadow-lg bg-[#1F5D3D] text-white font-['Lora'] hover:cursor-pointer`
                    : `p-2 rounded-xl shadow-lg bg-white font-['Lora'] hover:bg-gray-100 hover:cursor-pointer transition-colors`
                }`
                }>
                    {label}
            </button>
        </div>
    )

}