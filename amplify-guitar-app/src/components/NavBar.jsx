import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {

    const location = useLocation();

    return (
        <div className="flex flex-row justify-end">
            <nav>
                <ul className="flex gap-6 text-[#FFFEF7] font-['Nunito_Sans'] text-xl">

                    <li className={location.pathname === "/dashboard"
                        ? `text-[#EBD5B3] border-b-2 border-b-[#EBD5B3]`
                        : `text-[#FFFEF7] hover:text-[#EBD5B3] transition-colors`
                    }>
                        <Link to='/dashboard'>Dashboard</Link></li>

                    <li className={location.pathname === "/jamroom"
                        ? `text-[#EBD5B3] border-b-2 border-b-[#EBD5B3]`
                        : `text-[#FFFEF7] hover:text-[#EBD5B3] transition-colors`
                    }>
                        <Link to='/jamroom'>Jam Room</Link></li>

                    <li className={location.pathname === "/shed"
                        ? `text-[#EBD5B3] border-b-2 border-b-[#EBD5B3]`
                        : `text-[#FFFEF7] hover:text-[#EBD5B3] transition-colors`
                    }>
                        <Link to='/shed'>The Shed</Link></li>

                    <li className={location.pathname === "/about"
                        ? `text-[#EBD5B3] border-b-2 border-b-[#EBD5B3]`
                        : `text-[#FFFEF7] hover:text-[#EBD5B3] transition-colors`
                    }>
                        <Link to='/about'>About</Link></li>

                </ul>
            </nav>
        </div>
    )
}