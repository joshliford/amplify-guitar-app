import Card from "../Card";

export default function LessonCard({ title, description, handleViewItem, lesson }) { {/* Sub-card component specifically for lessons */}

    return (
        <Card title={title} description={description}>
            <div className="flex justify-center">
                <button className="mt-2 bg-gray-400 hover:cursor-pointer" onClick={() => handleViewItem(lesson)}>
                    View Lesson
                </button>
            </div>
        </Card>
    )

}