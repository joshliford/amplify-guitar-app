export default function SectionCard({ title, children }) {

    return (
        <div className="flex flex-col m-6 pb-4 border-2 w-full mx-auto max-w-5xl rounded-xl shadow-lg hover:shadow-xl bg-white">
            <div className="border-b-2 p-6">
                {/* if there is a title, display it */}
                {title && <h4 className="m-2 text-2xl font-semibold">{title}</h4>}
            </div>

            <div className="p-4">
                {children}
            </div>
        </div>
    )
}