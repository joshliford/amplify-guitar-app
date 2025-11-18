import { Description, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

export default function ChordModal({ selectedItem, handleCloseModal }) {

    return (
        <div className="font-['Nunito_Sans'] text-lg">
            <div className="w-full max-w-[95%] mx-auto">
                <Description className="text-center mt-2 mb-4">{selectedItem.details}</Description>
            </div>
            <img src={selectedItem.image} alt={selectedItem.title} className="mt-6 mb-6 w-full max-w-[95%] mx-auto h-auto rounded-xl shadow-lg" />

            <div className="border-t-2 border-b-2 border-[#D4A574]">
                <Disclosure as="div" className="p-6 w-full max-w-[95%] mx-auto border-3 border-black rounded-xl mt-4 mb-4 shadow-lg hover:shadow-xl bg-[#1F5D3D] hover:bg-[#1F5D3D]/95 text-white">
                    <DisclosureButton className="flex w-full items-center justify-between hover:cursor-pointer">
                        <p>
                            Tips
                        </p>
                        <ChevronDown className="hover:cursor-pointer" />
                    </DisclosureButton>
                    <DisclosurePanel className="text-white">
                        {selectedItem.tips &&
                            <ol className="list-decimal px-4 mt-2 space-y-2">
                                {selectedItem.tips.map((tip, index) => {
                                    return <li key={index}>{tip}</li>
                                })}
                            </ol>
                        }
                    </DisclosurePanel>
                </Disclosure>
            </div>
            
            {selectedItem.fingerPositions &&
            <div>
                <p className="font-semibold text-center text-xl mb-4 mt-4 w-full">Finger Positions (top to bottom):</p>
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
                            <li key={position.string} className="text-lg">
                                {`${position.string}: ${posStatus}`}
                            </li> )
                    })}
                </ul>
            </div>
            }
            <div className="mt-8">
                <button onClick={() => handleCloseModal()} className="hover:cursor-pointer bg-amber-700 hover:bg-amber-800 text-white border-2 border-black rounded-lg p-2 transition">
                    Close
                </button>
            </div>
        </div>
    )
}