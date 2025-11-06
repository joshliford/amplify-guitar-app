export default function Card({ title, description, children }) { {/* general purpose card to hold JamRoom data */}

    return (
        <div className="flex flex-col items-center border-2 rounded-lg p-6 m-4 min-h-[250px] mb-8"> {/* card container */}
            <div> {/* title container */}
                <h3 className="text-lg mb-4">{title}</h3>
            </div>
            <div className="flex flex-col grow text-center"> {/* description container */}
                <p>{description}</p>
                <span className="mt-auto">{children}</span> {/* mt-auto & grow push the child (button) to the bottom of the card */}
            </div>
        </div>
    )

}