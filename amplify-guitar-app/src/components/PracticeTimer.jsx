import { useState, useRef } from 'react'

export default function PracticeTimer({ runTime, setRunTime }) {

    const [ isRunning, setIsRunning ] = useState(false);

    const intervalRef = useRef(null);

    const handleTimer = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        } else {
            // current time in ms
            // (- runTime) = allows resuming the timer from a paused state
            const startTime = Date.now() - runTime;
            // returns an Id that identifies the running interval
            // stored in intervalRef.current later - won't be lost on re-render
            intervalRef.current = setInterval(() => {
                // gives total runtime since the start of the timer
                setRunTime(Date.now() - startTime);
            // executes the callback every 10 ms
            }, 10);
            setIsRunning(true);
        }
    }

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setRunTime(0);
        setIsRunning(false);
    }

    // slice(-2) adds a leading 0 for formatting (i.e. 00:00:00)
    const formatTime = (time) => {
        const minutes = ("0" + Math.floor(time / 60000)).slice(-2);
        const seconds = ("0" + Math.floor((time % 60000) / 1000)).slice(-2);
        const milliseconds = ("0" + Math.floor((time % 1000) / 10)).slice(-2);

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className="flex flex-col items-center mx-auto bg-[#1F5D3D]/20 rounded-xl shadow-lg hover:shadow-xl p-12 space-y-4 m-8 w-full max-w-2xl">
            <h2 className="font-semibold font-['Lora'] text-2xl">Practice Timer</h2>
            <p className="text-sm">Track your practice progress</p>
            <div>
                <p className="text-5xl font-mono">{formatTime(runTime)}</p>
            </div>
            <div className="flex gap-6">
                {/* pause/start button renders depending on isRunning state */}
                <button onClick={handleTimer}
                    className={`px-6 py-2 rounded-xl font-semibold transition
                        ${ isRunning ? "bg-red-700 hover:bg-red-800 text-white hover:cursor-pointer"
                            : "bg-[#1F5D3D] hover:bg-[#21462f] text-white hover:cursor-pointer"
                        }`}>
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button onClick={handleReset} className="px-6 py-2 rounded-xl font-semibold transition bg-amber-700 hover:bg-amber-800 text-white hover:cursor-pointer">
                    Reset
                </button>
            </div>
        </div>
    )

}