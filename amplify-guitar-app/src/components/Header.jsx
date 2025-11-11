import { Link } from 'react-router-dom'
import NavBar from "./NavBar"

export default function Header() {

    return (
        // header container
        <div className="flex flex-col p-4 border-b-2">
            <header>
                {/* links directly to the homepage when the 'Amplify' heading is clicked */}
                <Link to={'/'}><h1>Amplify</h1></Link>
                <div className="flex flex-row justify-between">
                    <h2>Gamified Guitar Learning Dashboard</h2>
                    {/* display the NavBar within the header */}
                    <NavBar />
                </div>
            </header>
        </div>
    )
}