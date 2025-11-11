import Card from "../Card";

{/* Sub-card component specifically for scales */}
export default function ScaleCard({ scale, handleViewItem }) {

    return (
        // dynamically render scale title/description based on the scale prop via JamRoom
        <Card title={scale.title} description={scale.description}>
            <div className="flex justify-center">
                {/*
                    onClick={() => handleViewItem(scale)} - when clicked this calls the callback function, sending the entire object (i.e. id, title, etc)
                    to JamRoom so it is then marked as the 'new selectedItem'
                */}
                <button className="mt-2 bg-gray-400 hover:cursor-pointer" onClick={() => handleViewItem(scale)}>
                    View Scale
                </button>
            </div>
        </Card>
    )

}