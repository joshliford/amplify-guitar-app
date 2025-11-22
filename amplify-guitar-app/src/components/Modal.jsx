import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import woodGrain from "../assets/images/woodgrainbackground.png";
import lightWoodGrain from "../assets/images/lightwoodbackground.png";
import darkWoodGrain from "../assets/images/darkwoodbackground.png";

export default function Modal({ isModalOpen, handleCloseModal, category, title, children }) {

  const headerBackground = () => {
    if (category === "chord") return woodGrain;
    if (category === "scale") return darkWoodGrain;
    if (category === "lesson") return lightWoodGrain;
  };

  return (
    <div>
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        transition
        className="fixed inset-0 flex items-center justify-center bg-black/30 p-4 transition duration-300 ease-in-out data-closed:opacity-0"
      >
        <DialogBackdrop className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <DialogPanel className="relative z-50 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-4 rounded-2xl bg-[#FFF8EE]/90 dark:bg-[#1A1F2A] p-6 mx-4 shadow-xl shadow-black/20">
          {title && (
            <div
              className="rounded-t-2xl p-6 border-b-4 border-[#D4A574] shadow-lg min-h-20 flex items-center justify-center"
              style={{
                backgroundImage: `url(${headerBackground()})`,
                backgroundSize: "cover",
              }}
            >
              <h2
                className={
                  category === "lesson"
                    ? `text-center text-3xl font-bold text-black font-['Lora']`
                    : `text-center text-3xl font-bold text-[#FFFEF7] font-['Lora']`
                }
              >
                {title}
              </h2>
            </div>
          )}
          {children}
        </DialogPanel>
      </Dialog>
    </div>
  );
}
