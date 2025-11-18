import { Link, useLocation } from 'react-router-dom'
import NavBar from "./NavBar"

export default function Header() {

    // hide the header when on the auth page
    const location = useLocation();
    if (location.pathname === "/auth") return null;

    return (
        <div className="flex flex-col p-4 border-b-4 border-[#D4A574] bg-[#1F5D3D] shadow-lg">
            <header>
                <Link to={'/dashboard'}><h1 className="text-4xl text-[#FFFEF7] font-['Lora'] hover:text-[#EBD5B3] transition-colors mb-1">
                    Amplify</h1>
                </Link>
                <div className="flex flex-row justify-between">
                    <h2 className="text-[#EBD5B3] font-['Lora'] text-xl">Gamified Guitar Learning Dashboard</h2>
                    <NavBar />
                </div>
            </header>
        </div>
    )
}