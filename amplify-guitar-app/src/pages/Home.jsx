import { Link } from 'react-router'
import XPBar from "../components/XPBar"

export default function Home() {

    return (
        <div>
            <main>
                <div className="flex flex-col m-6 pb-4 border-2 w-full mx-auto max-w-4xl">
                    <div className="border-b-2 p-6">
                        <div>
                            <h3 className="mb-4 px-3">Welcome Back, Guitarist!</h3>
                        </div>
                        <div className="flex flex-row justify-between px-3 py-2">
                            <p className="">Level: 10</p>
                            <p className="">Streak: 9 days</p>
                        </div>
                    </div>
                    <div className="m-4">
                        <div className="flex flex-row justify-between px-5 py-2">
                            <p>EXPERIENCE POINTS</p>
                            <p>500 / 1000 XP</p>
                        </div>
                        <div className="flex justify-center m-8">
                            <XPBar />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col m-6 pb-4 border-2 w-full mx-auto max-w-4xl">
                    <div className="border-b-2 p-6">
                        <div>
                            <h4 className="flex m-4">Jump Back Into Active Lessons</h4>
                        </div>
                    </div>
                    <div className="flex flex-col items-start space-y-8 m-4 p-6">
                        <button className="">Learn the G Chord</button>
                        <button className="">Intro to the Guitar</button>
                        <button className="">Mastering the A Minor Pentatonic Scale</button>
                    </div>
                    <div className="flex justify-center">
                        <Link to={'/jamroom'}><button className="px-8 py-3 hover:cursor-pointer">GO TO THE JAM ROOM</button></Link>
                    </div>
                </div>

                <div className="flex flex-col m-6 pb-4 border-2 w-full mx-auto max-w-4xl">
                    <div className="border-b-2 p-6">
                        <div>
                            <h4 className="flex justify-start m-4">Daily Challenges</h4>
                        </div>
                    </div>
                        <div className="p-6">
                        <form className="flex flex-col p-4 gap-6 space-y-4">
                            <label name="daily-challenge" className="border-2 p-2">
                                <input type="checkbox"></input> Daily Challenge 1
                            </label>
                            <label name="daily-challenge" className="border-2 p-2">
                                <input type="checkbox"></input> Daily Challenge 2
                            </label>
                            <label name="daily-challenge" className="border-2 p-2">
                                <input type="checkbox"></input> Daily Challenge 3
                            </label>
                        </form>
                    </div>
                    <div className="flex justify-center">
                        <Link to={'/shed'}><button className="px-8 py-3 hover:cursor-pointer">GO TO THE SHED</button></Link>
                    </div>
                </div>
            </main>
        </div>
    )
}