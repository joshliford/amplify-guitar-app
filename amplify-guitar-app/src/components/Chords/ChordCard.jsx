import Card from "../Card";

export default function ChordCard({ chord, handleViewItem }) {

    return (
        <Card title={chord.title} description={chord.description} category={chord.category}>
            <div className="flex justify-center mt-auto">
                {/*
                    onClick={() => handleViewItem(chord)} - when clicked this calls the callback function, sending the entire object (i.e. id, title, etc)
                    to JamRoom so it is then marked as the 'new selectedItem'
                */}
                <button onClick={() => handleViewItem(chord)} className="mt-2 p-2 bg-amber-700 hover:bg-amber-800 rounded-xl shadow-lg text-white hover:cursor-pointer hover:shadow-xl transition">
                    View Chord
                </button>
            </div>
        </Card>
    )
}