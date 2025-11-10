import Card from "../Card";

export default function LessonCard({ lesson, handleViewItem }) { {/* Sub-card component specifically for lessons */}

    return (
        <Card title={lesson.title} description={lesson.description}>
            <div className="flex justify-center">
                <button className="mt-2 bg-gray-400 hover:cursor-pointer" onClick={() => handleViewItem(lesson)}>
                    Start Lesson
                </button>
            </div>
        </Card>
    )

}