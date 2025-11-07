import Card from "../Card";

export default function ScaleCard({ scale, handleViewItem }) { {/* Sub-card component specifically for scales */}

    return (
        <Card title={scale.title} description={scale.description}>
            <div className="flex justify-center">
                <button className="mt-2 bg-gray-400 hover:cursor-pointer" onClick={() => handleViewItem(scale)}>
                    View Scale
                </button>
            </div>
        </Card>
    )

}