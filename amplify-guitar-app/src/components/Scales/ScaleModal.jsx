import { Description, DialogTitle, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

export default function ScaleModal({ selectedItem, handleCloseModal }) {

    return (
        <div>
            <div className="border-b border-gray-300 w-full max-w-[90%] mx-auto">
                <DialogTitle className="text-center font-bold mb-2">{selectedItem.title}</DialogTitle>
            </div>
            <div className="w-full max-w-[90%] mx-auto">
                <Description className="text-center mt-2 mb-4">{selectedItem.details}</Description>
            </div>
            <img src={selectedItem.image} alt={selectedItem.title} className="mt-6 mb-6 w-full max-w-[90%] mx-auto h-auto rounded-xl shadow-lg" />
            {selectedItem.position &&
                <ol className="list-disc p-4 w-full max-w-[90%] mx-auto mb-4 text-sm space-y-2 border-b border-gray-300">
                    {selectedItem.position.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ol>
            }
                <Disclosure as="div" className="p-6 w-full max-w-[90%] mx-auto border-2 rounded-xl mb-4 shadow-lg hover:shadow-xl hover:bg-gray-200/60 bg-gray-100">
                    <DisclosureButton className="flex w-full items-center justify-between">
                        <span className="font-medium">
                            View Tab
                        </span>
                        <ChevronDown className="hover:cursor-pointer hover:text-gray-600" />
                    </DisclosureButton>
                    <DisclosurePanel className="text-gray-600">
                        {selectedItem.tab &&
                            <img src={selectedItem.tab} alt={selectedItem.title} className="mt-4 mb-2 rounded-xl shadow-lg" />
                        }
                    </DisclosurePanel>
                </Disclosure>

            {selectedItem.whenToUse &&
            <div className="max-w-[90%] mx-auto border-t border-gray-300">
            <p className="font-semibold text-center mb-2 mt-4 w-full">When to Use?</p>
                <ul className="list-disc p-4 text-sm space-y-2">
                    {selectedItem.whenToUse.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
            }

            <div className="mt-8">
                <button className="cursor-pointer hover:cursor-pointer hover:bg-gray-100 border-2 rounded-lg p-2" onClick={() => handleCloseModal()}>Close</button>
            </div>

        </div>
    )
}