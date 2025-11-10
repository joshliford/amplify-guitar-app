import Card from "../Card";

export default function LessonCard({ lesson, handleViewItem, completedLessons }) { {/* Sub-card component specifically for lessons */}

    const isComplete = completedLessons.includes(String(lesson.id))

    return (
        <Card title={lesson.title} description={lesson.description}>
            {isComplete &&
                <p className="mb-6 text-green-600">✅ Lesson Complete!</p>
            }
                <div className="flex justify-center">
                    <button className="mt-2 bg-gray-400 hover:cursor-pointer" onClick={() => handleViewItem(lesson)}>
                        Start Lesson
                    </button>
                </div>
        </Card>
    )

}