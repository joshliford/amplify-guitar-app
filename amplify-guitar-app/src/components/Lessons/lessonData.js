export const lessons = [
  {
    id: 1,
    category: "lesson",
    title: "Intro to Scales",
    description:
      "Explore what scales are and how to properly learn to play them.",
    xpReward: 600,
    difficulty: "beginner",
    sections: [
      {
        heading: "What are Scales?",
        text: "Scales are repeating patterns of notes that give music its mood. They're the foundation behind riffs, solos, melodies, and chords.",
      },
      {
        heading: "Why They Matter",
        text: "Learning scales helps you improvise, understand keys, navigate the fretboard, and build musical vocabulary. It's how you turn randomness into intention when you play.",
      },
      {
        heading: "Types of Scales",
        list: [
          "Pentatonic - simple, universal five-note shapes",
          "Blues Scale - pentatonic with a gritty 'blue note'",
          "Major Scale - the foundation of most theory",
          "Natural Minor (Aeolian) - darker, emotional flavor",
          "Modes - musical 'shades' built from the major scale (Dorian, Mixolydian, etc.)",
        ],
      },
      {
        heading: "How to Practice Scales",
        list: [
          "Start slowly",
          "Play the pattern up and down using alternate picking",
          "Try to test yourself and call out the root notes as you go through the scale",
          "Try creating simple musical phrases instead of running the scale from top to bottom",
        ],
      },
      {
        heading: "Where to Begin",
        list: [
          "A Minor Pentatonic (5th fret, Box 1)",
          "E Minor Pentatonic (12th fret, Box 1)",
        ],
      },
      {
        heading: "Helpful Video for Scales",
        // youtube embeded link for iframes (little window for displaying another webpage (i.e. youtube))
        videoUrl: "https://www.youtube.com/embed/fq68vpUftV8",
      },
    ],
  },
  {
    id: 2,
    category: "lesson",
    title: "Mastering the 8 Essential Beginner Chords",
    description:
      "Learn the foundational chords every guitarist needs to start playing real songs instantly.",
    xpReward: 600,
    difficulty: "beginner",
    sections: [
      {
        heading: "What are Beginner Chords?",
        text: "These eight chords form the backbone of countless songs across every genre. They use simple open shapes that ring clearly and teach your fingers how to navigate the fretboard.",
      },
      {
        heading: "Why These Chords Matter",
        text: "Once you can switch between these chords smoothly, you unlock thousands of songs. They strengthen finger coordination, hand positioning, timing, and overall confidence.",
      },
      {
        heading: "The Essential 8 Chords",
        list: [
          "D Major - bright and uplifting; common in pop, folk, and country",
          "A Major - warm and full; perfect for rhythm playing",
          "E Major - bold, resonant, used in blues and rock",
          "A Minor - emotional and dramatic; pairs well with C and G",
          "E Minor - one of the easiest chords; dark and powerful",
          "D Minor - sad, expressive, used in emotional progressions",
          "G Major - open, wide, essential for strumming patterns",
          "C Major - foundational chord for thousands of songs",
        ],
      },
      {
        heading: "How to Practice These Chords",
        list: [
          "Press firmly with curved fingers to avoid muting adjacent strings",
          "Strum slowly and check each note for clarity",
          "Practice switching between two chords at a time (D - A, G - C, Am - C)",
          "Use a metronome to keep transitions steady—even at very slow tempos",
          "Focus on small, efficient finger movements",
        ],
      },
      {
        heading: "Where to Begin",
        list: [
          "Start with E Minor, A Minor, and D Major—three of the easiest open shapes",
          "Practice the classic G-C-D progression used in countless songs",
          "Try the beginner-friendly progression: Em - G - D - C",
          "Aim for clean tone first, speed second",
        ],
      },
      {
        heading: "Helpful Video for the Chords",
        videoUrl: "https://www.youtube.com/embed/lRJ_d3PqPIQ",
      },
    ],
  },
  {
    id: 3,
    category: "lesson",
    title: "Intro to the Guitar",
    description:
      "Learn how to hold the guitar, tune your strings, and play your first melody.",
    xpReward: 300,
    difficulty: "beginner",
    sections: [
      {
        heading: "Parts of the Guitar",
        list: [
          "Headstock - holds the tuning machines",
          "Tuners - adjust each string's pitch",
          "Neck - long wooden section where your fretting hand plays",
          "Fretboard - where you press strings to create notes",
          "Body - the main sound-producing chamber (acoustic) or pickup housing (electric)",
          "Bridge - anchors the strings to the guitar",
          "Pickups - capture string vibrations and send them to an amp",
        ],
      },
      {
        heading: "How to Hold the Guitar",
        list: [
          "Sit up straight with both feet on the ground",
          "Rest the guitar body on your thigh (right thigh for right-handed players)",
          "Keep your strumming arm relaxed and draped over the guitar",
          "Hold the neck at a slight upward angle for comfort and visibility",
        ],
      },
      {
        heading: "How to Hold a Pick",
        text: "Grip the pick between your thumb and the side of your index finger. Keep it firm enough not to slip, but loose enough to glide across the strings.",
      },
      {
        heading: "Understanding the Strings",
        list: [
          "The guitar has six strings, numbered 1-6",
          "String 1 is the thinnest (high E); string 6 is the thickest (low E)",
          "Standard tuning from lowest to highest is: E - A - D - G - B - e",
        ],
      },
      {
        heading: "Where to Begin",
        list: [
          "Start by learning to hold the guitar comfortably without tension",
          "Practice light down-strums on open strings",
          "Memorize the names and numbers of the six strings",
          "Try playing your first easy chords: Em and G",
        ],
      },
      {
        heading: "Helpful Intro to Guitar Video",
        videoUrl: "https://www.youtube.com/embed/BBz-Jyr23M4",
      },
    ],
  },
  {
    id: 4,
    category: "lesson",
    title: "Fretboard Navigation for Beginners",
    description:
      "Learn how the guitar neck is organized so you can find notes, play confidently, and move beyond memorizing shapes.",
    xpReward: 400,
    difficulty: "beginner",
    sections: [
      {
        heading: "Why Learn the Fretboard?",
        text: "Knowing where notes live helps you understand scales, chords, riffs, and improvisation. It’s the key to unlocking freedom on the instrument instead of relying solely on shapes.",
      },
      {
        heading: "The Musical Alphabet",
        text: "The guitar uses the same 12-note musical alphabet: A A# B C C# D D# E F F# G G#. Notes repeat every 12 frets (called an octave).",
      },
      {
        heading: "Frets = Half Steps",
        text: "Each fret is a half-step. Moving up the neck raises pitch; moving toward the headstock lowers pitch.",
      },
      {
        heading: "Memorizing the Low E and A Strings",
        list: [
          "Learn natural notes first (A, B, C, D, E, F, G)",
          "Use landmarks: 3rd fret (G), 5th fret (A), 7th fret (B), 8th fret (C), 10th fret (D), 12th fret (E)",
          "Everything across the fretboard builds from these two strings",
        ],
      },
      {
        heading: "Simple Fretboard Drills",
        list: [
          "Say each note out loud while moving up the low E string",
          "Play a note on E, find the same note on A, then D, then G",
          "Pick a random fret and identify the note before you play it",
        ],
      },
      {
        heading: "Helpful Video for Fretboard Basics",
        videoUrl:
          "https://www.youtube.com/embed/kNgpKxHo0H4?si=wvc73d1CYb4qrrwn",
      },
    ],
  },
  {
    id: 5,
    category: "lesson",
    title: "Power Chords 101",
    description:
      "Learn how to play power chords—the backbone of rock, punk, metal, and countless modern genres.",
    xpReward: 500,
    difficulty: "beginner",
    sections: [
      {
        heading: "What Are Power Chords?",
        text: "Power chords are simple two- or three-note shapes built from the root and the fifth. They work on any fret and sound full, punchy, and aggressive—perfect for distorted tones.",
      },
      {
        heading: "Why Power Chords Are Useful",
        text: "They're easy to move around the neck, allow fast transitions, and form the core of many iconic riffs. They're also great for ear training and fretboard confidence.",
      },
      {
        heading: "Basic Shapes",
        list: [
          "Root on the 6th string: 1st finger (root), 3rd finger (fifth), 4th finger (octave)",
          "Root on the 5th string: identical shape, just shifted one string down",
          "Two-note version: root + fifth (great for beginners)",
        ],
      },
      {
        heading: "Technique Tips",
        list: [
          "Use the tip of your index finger to lightly mute unused strings",
          "Apply enough pressure to avoid buzzing",
          "Keep your palm lightly resting on the bridge for palm-muted tones",
          "Practice sliding the shape up and down without breaking form",
        ],
      },
      {
        heading: "Songs That Use Power Chords",
        list: [
          "'Smells Like Teen Spirit' - Nirvana",
          "'Seven Nation Army' - The White Stripes",
          "'American Idiot' - Green Day",
          "And many, many more...",
        ],
      },
      {
        heading: "Helpful Video for Power Chords",
        videoUrl:
          "https://www.youtube.com/embed/DVveuwoVmmY?si=0-RxJbQMz9IiaCNh",
      },
    ],
  },
  {
    id: 6,
    category: "lesson",
    title: "Intro to Strumming & Rhythm",
    description:
      "Learn how rhythm, timing, and basic strumming patterns shape the groove of your playing.",
    xpReward: 300,
    difficulty: "beginner",
    sections: [
      {
        heading: "Why Rhythm Matters",
        text: "Rhythm is the backbone of guitar playing. Even simple chords sound great with solid timing. Developing rhythm helps you play tighter, stay in sync with other musicians, and build confidence.",
      },
      {
        heading: "Basic Strumming Mechanics",
        list: [
          "Keep your wrist loose — avoid stiff arm movements",
          "Use small, relaxed motions from the forearm",
          "Strum through the strings in a smooth motion, not one at a time",
          "Hold the pick lightly (but not so loose that it flies away)",
        ],
      },
      {
        heading: "Downstrokes vs. Upstrokes",
        text: "Downstrokes give a strong, accented feel. Upstrokes feel lighter and fill in the groove. Most patterns alternate between them to create natural flow.",
      },
      {
        heading: "Common Beginner Strumming Patterns",
        list: [
          "D D U U D U (classic pop pattern)",
          "D — D U — U D U (campfire-style rhythm)",
          "D U D U (simple and steady eighth notes)",
        ],
      },
      {
        heading: "How to Practice Rhythm",
        list: [
          "Count out loud: '1 & 2 & 3 & 4 &'",
          "Practice with a metronome or backing track",
          "Start slow (60-70 BPM) and gradually increase",
          "Keep your hand moving even when you skip a strum",
        ],
      },
      {
        heading: "Helpful Video for Strumming",
        videoUrl:
          "https://www.youtube.com/embed/ely9LaJJJr4?si=53kWfJvvFFVFIxzN",
      },
    ],
  },
];
