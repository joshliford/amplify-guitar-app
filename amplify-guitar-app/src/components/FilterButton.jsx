export default function FilterButton({ label, value, filterOptions }) {

    return (
        <div> {/* filter button container */}
            <button value={value} className="px-8 py-3 hover:cursor-pointer" onClick={() => filterOptions(value)}>{label}</button>
        </div>
    )

}