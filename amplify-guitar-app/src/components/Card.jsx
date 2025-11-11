{/* general purpose card to hold JamRoom data */}
export default function Card({ title, description, children }) {

    return (
        // card container
        <div className="flex flex-col items-center border rounded-lg p-6 m-4 min-h-[250px] mb-8 shadow-xl hover:shadow-2xl">
            <div> {/* title container */}
                <h3 className="text-lg mb-4">{title}</h3>
            </div>
            {/* description container */}
            <div className="flex flex-col grow text-center">
                <p>{description}</p>
                {/* mt-auto & grow push the children (button) to the bottom of the card */}
                <span className="mt-auto">{children}</span>
            </div>
        </div>
    )

}