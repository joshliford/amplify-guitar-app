import Card from "../Card";

export default function ChordCard({ title, description }) { {/* Sub-card component specifically for chords */}

    return (
        <Card title={title} description={description}>
            <div className="flex justify-center">
                <button className="mt-2 bg-gray-400 hover:cursor-pointer">
                    View Chord
                </button>
            </div>
        </Card>
    )
}