import { Link, useLocation } from 'react-router-dom'
import NavBar from "./NavBar"

export default function Header() {

    const location = useLocation();
    if (location.pathname === "/auth") return null;

    return (
        // header container
        <div className="flex flex-col p-4 border-b-2 bg-[#1F5D3D]">
            <header>
                {/* links directly to the homepage when the 'Amplify' heading is clicked */}
                <Link to={'/dashboard'}><h1 className="text-4xl text-[#FFFEF7] max-w-xl">Amplify</h1></Link>
                <div className="flex flex-row justify-between">
                    <h2 className="text-[#FFFEF7] text-lg">Gamified Guitar Learning Dashboard</h2>
                    {/* display the NavBar within the header */}
                    <NavBar />
                </div>
            </header>
        </div>
    )
}