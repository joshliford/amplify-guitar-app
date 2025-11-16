export default function About() {

    return (
        <main className="bg-[#FFFEF7]">
            <section className="space-y-4 py-12 px-12">
                <div className="flex justify-center">
                    <h1 className="text-2xl text-center font-bold border-b-2 border-b-[#D4A574] inline-block">About Amplify</h1>
                </div>
                <p>
                    <strong className="text-[#1F5D3D] text-lg">Amplify</strong> is a gamified guitar-learning dashboard designed to make consistent practice simple, structured, and rewarding.
                    The overall goal is to combine progress tracking and a clean practice workflow so guitar players at any skill level can build long-term habits
                    and improve through small, daily wins.
                </p>
                <p>
                    Whether you&apos;re learning your first chords or refining advanced techniques, Amplify keeps everything you need in one place—organized, motivating,
                    and easy to return to.
                </p>
            </section>
            <section className="space-y-4 py-12 px-12 mt-12">
                <div className="flex justify-center">
                    <h2 className="text-2xl text-center font-bold border-b-2 border-b-[#D4A574] inline-block">Purpose</h2>
                </div>
                <p className="mb-4">
                    <strong className="text-[#1F5D3D] text-lg">Amplify</strong> was built to solve a problem I often faced: staying consistent. After playing both electric and acoustic guitar for 10+ years—often on and off
                    as life got busier—the motivation behind Amplify was to create a tool that brings structure, clarity, and fun back into practicing.
                </p>
                <p>
                    Building Amplify was a way to re-spark that passion while creating something meaningful for other players facing the same struggle.
                    By turning practice into a guided, gamified experience, Amplify makes it easier to stay motivated, track improvement, and enjoy the process
                    of learning again.
                </p>
            </section>
            <section className="py-12 px-12 mt-12 flex justify-center">
                <div className="max-w-4xl w-full">
                <div className="flex justify-center mb-6">
                    <h3 className="text-2xl text-center font-bold border-b-2 border-b-[#D4A574] inline-block">Core Pages</h3>
                </div>
                <ol className="list-decimal">

                    <li>
                        <h4 className="mb-6 font-semibold text-[#1F5D3D] text-xl">The Dashboard (Homepage)</h4>
                        <p className="mb-6">
                            The central hub to view your progress including:
                        </p>
                        <ul className="list-disc mb-12 pl-10 space-y-2">
                            <li>Current Level & XP</li>
                            <li>XP Bar/Progress to next Level</li>
                            <li>Suggested Lessons and Daily Challenges</li>
                            <li>Links to The Jam Room and The Shed</li>
                        </ul>
                    </li>

                    <li>
                        <h4 className="mb-6 font-semibold text-[#1F5D3D] text-xl">The Jam Room (Lessons, Chords, and Scales)</h4>
                        <p className="mb-6">
                            The main learning and exploration hub where you primarily earn XP by completing lessons.
                        </p>
                        <p className="mb-6">It contains all structured guitar content including:</p>
                        <ul className="list-disc mb-12 pl-10 space-y-2">
                            <li><strong>Lessons:</strong> topics covering chords, scales, techniques, and more</li>
                            <li><strong>Chord Library:</strong> common chords with diagrams and tips</li>
                            <li><strong>Scale Library:</strong> essential scales with diagrams and tabs</li>
                        </ul>
                    </li>
                    
                    <li>
                        <h4 className="mb-6 font-semibold text-[#1F5D3D] text-xl">The Shed (Practice Room)</h4>
                        <p className="mb-4">
                            Designed for focused, distraction-free practice. The Shed turns practice into measurable, gamified activity.
                        </p>
                        <p className="mb-6">Features include:</p>
                        <ul className="list-disc mb-12 pl-10 space-y-2">
                            <li><strong>Practice Timer:</strong> track session length to stay accountable</li>
                            <li><strong>Practice Goals:</strong> choose a specific goal to practice (i.e. scales, chord looping, etc.)</li>
                            <li><strong>Session Completion XP:</strong> earn XP and rewards for finishing structured practice goals</li>
                        </ul>
                    </li>

                </ol>
                </div>
            </section>
        </main>
    )
}