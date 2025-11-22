import Card from "../Card";

export default function ChordCard({ chord, handleViewItem }) {
  return (
    <Card
      title={chord.title}
      description={chord.description}
      category={chord.category}
    >
      <div className="flex justify-center mt-auto">
        {/*
            - when clicked this calls the callback function
            - sends the entire object (i.e. id, title, etc) to JamRoom so it is then marked as the 'new selectedItem'
        */}
        <button
          onClick={() => handleViewItem(chord)}
          className="mt-2 p-2 dark:bg-[#e5c391] dark:hover:bg-[#D4A574] dark:text-black bg-amber-700 hover:bg-amber-800 rounded-xl shadow-lg text-white hover:cursor-pointer hover:shadow-xl transition"
        >
          View Chord
        </button>
      </div>
    </Card>
  );
}
