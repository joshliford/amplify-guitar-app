import { Select, Label, Field } from '@headlessui/react'
import { useState } from 'react'
import SectionCard from '../components/SectionCard'
import { practiceGoals } from '../components/Data/practiceData'
import PracticeTimer from '../components/PracticeTimer'
import { CassetteTape } from 'lucide-react'

export default function Shed({ addXP }) {

    const [ selectedGoal, setSelectedGoal ] = useState(null);
    const [ runTime, setRunTime ] = useState(0);

    const handleGoalChange = (e) => {
        const goal = practiceGoals.find(g => g.value === e.target.value);
        setSelectedGoal(goal);
    }

    const handleCompleteSession = () => {
        if (!selectedGoal) return;
        addXP(selectedGoal.xpReward);
    }

    const isGoalMet = selectedGoal && runTime / 60000 >= selectedGoal.minutes;

    return (
        <main className="mt-8 bg-[#FFFEF7] font-['Nunito_Sans'] px-4">
            <SectionCard title={"The Shed | Practice Room"} icon={<CassetteTape size={35} className="text-[#FFFEF7] m-2" />}>
                <div className="p-4 mb-6 bg-[#1F5D3D]/20 rounded-xl shadow-lg">
                    <p className="text-lg mb-8">Begin your practice session and start shredding</p>
                    <Field>
                        <Label className="font-semibold font-['Lora'] text-xl">Set a Practice Goal</Label>
                            <div className="">
                                <Select name="practice-goal" className="hover:cursor-pointer shadow-lg hover:shadow-xl mt-3 w-full bg-amber-700 hover:bg-amber-800 text-white p-2 rounded-xl border-2 border-black"
                                onChange={handleGoalChange} defaultValue="">
                                    <option value={""}>Choose a Goal...</option>
                                    {practiceGoals.map((goal, index) => {
                                        return <option key={index} value={goal.value}>{`${goal.goal} | ${goal.xpReward} XP | ${goal.minutes} Min`}</option>
                                    })}
                                </Select>
                            </div>
                    </Field>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <PracticeTimer runTime={runTime} setRunTime={setRunTime} />
                    {selectedGoal &&
                        <button onClick={handleCompleteSession} disabled={!isGoalMet} className={`w-full max-w-2xl shadow-lg hover:shadow-xl px-6 py-2 rounded-xl font-semibold text-white transition
                            ${isGoalMet
                            ? "bg-[#1F5D3D] hover:bg-[#174b30] hover:cursor-pointer"
                            : "bg-gray-300 cursor-not-allowed"
                    }`}>
                        {`Complete Practice +${selectedGoal.xpReward} XP`}
                    </button>
                    }
                </div>

            </SectionCard>
        </main>
    )
}