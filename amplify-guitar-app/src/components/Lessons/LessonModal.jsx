import LessonFooter from "./LessonFooter"

export default function LessonModal({ selectedItem, handleCloseModal, addXP, completedLessons, markLessonComplete }) {

    return (
        <div className="font-['Nunito_Sans'] text-lg">
            <div>
                {selectedItem.sections.map((section, index) => (
                    <div key={index}>
                        <h2 className="mt-8 mb-2 w-full max-w-full font-semibold text-2xl font-['Lora']">
                            {section.heading}
                        </h2>
                        {section.text &&
                            <p>{section.text}</p>
                        }
                        {section.list &&
                            <ul className="pl-4 space-y-3">
                                {section.list.map((item, index) => {
                                return <li key={index} className="list-disc">{item}</li>
                            })}
                            </ul>
                        }
                        {section.videoUrl && (
                            // aspect-video = 16:9 video ratio for YouTube videos
                            <div className="w-full aspect-video mb-4">
                                {/* YouTube/Video player */}
                                <iframe
                                    // embeded YouTube link
                                    src={section.videoUrl} 
                                    title="Lesson Video"
                                    // fills the entire div container
                                    className="w-full h-full rounded-xl shadow-xl"
                                    // can enable full-screen mode within the application
                                    allowFullScreen
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