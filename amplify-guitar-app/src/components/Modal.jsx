import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

export default function Modal({ isModalOpen, handleCloseModal, children }) {

    return (
        <div>
            <Dialog open={isModalOpen} onClose={handleCloseModal} transition
            className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-closed:opacity-0">
                <DialogBackdrop className="fixed inset-0 bg-black/30" />
                    <DialogPanel className="relative z-50 max-w-lg max-h-[90vh] overflow-y-auto space-y-4 rounded-2xl bg-white p-12">
                        {children}
                        <div className="flex gap-4">
                            <button className="cursor-pointer hover:cursor-pointer border-2 rounded-lg p-2" onClick={() => handleCloseModal()}>Close</button>
                        </div>
                    </DialogPanel>
            </Dialog>
        </div>
    )
}