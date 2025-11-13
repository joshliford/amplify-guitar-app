import Modal from "./Modal";
import { rewards } from "./Data/rewards";

export default function LevelUpModal({ isModalOpen, handleCloseModal, level }) {

    const reward = rewards.find(r => r.level === level);

    return (
        <div>
            <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} level={level}>
                <div className="flex flex-col items-center space-y-3 p-12">
                    <h2 className="font-bold text-2xl">Level Up!</h2>
                    <p className="text-lg">You are now <strong>level {level}!</strong></p>
                    <p>New Title Earned: <strong>"{reward.title}"</strong></p>
                </div>
                <div>
                    <button onClick={handleCloseModal} className="bg-gray-100 rounded-xl px-6 mt-4 hover:bg-gray-200 hover:cursor-pointer">Close</button>
                </div>
            </Modal>
        </div>
    )

}