import Card from "../Card";

{/* Sub-card component specifically for lessons */}
export default function LessonCard({ lesson, handleViewItem, completedLessons }) {

    // checks if a lesson is complete by searching the completeLessons array - if that lessonId exists in the array
    // then isComplete = true (the 'lesson complete' message appears on the card)
    // otherwise isComplete = false
    const isComplete = completedLessons.includes(String(lesson.id))

    return (
        // dynamically render lesson title/description based on the lesson prop via JamRoom
        <Card title={lesson.title} description={lesson.description} category={lesson.category}>
            {/* check if the lesson is complete - if it is then display the below message on the card */}
            {isComplete &&
                <p className="mb-6 text-green-600">✅ Lesson Complete!</p>
            }
                <div className="flex justify-center">
                    {/*
                        onClick={() => handleViewItem(lesson)} - when clicked this calls the callback function, sending the entire object (i.e. id, title, etc)
                        to JamRoom so it is then marked as the 'new selectedItem'
                    */}
                    <button className="mt-2 p-2 bg-amber-700 hover:bg-amber-800 rounded-xl shadow-lg text-white hover:cursor-pointer hover:shadow-xl" onClick={() => handleViewItem(lesson)}>
                        Start Lesson
                    </button>
                </div>
        </Card>
    )

}