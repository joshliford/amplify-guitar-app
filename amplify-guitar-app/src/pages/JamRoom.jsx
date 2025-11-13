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

export default function JamRoom({ totalXP, level, currentXP, xpNeeded, addXP, completedLessons, markLessonComplete }) {

    // entire object (chord, scale, or lesson) currently being viewed
    const [ selectedItem, setSelectedItem ] = useState(null);
    
    // open or close the modal
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    // sets the JamRoom filter default to 'all' as the default when you navigate to the page
    const [ filter, setFilter ] = useState('all');
    
    // recieves an 'item' (i.e. chord/scale/lesson object) from Card
    // stores the 'item' in selectedItem (tells the modal what to display)
    // sets isModalOpen to be 'true' so the modal is opened/can be viewed/seen
    const handleViewItem = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    }

    // close the modal when called
    const handleCloseModal = () => setIsModalOpen(false);

    // called when the FilterButton is clicked
    const filterOptions = (value) => {
        // updates filter state to be whatever was clicked (i.e. chords, scales, etc.)
        setFilter(value);
    }

    return (
        <main>
            <div className="text-lg flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-6">
                <FilterButton label={"Lessons"} value={"lessons"} filterOptions={filterOptions} />
                <FilterButton label={"Chords"} value={"chords"} filterOptions={filterOptions} />
                <FilterButton label={"Scales"} value={"scales"} filterOptions={filterOptions} />
                <FilterButton label={"All"} value={"all"} filterOptions={filterOptions} />
            </div>

            {/* filter === 'all' indicates that it will be shown on screen by default unless a different choice is clicked */}
            <div className="text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                {(filter === 'all' || filter === 'chords') &&
                    chords.map((chord) => {
                        // chord={chord} - passes the entire 'chord' object (i.e. id, title, etc) from the .map() callback into ChordCard as a prop named 'chord'
                        // 'chord' is then available via deconstruction in ChordCard
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
                        return <LessonCard key={lesson.id} lesson={lesson} handleViewItem={handleViewItem} completedLessons={completedLessons} />
                })
                }
            </div>

            {/* conditionally render the specific modal (i.e. chord, scale) based on the 'category' key/value from the corresponding object */}
            <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
                {/* if the selectedItem is 'chord', render the ChordModal component */}
                {selectedItem && selectedItem.category === "chord" &&
                    <ChordModal selectedItem={selectedItem} handleCloseModal={handleCloseModal} />
                }
                {/* if the selectedItem is 'scale', render the ScaleModal component */}
                {selectedItem && selectedItem.category === "scale" &&
                    <ScaleModal selectedItem={selectedItem} handleCloseModal={handleCloseModal} />
                }

                {/* lessons carry the bulk of XP gain/content so they need to take in additional props to properly update state and XP dynamically */}
                {selectedItem && selectedItem.category === "lesson" &&
                    <LessonModal selectedItem={selectedItem} handleCloseModal={handleCloseModal} addXP={addXP} completedLessons={completedLessons} markLessonComplete={markLessonComplete} />
                }
            </Modal>

        </main>
    )
}