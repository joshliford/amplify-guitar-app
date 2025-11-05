import NavBar from "./NavBar"

export default function Header() {

    return (
        <div className="flex flex-col p-4 border-b-2">
            <header>
                <h1>Amplify</h1>
                <div className="flex flex-row justify-between">
                    <h2>Gamified Guitar Learning Dashboard</h2>
                    <NavBar />
                </div>
            </header>
        </div>
    )
}