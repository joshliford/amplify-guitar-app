import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export default function Modal({ isModalOpen, handleCloseModal, selectedItem }) {

    return (
        <div>
            <Dialog open={isModalOpen} onClose={handleCloseModal} transition
            className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-closed:opacity-0">
                <DialogBackdrop className="fixed inset-0 bg-black/30" />
                    <DialogPanel className="relative z-50 max-w-lg space-y-4 bg-white p-12">
                        <DialogTitle className="font-bold text-center">{selectedItem.title}</DialogTitle>
                        <Description>{selectedItem.details}</Description>
                        {selectedItem.fingerPositions && 
                            <ul>
                                {selectedItem.fingerPositions.map((position) => {
                                    let posStatus;

                                    if (position.fret === "X") {
                                        posStatus = "Muted";
                                    } else if (position.fret === 0) {
                                        posStatus = "Open";
                                    } else {
                                        posStatus = `Fret ${position.fret} - Finger ${position.finger}`;
                                    }

                                    return (
                                        <li key={position.string}>
                                            {`${position.string}: ${posStatus}`}
                                        </li>
                                    )
                                })}
                            </ul>
                        }
                        <div className="flex gap-4">
                            <button className="cursor-pointer hover:cursor-pointer border-2 rounded-lg p-2" onClick={() => handleCloseModal()}>Close</button>
                        </div>
                    </DialogPanel>
            </Dialog>
        </div>
    )
}