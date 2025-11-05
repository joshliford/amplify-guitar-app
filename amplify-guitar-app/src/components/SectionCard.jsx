export default function SectionCard({ title, children }) {

    return (

        <div className="flex flex-col m-6 pb-4 border-2 w-full mx-auto max-w-4xl">
            <div className="border-b-2 p-6">
                {title && <h4 className="m-2 text-lg font-semibold">{title}</h4>}
            </div>

            <div className="p-4">
                {children}
            </div>
        </div>

    )
}