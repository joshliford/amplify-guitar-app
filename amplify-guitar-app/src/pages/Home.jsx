import { Link } from 'react-router-dom'
import XPBar from "../components/XPBar"
import SectionCard from '../components/SectionCard'

export default function Home( { userName, level, xp, xpToNextLevel, streak }) {

    return (
        <div>
            <main>
                <div className="flex flex-col m-6 pb-4 border-2 w-full mx-auto max-w-4xl">
                    <div className="border-b-2 p-6">
                        <div>
                            <h3 className="mb-4 px-3">Welcome Back, {userName}!</h3>
                        </div>
                        <div className="flex flex-row justify-between px-3 py-2">
                            <p className="">Level: {level}</p>
                            <p className="">Streak: {streak} days</p>
                        </div>
                    </div>
                    <div className="m-4">
                        <div className="flex flex-row justify-between px-5 py-2">
                            <p>EXPERIENCE POINTS</p>
                            <p>{`${xp} / ${xpToNextLevel} XP`}</p>
                        </div>
                        <div className="flex justify-center m-8">
                            <XPBar xp={xp} xpToNextLevel={xpToNextLevel} />
                        </div>
                    </div>
                </div>

                <SectionCard title={"Jump Back Into Active Lessons"}>
                    <div className="flex flex-col items-start space-y-8 m-4 p-6">
                        <Link to={'/jamroom'} className="border-2 p-4 w-full"><p>Learn the G Chord</p></Link>
                        <Link to={'/jamroom'} className="border-2 p-4 w-full"><p>Intro to the Guitar</p></Link>
                        <Link to={'/jamroom'} className="border-2 p-4 w-full"><p>Mastering the A Minor Pentatonic Scale</p></Link>
                    </div>
                    <div className="flex justify-center">
                        <Link to={'/jamroom'}><button className="px-8 py-3 hover:cursor-pointer">GO TO THE JAM ROOM</button></Link>
                    </div>
                </SectionCard>

                <SectionCard title={"Daily Challenges"}>
                    <div className="p-6">
                        <form className="flex flex-col p-4 gap-6 space-y-4">
                            <label name="daily-challenge" className="border-2 p-2 hover:cursor-pointer">
                                <input type="checkbox"></input> Daily Challenge 1 +25 XP
                            </label>
                            <label name="daily-challenge" className="border-2 p-2 hover:cursor-pointer">
                                <input type="checkbox"></input> Daily Challenge 2 +75 XP
                            </label>
                            <label name="daily-challenge" className="border-2 p-2 hover:cursor-pointer">
                                <input type="checkbox"></input> Daily Challenge 3 +100 XP
                            </label>
                        </form>
                    </div>
                    <div className="flex justify-center">
                        <Link to={'/shed'}><button className="px-8 py-3 hover:cursor-pointer">GO TO THE SHED</button></Link>
                    </div>
                </SectionCard>
            </main>
        </div>
    )
}