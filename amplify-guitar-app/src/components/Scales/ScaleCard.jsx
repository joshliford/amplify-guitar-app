import Card from "../Card";

export default function ScaleCard({ title, description, handleViewItem, scale }) { {/* Sub-card component specifically for scales */}

    return (
        <Card title={title} description={description}>
            <div className="flex justify-center">
                <button className="mt-2 bg-gray-400 hover:cursor-pointer" onClick={() => handleViewItem(scale)}>
                    View Scale
                </button>
            </div>
        </Card>
    )

}