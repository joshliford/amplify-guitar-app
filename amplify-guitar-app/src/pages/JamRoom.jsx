import { useState } from 'react'
import ChordCard from "../components/Chords/ChordCard"
import ScaleCard from "../components/Scales/ScaleCard"
import { chords } from "../components/Chords/chordData"
import { scales } from "../components/Scales/scaleData"
import { lessons } from "../components/Lessons/lessonData"
import FilterButton from "../components/FilterButton"
import LessonCard from "../components/Lessons/LessonCard"
import Modal from "../components/Modal"
import ChordModal from "../components/Chords/ChordModal"
import ScaleModal from "../components/Scales/ScaleModal"
import LessonModal from '../components/Lessons/LessonModal'

export default function JamRoom() {

    const [ selectedItem, setSelectedItem ] = useState(null); {/* chord, scale, or lesson currently being viewed */}
    const [ isModalOpen, setIsModalOpen ] = useState(false); {/* open or close the modal */}
    const [ filter, setFilter ] = useState('all'); {/* sets the JamRoom filter default to 'all' when you navigate to the page */}

    const handleViewItem = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => setIsModalOpen(false);

    // called when the FilterButton is clicked
    const filterOptions = (value) => {
        // updates filter state to be whatever was clicked (i.e. chords)
        setFilter(value);
    }

    return (
        <main>
            <div className="flex flex-row justify-center">
                <FilterButton label={"Lessons"} value={"lessons"} filterOptions={filterOptions} />
                <FilterButton label={"Chords"} value={"chords"} filterOptions={filterOptions} />
                <FilterButton label={"Scales"} value={"scales"} filterOptions={filterOptions} />
                <FilterButton label={"All"} value={"all"} filterOptions={filterOptions} />
            </div>

            <div className="grid grid-cols-3 gap-6">
                {(filter === 'all' || filter === 'chords') &&
                    chords.map((chord) => {
                        return <ChordCard key={chord.id} chord={chord} handleViewItem={handleViewItem} />
                    })
                }
                {(filter === 'all' || filter === 'scales') &&
                    scales.map((scale) => {
                        return <ScaleCard key={scale.id} scale={scale} handleViewItem={handleViewItem} />
                    })
                }
                {(filter === 'all' || filter === 'lessons') &&
                    lessons.map((lesson) => {
                        return <LessonCard key={lesson.id} lesson={lesson} handleViewItem={handleViewItem} />
                })
                }
            </div>

            {/* conditionally render the specific modal (i.e. chord, scale) based on the 'category' key/value from the corresponding object */}
            <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
                {selectedItem && selectedItem.category === "chord" &&
                    <ChordModal selectedItem={selectedItem} />
                }

                {selectedItem && selectedItem.category === "scale" &&
                    <ScaleModal selectedItem={selectedItem} />
                }

                {selectedItem && selectedItem.category === "lesson" &&
                    <LessonModal selectedItem={selectedItem} />
                }
                
            </Modal>

        </main>
    )
}