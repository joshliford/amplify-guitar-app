// Math utility functions for XP-related calculations

// calculate the users level based on total XP
export function calculateLevel(totalXP, threshold = 1000) {
  // + 1 accounts for level 1 which would start at XP = 0
  return Math.floor(totalXP / threshold) + 1;
}

// calculate xp progression inside the current level
export function xpProgression(totalXP, threshold = 1000) {
  // returns xp amount the user has earned for this specific level (remainder)
  return totalXP % threshold;
}

// calculate xp needed for the next level
// dynamically "fills up" the XP Bar based on the value
export function xpNeededToLevelUp(totalXP, threshold = 1000) {
  return threshold - xpProgression(totalXP);
}
