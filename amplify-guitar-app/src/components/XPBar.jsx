export default function XPBar({ xp, xpToNextLevel }) {

    const fillPercentage = (xp, xpToNextLevel) => {
        return (xp / xpToNextLevel) * 100;
    }

    const xpBarWidth = fillPercentage(xp, xpToNextLevel);

    return (
        <div className="rounded-xl bg-gray-400 h-6">
            <span
            className="bg-slate-800 h-full block rounded-xl"
            style={{ width: xpBarWidth }}
            >   
            </span>
        </div>
    )

}