import { Description, DialogTitle, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

export default function ChordModal({ selectedItem, handleCloseModal }) {

    return (
        <div>
            <div className="border-b border-gray-300 w-full max-w-[95%] mx-auto">
                <DialogTitle className="text-center font-bold mb-2">{selectedItem.title}</DialogTitle>
            </div>
            <div className="w-full max-w-[95%] mx-auto">
                <Description className="text-center mt-2 mb-4">{selectedItem.details}</Description>
            </div>
            <img src={selectedItem.image} alt={selectedItem.title} className="mt-6 mb-6 w-full max-w-[95%] mx-auto h-auto rounded-xl shadow-lg" />
                <Disclosure as="div" className="p-6 w-full max-w-[95%] mx-auto border-2 rounded-xl mb-4 hover:shadow-xl hover:bg-gray-200/60 bg-gray-100 shadow-lg shadow-black/20">
                    <DisclosureButton className="flex w-full items-center justify-between">
                        <span className="font-medium">
                            Tips
                        </span>
                        <ChevronDown className="hover:cursor-pointer hover:text-gray-600" />
                    </DisclosureButton>
                    <DisclosurePanel className="text-gray-600">
                        {selectedItem.tips &&
                            <ol className="list-decimal px-4 mt-2 space-y-2">
                                {selectedItem.tips.map((tip, index) => {
                                    return <li key={index}>{tip}</li>
                                })}
                            </ol>
                        }
                    </DisclosurePanel>
                </Disclosure>
            
            {selectedItem.fingerPositions &&
            <div className="max-w-[95%] mx-auto border-t border-gray-300">
                <p className="font-semibold text-center mb-4 mt-4 w-full">Finger Positions (top to bottom):</p>
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
                            </li> )
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