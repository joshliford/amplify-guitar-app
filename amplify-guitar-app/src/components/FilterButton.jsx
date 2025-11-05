export default function FilterButton({ label, value }) {

    return (
        <div> {/* filter button container */}
            <button value={value} className="px-8 py-3 hover:cursor-pointer">{label}</button>
        </div>
    )

}