import Card from "../Card";

export default function ScaleCard({ title, description }) {

    return (
        <Card title={title} description={description}>
            <div className="flex justify-center">
                <button className="mt-2 bg-gray-400 hover:cursor-pointer">
                    View Scale
                </button>
            </div>
        </Card>
    )

}