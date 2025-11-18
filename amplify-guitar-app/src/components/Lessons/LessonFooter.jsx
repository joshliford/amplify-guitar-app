export default function LessonFooter({ selectedItem, handleCloseModal, addXP, completedLessons, markLessonComplete }) {

    const isComplete = completedLessons.includes(selectedItem.id); 

    const handleCompletedLesson = () => {
        if (!isComplete) {
            addXP(selectedItem.xpReward);
            markLessonComplete(selectedItem.id);
        }
        handleCloseModal();
    }

    return (
        <div className="flex items-center justify-between mt-8 font-['Nunito_Sans']">
            <div>
                <span className="text-[#1F5D3D] font-bold">XP Reward: +{selectedItem.xpReward}</span>
            </div>

            {!isComplete && (
                <button onClick={handleCompletedLesson} className="hover:cursor-pointer bg-amber-700 hover:bg-amber-800 text-white border-2 border-black rounded-lg p-2 transition">
                    Complete Lesson +{selectedItem.xpReward} XP
                </button>
            )}

            <button onClick={() => handleCloseModal()} className="cursor-pointer hover:cursor-pointer bg-amber-700 hover:bg-amber-800 text-white border-2 border-black rounded-lg p-2 transition">
                Close Lesson
            </button>
        </div>
    )
    
}