import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

export default function Modal({ isModalOpen, handleCloseModal, children }) {

    return (
        <div>
            <Dialog open={isModalOpen} onClose={handleCloseModal} transition
            className="fixed inset-0 flex items-center justify-center bg-black/30 p-4 transition duration-300 ease-in-out data-closed:opacity-0">
                <DialogBackdrop className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                    <DialogPanel className="relative z-50 max-w-xl w-full max-h-[90vh] overflow-y-auto space-y-4 rounded-2xl bg-white p-6 mx-4 shadow-xl shadow-black/20">
                        {children}
                    </DialogPanel>
            </Dialog>
        </div>
    )
}