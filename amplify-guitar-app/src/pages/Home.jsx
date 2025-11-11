import { Link } from 'react-router-dom'
import XPBar from "../components/XPBar"
import SectionCard from '../components/SectionCard'
import { dailyChallenges } from './dailyChallenges'

export default function Home({ totalXP, streak, level, currentXP, xpNeeded, addXP, completedChallenges, markChallengeComplete }) {

    // set the XP threshold to be a static value of 1000 for simple leveling logic
    const threshold = 1000;

    // takes a challengeId and xpReward
    const handleCompletedChallenge = (challengeId, xpReward) => {
        // converts the id to a string to match completeChallenges format
        const id = String(challengeId);

        // checks if the challengeId exists in the completedChallenges array
        const isComplete = completedChallenges.includes(id);
        
        // if the challenge is not complete - award the XP and mark the challenge as complete (prevents 'XP farming')
        if (!isComplete) {
            addXP(xpReward);
            markChallengeComplete(challengeId);
        }
    }

    return (
        <div>
            <main>
                <div className="flex flex-col m-6 pb-4 border-2 w-full mx-auto max-w-4xl">
                    <div className="border-b-2 p-6">
                        <div>
                            <h3 className="mb-4 px-3 text-xl font-bold">Welcome Back, User!</h3>
                        </div>
                        <div className="flex flex-row justify-between px-3 py-2 text-lg">
                            <p>Level: {level}</p>
                            <p>Streak: {streak} days</p>
                        </div>
                    </div>
                    <div className="m-4">
                        <div className="flex flex-row justify-between px-5 py-2 font-semibold">
                            <p>EXPERIENCE POINTS</p>
                            <p>{`${currentXP} / ${threshold} XP`}</p>
                        </div>
                        <div className="flex justify-center m-8">
                            <XPBar xp={currentXP} xpToNextLevel={threshold} />
                        </div>
                    </div>
                </div>

                <SectionCard title={"Lesson Suggestions"}>
                    <div className="flex flex-col items-start space-y-8 m-4 p-6">
                        <Link to={'/jamroom'} className="border-2 p-4 w-full shadow-lg hover:shadow-xl hover:bg-gray-50"><p>Intro to the Guitar</p></Link>
                        <Link to={'/jamroom'} className="border-2 p-4 w-full shadow-lg hover:shadow-xl hover:bg-gray-50"><p>Mastering the 8 Essential Beginner Chords</p></Link>
                        <Link to={'/jamroom'} className="border-2 p-4 w-full shadow-lg hover:shadow-xl hover:bg-gray-50"><p>Intro to Scales</p></Link>
                    </div>
                    <div className="flex justify-center">
                        <Link to={'/jamroom'}><button className="px-8 py-3 hover:cursor-pointer">GO TO THE JAM ROOM</button></Link>
                    </div>
                </SectionCard>

                <SectionCard title={"Daily Challenges"}>
                    <div className="p-6">
                        <form className="flex flex-col p-4 gap-6 space-y-4">
                            {dailyChallenges.map((challenge) => {
                                {/* checks if a challenge is marked complete by the user */}
                                const isComplete = completedChallenges.includes(String(challenge.id));
                                return <label key={challenge.id} className="flex justify-between space-x-3 border-2 p-2 hover:cursor-pointer shadow-md hover:shadow-lg hover:bg-gray-50">
                                    <div className="flex justify-start">
                                        <input type="checkbox" name={challenge.challenge}
                                            // if the challenge is checked, disabled the checkbox to prevent 'XP farming'
                                            onClick={() => handleCompletedChallenge(challenge.id, challenge.xpReward)}
                                            checked={isComplete} disabled={isComplete}
                                            >
                                        </input>
                                        {/* if the challenge is marked complete, put a line through the text and xp value */}
                                        <p className={`${isComplete ? "line-through" : ""} pl-2`}>{challenge.challenge}</p>
                                    </div>
                                    <span className={isComplete ? "line-through" : ""}>{`${challenge.xpReward} XP`}</span>
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