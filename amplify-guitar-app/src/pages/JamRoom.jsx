import { useState } from 'react'
import ChordCard from "../components/Chords/ChordCard"
import ScaleCard from "../components/Scales/ScaleCard"
import { chords } from "../components/Chords/chordData"
import { scales } from "../components/Scales/scaleData"
import { lessons } from "../components/Lessons/lessonData"
import FilterButton from "../components/FilterButton"
import LessonCard from "../components/Lessons/LessonCard"

export default function JamRoom() {

    const [ selectedItem, setSelectedItem ] = useState(null); {/* chord, scale, or lesson currently being viewed */}
    const [ isModalOpen, setIsModalOpen ] = useState(false); {/* open or close the modal */}

    const handleViewItem = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <main>
            <div className="flex flex-row justify-center">
                <FilterButton label={"Lessons"} value={"lessons"} />
                <FilterButton label={"Chords"} value={"chords"} />
                <FilterButton label={"Scales"} value={"scales"} />
                <FilterButton label={"All"} value={"all"} />
            </div>

            <div className="grid grid-cols-3 gap-6">
                {chords.map((chord) => {
                    return <ChordCard key={chord.id} title={chord.title} description={chord.description} handleViewItem={handleViewItem} />
                })}
                {scales.map((scale) => {
                    return <ScaleCard key={scale.id} title={scale.title} description={scale.description} handleViewItem={handleViewItem} />
                })}
                {lessons.map((lesson) => {
                    return <LessonCard key={lesson.id} title={lesson.title} description={lesson.description} handleViewItem={handleViewItem} />
                })}
            </div>
        </main>
    )
}