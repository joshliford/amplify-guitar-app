// Math utility functions for XP-related calculations

// calculate the users level based on total XP
export function calculateLevel(totalXP, threshold = 1000) {
    return Math.floor(totalXP / threshold) + 1;
    // + 1 accounts for level 1 which would start at XP = 0
}

// calculate xp progression inside the current level
export function xpProgression(totalXP, threshold = 1000) {
    return totalXP % threshold;
    // returns xp amount the user has earned for this specific level (remainder)
}

// calculate xp needed for the next level
export function xpNeededToLevelUp(totalXP, threshold = 1000) {
    return threshold - xpProgression(totalXP);
    // correlates to the XP Bar component on the home page
    // dynamically "fills up" the XP Bar based on the value
}