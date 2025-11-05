import Card from "../components/Card"
import FilterButton from "../components/FilterButton"

export default function JamRoom() {

    return (
        <div>
            <div className="flex flex-row justify-center">
                <FilterButton label={"Lessons"} value={"lessons"} />
                <FilterButton label={"Chords"} value={"chords"} />
                <FilterButton label={"Scales"} value={"scales"} />
                <FilterButton label={"All"} value={"all"} />
            </div>
        </div>
    )
}