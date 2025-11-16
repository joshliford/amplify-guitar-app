import Card from "../Card";

{/* Sub-card component specifically for chords */}
export default function ChordCard({ chord, handleViewItem }) {

    return (
        // dynamically render chord title/description based on the chord prop via JamRoom
        <Card title={chord.title} description={chord.description}>
            <div className="flex justify-center mt-auto">
                {/*
                    onClick={() => handleViewItem(chord)} - when clicked this calls the callback function, sending the entire object (i.e. id, title, etc)
                    to JamRoom so it is then marked as the 'new selectedItem'
                */}
                <button className="mt-2 p-2 bg-amber-700 hover:bg-amber-800 rounded-xl shadow-lg text-white hover:cursor-pointer hover:shadow-xl" onClick={() => handleViewItem(chord)}>
                    View Chord
                </button>
            </div>
        </Card>
    )
}