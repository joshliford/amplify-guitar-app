import { Description, DialogTitle, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

export default function ChordModal({ selectedItem }) {

    return (
        <div>
            <DialogTitle className="text-center font-bold mb-4">{selectedItem.title}</DialogTitle>
            <Description className="text-center mb-6">{selectedItem.details}</Description>
            <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-auto rounded-xl shadow-lg mb-4" />
                <Disclosure as="div" className="p-6 border-2 rounded-xl mb-4 hover:shadow-lg">
                    <DisclosureButton className="flex py-2">
                        <span className="font-medium">
                            Tips/Advice
                        </span>
                        <ChevronDown className="hover:cursor-pointer hover:text-gray-600 open:rotate-180" />
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
                <ul className="flex flex-col items-center">
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
            }
        </div>
    )
}