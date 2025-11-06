import { Link } from 'react-router-dom'
import XPBar from "../components/XPBar"
import SectionCard from '../components/SectionCard'
import { dailyChallenges } from './dailyChallenges'

export default function Home( { userName, level, xp, xpToNextLevel, streak }) {

    return (
        <div>
            <main>
                <div className="flex flex-col m-6 pb-4 border-2 w-full mx-auto max-w-4xl">
                    <div className="border-b-2 p-6">
                        <div>
                            <h3 className="mb-4 px-3 text-xl font-bold">Welcome Back, {userName}!</h3>
                        </div>
                        <div className="flex flex-row justify-between px-3 py-2 text-lg">
                            <p>Level: {level}</p>
                            <p>Streak: {streak} days</p>
                        </div>
                    </div>
                    <div className="m-4">
                        <div className="flex flex-row justify-between px-5 py-2 font-semibold">
                            <p>EXPERIENCE POINTS</p>
                            <p>{`${xp} / ${xpToNextLevel} XP`}</p>
                        </div>
                        <div className="flex justify-center m-8">
                            <XPBar xp={xp} xpToNextLevel={xpToNextLevel} />
                        </div>
                    </div>
                </div>

                <SectionCard title={"Lesson Suggestions"}>
                    <div className="flex flex-col items-start space-y-8 m-4 p-6">
                        <Link to={'/jamroom'} className="border-2 p-4 w-full"><p>Intro to the Guitar</p></Link>
                        <Link to={'/jamroom'} className="border-2 p-4 w-full"><p>Mastering the 8 Essential Beginner Chords</p></Link>
                        <Link to={'/jamroom'} className="border-2 p-4 w-full"><p>Understanding Simple Strumming Patterns</p></Link>
                    </div>
                    <div className="flex justify-center">
                        <Link to={'/jamroom'}><button className="px-8 py-3 hover:cursor-pointer">GO TO THE JAM ROOM</button></Link>
                    </div>
                </SectionCard>

                <SectionCard title={"Daily Challenges"}>
                    <div className="p-6">
                        <form className="flex flex-col p-4 gap-6 space-y-4">
                            {dailyChallenges.map((challenge) => {
                                return <label key={challenge.id} className="flex justify-between space-x-3 border-2 p-2 hover:cursor-pointer">
                                    <div className="flex justify-start">
                                        <input type="checkbox" name={challenge.challenge}></input>
                                        <p className="pl-2">{challenge.challenge}</p>
                                    </div>
                                    <span className="">{`${challenge.xp} XP`}</span>
                                </label>
                            })}
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