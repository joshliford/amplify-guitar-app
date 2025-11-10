{/* universal footer for the lesson modal to include specific buttons/data */}
import { useState } from 'react'

export default function LessonFooter({ selectedItem, handleCloseModal, addXP, completedLessons, markLessonComplete }) {

    // check if the completedLessons array includes the selectedItem id (converted to string to prevent type mismatch)
    const isComplete = completedLessons.includes(String(selectedItem.id)); 

    const handleCompletedLesson = () => {
        if (!isComplete) { // if the lesson is not complete, award the XP and add the lesson to the completedLessons array
            addXP(selectedItem.xpReward);
            markLessonComplete(selectedItem.id);
        }
        handleCloseModal(); // close the modal automatically once the complete lesson button is clicked by the user
    }

    return (
        <div className="flex items-center justify-between mt-8">

            <div>
                <span>XP Reward: +{selectedItem.xpReward}</span>
            </div>


            {!isComplete && (
                <button className="hover:cursor-pointer hover:bg-gray-100 border-2 rounded-lg p-2"
                onClick={handleCompletedLesson}>
                    Complete Lesson +{selectedItem.xpReward} XP
                </button>
            )}

            
            <button className="cursor-pointer hover:cursor-pointer hover:bg-gray-100 border-2 rounded-lg p-2" onClick={() => handleCloseModal()}>
                Close Lesson
            </button>
            

        </div>
    )

}