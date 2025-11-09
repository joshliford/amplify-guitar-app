import gMajorImg from '../../assets/images/Gmajor.png'
import fMajorImg from '../../assets/images/Fmajor.png'
import eMinorImg from '../../assets/images/Eminor.png'
import dMajorImg from '../../assets/images/DMajor.png'
import cMajorImg from '../../assets/images/Cmajor.png'
import aMajorImg from '../../assets/images/Amajor.png'

export const chords =
    [
        {   id: 1,
            title: "G Major",
            difficulty: "easy",
            description: "Bright, open chord used in various songs.",
            details: "G Major primarily uses 3 fingers across the lowE, A, and highE strings.",
            tips: [
                "Let the open strings ring clearly by arching your fretting fingers.",
                "Anchor your ring finger firmly to help with transitions."
            ],
            image: gMajorImg,
            fingerPositions: [
                { string: "e", fret: 3, finger: 3 },
                { string: "B", fret: 0, finger: 0 },
                { string: "G", fret: 0, finger: 0 },
                { string: "D", fret: 0, finger: 0 },
                { string: "A", fret: 2, finger: 1 },
                { string: "E", fret: 3, finger: 2 }
            ]
        },
        {   id: 2,
            title: "C Major", 
            difficulty: "easy",
            description: "Full chord that's a staple in countless genres.",
            details: "C Major uses 3 fingers across the A, D, and B strings.",
            tips: [
                "Keep your thumb low on the back of the neck to reach the 3rd fret bass note.",
                "Aim for clean string separation—avoid touching the open G and high E."
            ],
            image: cMajorImg,
            fingerPositions: [
                { string: "E", fret: "X", finger: null }, // X = muted string
                { string: "A", fret: 3, finger: 3 },
                { string: "D", fret: 2, finger: 2 },
                { string: "G", fret: 0, finger: 0 }, // open string
                { string: "B", fret: 1, finger: 1 },
                { string: "e", fret: 0, finger: 0 } // open string
            ]
        },
        {   id: 3, 
            title: "D Major",
            difficulty: "easy", 
            description: "Uplifting chord that's commonly used in Rock and Country",
            details: "Triangle shape on the G, B, and highE strings with an open D string.",
            tips: [
                "Keep your fingertips pointed straight down to avoid muting adjacent strings.",
                "Strum from the D string downward to avoid low-string noise."
            ],
            image: dMajorImg,
            fingerPositions: [
                { string: "E", fret: "X", finger: null },
                { string: "A", fret: "X", finger: null },
                { string: "D", fret: 0, finger: 0 },
                { string: "G", fret: 2, finger: 1 },
                { string: "B", fret: 3, finger: 3 },
                { string: "e", fret: 2, finger: 2 }
            ]
        },
        {   id: 4, 
            title: "A Major",
            difficulty: "easy",
            description: "Versatile chord with warm and balanced tones",
            details: "Three fingers packed tightly on the 2nd fret. Can also be played with one finger by 'barring' the D, G, and B strings while leaving the A string open to ring.",
            tips: [
                "Angle your fingers slightly to fit them comfortably in the tight space.",
                "Try the one-finger mini-barre if the three-finger version feels cramped."
            ],
            image: aMajorImg,
            fingerPositions: [
                { string: "E", fret: "X", finger: null },
                { string: "A", fret: 0, finger: 0 },
                { string: "D", fret: 2, finger: 1 },
                { string: "G", fret: 2, finger: 2 },
                { string: "B", fret: 2, finger: 3 },
                { string: "e", fret: 0, finger: 0 }
            ]
        },
        {   id: 5, 
            title: "E Minor",
            difficulty: "easy",
            description: "One of the easiest and most beginner friendly chords",
            details: "Two fingers on the A and D strings while playing all 6 strings with one smooth strum.",
            tips: [
                "Relax your fretting hand—this chord shouldn't feel tense.",
                "Strum all strings for a rich, full minor sound."
            ],
            image: eMinorImg,
            fingerPositions: [
                { string: "E", fret: 0, finger: 0 },
                { string: "A", fret: 2, finger: 2 },
                { string: "D", fret: 2, finger: 3 },
                { string: "G", fret: 0, finger: 0 },
                { string: "B", fret: 0, finger: 0 },
                { string: "e", fret: 0, finger: 0 }
            ]
        },
        {   id: 6, 
            title: "F Major",
            difficulty: "intermediate",
            description: "A fairly challenging barre chord with bright and punchy tones",
            details: "Uses a full index finger barre across all six strings.",
            tips: [
                "Rotate your index finger slightly toward the nut (head of the guitar) for better pressure distribution."
            ],
            image: fMajorImg,
            fingerPositions: [
                { string: "E", fret: 1, finger: 1 }, // index barre
                { string: "A", fret: 3, finger: 3 },
                { string: "D", fret: 3, finger: 4 },
                { string: "G", fret: 2, finger: 2 },
                { string: "B", fret: 1, finger: 1 }, // part of barre
                { string: "e", fret: 1, finger: 1 } // also part of barre
            ]
        }
    ]