import { Select, Label, Field } from '@headlessui/react'
import SectionCard from '../components/SectionCard'
import { practiceGoals } from './practiceData'

export default function Shed() {

    return (
        <div className="mt-8">
            <SectionCard title={"The Shed | Practice Room"}>
                <div className="p-4 mb-6">
                    <p className="font-semibold text-lg">Practice Timer</p>
                    <p className="text-sm font-medium mb-8">Begin your practice session and start shredding</p>
                    <Field>
                        <Label className="font-semibold text-lg">Set a Practice Goal</Label>
                            <div className="relative">
                                <Select name="practice-goal" aria-label="Practice Goal" className=" w-[75%]">
                                    {practiceGoals.map((goal, index) => {
                                        return <option key={index} value={goal.value}>{`${goal.goal} | ${goal.xpReward} XP`}</option>
                                    })}
                                </Select>
                            </div>
                    </Field>
                </div>
            </SectionCard>
        </div>
    )
}