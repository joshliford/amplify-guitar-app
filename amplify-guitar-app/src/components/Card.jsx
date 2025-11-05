export default function Card({ title, description }) { {/* general purpose card to hold JamRoom data */}

    return (
        <div className="flex flex-col border-2 rounded-b-lg"> {/* card container */}
            <div> {/* title container */}
                <h3 className="text-lg">{title}</h3>
            </div>
            <div> {/* description container */}
                <p>{description}</p>
            </div>
        </div>
    )

}