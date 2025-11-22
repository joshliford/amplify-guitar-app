export default function XPBar({ xp, xpToNextLevel }) {
    
  // calculates percentage of progress
  const fillPercentage = (xp, xpToNextLevel) => {
    return (xp / xpToNextLevel) * 100;
  };

  // sets the width of the 'fill bar' to be whatever the 'fill percentage' is from above
  const xpBarWidth = fillPercentage(xp, xpToNextLevel);

  return (
    <div className="rounded-xl bg-gray-400 dark:bg-gray-600 h-6 w-full">
      <span
        className="bg-linear-to-r from-[#1F5D3D] via-[#1F5D3D] to-[#D4A574] dark:bg-linear-to-r dark:from-[#1A1A1A] dark:via-gray-600 dark:to-[#D4A574] h-full block rounded-xl"
        // fills the bar based on the xpBarWidth value
        style={{ width: xpBarWidth + "%" }}
      ></span>
    </div>
  );
}
