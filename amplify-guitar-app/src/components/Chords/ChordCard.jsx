import Card from "../Card";

export default function ChordCard({ title, description, handleViewItem, chord }) { {/* Sub-card component specifically for chords */}

    return (
        <Card title={title} description={description}>
            <div className="flex justify-center mt-auto">
                <button className="mt-2 bg-gray-400 hover:cursor-pointer" onClick={() => handleViewItem(chord)}>
                    View Chord
                </button>
            </div>
        </Card>
    )
}