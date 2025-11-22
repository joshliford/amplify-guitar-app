import Card from "../Card";

export default function ScaleCard({ scale, handleViewItem }) {
  return (
    <Card
      title={scale.title}
      description={scale.description}
      category={scale.category}
    >
      <div className="flex justify-center">
        <button
          className="mt-2 p-2 dark:bg-[#e5c391] dark:hover:bg-[#D4A574] dark:text-black bg-amber-700 hover:bg-amber-800 rounded-xl shadow-lg text-white hover:cursor-pointer hover:shadow-xl transition"
          onClick={() => handleViewItem(scale)}
        >
          View Scale
        </button>
      </div>
    </Card>
  );
}
