import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar() {

    const [ isActive, setIsActive ] = useState("Dashboard");

    return (
        <div className="flex flex-row justify-end">
            <nav>
                <ul className="flex gap-6 text-[#FFFEF7] font-['Nunito_Sans'] text-xl">

                    <li className={isActive === "Dashboard"
                        ? `relative text-[#D4A574] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[#D4A574]`
                        : `relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#D4A574] after:transition-all after:duration-300 hover:after:w-full`
                    }>
                        <Link to='/dashboard' onClick={() => setIsActive("Dashboard")}>Dashboard</Link></li>

                    <li className={isActive === "Jam Room"
                        ? `relative text-[#D4A574] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[#D4A574]`
                        : `relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#D4A574] after:transition-all after:duration-300 hover:after:w-full`
                    }>
                        <Link to='/jamroom' onClick={() => setIsActive("Jam Room")}>Jam Room</Link></li>

                    <li className={isActive === "The Shed"
                        ? `relative text-[#D4A574] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[#D4A574]`
                        : `relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#D4A574] after:transition-all after:duration-300 hover:after:w-full`
                    }>
                        <Link to='/shed' onClick={() => setIsActive("The Shed")}>The Shed</Link></li>

                    <li className={isActive === "About"
                        ? `relative text-[#D4A574] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[#D4A574]`
                        : `relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#D4A574] after:transition-all after:duration-300 hover:after:w-full`
                    }>
                        <Link to='/about' onClick={() => setIsActive("About")}>About</Link></li>

                </ul>
            </nav>
        </div>
    )
}