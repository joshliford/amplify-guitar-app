import LessonFooter from "./LessonFooter"

export default function LessonModal({ selectedItem, handleCloseModal, addXP, completedLessons, markLessonComplete }) {

    return (
        <div>
            <div className="border-b border-gray-300 w-full max-w-full mx-auto">
                <h1 className="text-center font-bold text-xl mb-2">{selectedItem.title}</h1>
            </div>
            <div>
                {selectedItem.sections.map((section) => (
                    <div>

                        {/* always render section heading */}
                        <h2 className="mt-4 mb-2 w-full max-w-full font-semibold text-lg">{section.heading}</h2>

                        {/* if section has text then render the text */}
                        {section.text &&
                            <p>{section.text}</p>
                        }

                        {/* if section has a list then loop through the list and render it */}
                        {section.list &&
                            <ul className="pl-4 space-y-3">
                                {section.list.map((item, index) => {
                                return <li key={index} className="list-disc">{item}</li>
                            })}
                            </ul>
                        }
                        {section.videoUrl && (
                            <div className="w-full aspect-video mb-4"> {/* aspect-video = 16:9 video ratio for YouTube videos */}
                                <iframe // YouTube/Video player
                                    src={section.videoUrl} // embeded YouTube link
                                    title="Lesson Video"
                                    className="w-full h-full rounded-xl" // fills the entire div container
                                    allowFullScreen // can enable full-screen mode within the application
                                ></iframe>
                            </div>
                        )}

                    </div>
                ))}

            </div>
            <LessonFooter selectedItem={selectedItem} handleCloseModal={handleCloseModal} addXP={addXP} completedLessons={completedLessons} markLessonComplete={markLessonComplete} />
        </div>
    )
}