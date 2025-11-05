import { Link } from 'react-router-dom'

export default function NavBar() {

    return (
        <div className="flex flex-row justify-end">
            <nav>
                <ul className="flex gap-6">
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/jamroom'>Jam Room</Link></li>
                    <li><Link to='/shed'>The Shed</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </div>
    )
}