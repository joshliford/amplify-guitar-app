export default function FilterButton({ label, value, filterOptions, isActive }) {

    return (
        <div className="mt-8"> {/* filter button container */}
            <button value={value} onClick={() => filterOptions(value)} className={`
                ${isActive ? `p-2 rounded-xl shadow-lg bg-[#1F5D3D] text-white`
                    : `p-2 rounded-xl shadow-lg bg-white`
                }`}>
                    {label}
            </button>
        </div>
    )

}