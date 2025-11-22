import { Button } from "@headlessui/react";
import Modal from "./Modal";

export default function RegistrationSuccessful({ successModalOpen, handleCloseModal }) {
  return (
    <div>
      <Modal isModalOpen={successModalOpen} handleCloseModal={handleCloseModal}>
        <div className="flex flex-col justify-center items-center space-y-8 px-6 w-full font-['Nunito_Sans']">
          <h2 className="text-lg">Account Successfully Created!</h2>
          <Button
            onClick={handleCloseModal}
            className="mt-4 border rounded-xl px-4 py-2 bg-[#1F5D3D] text-white hover:bg-[#17472f] hover:cursor-pointer font-['Nunito_Sans']"
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
