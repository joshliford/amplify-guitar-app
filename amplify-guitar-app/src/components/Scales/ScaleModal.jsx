import { Description, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export default function ScaleModal({ selectedItem, handleCloseModal }) {
  return (
    <div className="font-['Nunito_Sans'] text-lg">
      <div className="w-full max-w-[90%] mx-auto">
        <Description className="text-center mt-2 mb-4">
          {selectedItem.details}
        </Description>
      </div>
      <img
        src={selectedItem.image}
        alt={selectedItem.title}
        className="mt-6 mb-6 w-full max-w-[90%] mx-auto h-auto rounded-xl shadow-lg"
      />
      {selectedItem.position && (
        <ol className="list-disc p-4 w-full max-w-[90%] mx-auto mb-4 space-y-2 border-b-2 border-[#D4A574]">
          {selectedItem.position.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ol>
      )}

      <Disclosure as="div"
        className="p-6 w-full max-w-[90%] mx-auto border-3 border-black rounded-xl mb-4 shadow-lg hover:shadow-xl bg-[#1F5D3D] hover:bg-[#1F5D3D]/95 dark:border-[#D4A574] dark:bg-slate-700 dark:hover:bg-slate-800 text-white"
      >
        <DisclosureButton className="flex w-full items-center justify-between hover:cursor-pointer">
          <span>View Tab</span>
          <ChevronDown className="hover:cursor-pointer" />
        </DisclosureButton>
        <DisclosurePanel>
          {selectedItem.tab && (
            <img
              src={selectedItem.tab}
              alt={selectedItem.title}
              className="mt-4 mb-2 rounded-xl shadow-lg"
            />
          )}
        </DisclosurePanel>
      </Disclosure>

      {selectedItem.whenToUse && (
        <div className="max-w-[90%] mx-auto border-t-2 border-[#D4A574]">
          <p className="font-semibold text-xl text-center mb-2 mt-4 w-full">
            When to Use?
          </p>
          <ul className="list-disc p-4 space-y-2">
            {selectedItem.whenToUse.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      )}

      <div className="mt-8">
        <button
          onClick={() => handleCloseModal()}
          className="hover:cursor-pointer bg-amber-700 dark:bg-[#e5c391] dark:hover:bg-[#D4A574] dark:text-black hover:bg-amber-800 text-white border-2 border-black rounded-lg p-2 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
