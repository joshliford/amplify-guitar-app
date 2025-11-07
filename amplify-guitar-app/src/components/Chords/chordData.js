export const chords =
    [
        {   id: 1,
            title: "G Major",
            description: "Bright, open chord used in various songs.",
            details: "G Major primarily uses 3 fingers across the lowE, A, and highE strings.",
            fingerPositions: [
                { string: "E", fret: 3, finger: 2 },
                { string: "A", fret: 2, finger: 1 },
                { string: "D", fret: 0, finger: 0 },
                { string: "G", fret: 0, finger: 0 },
                { string: "B", fret: 0, finger: 0 },
                { string: "e", fret: 3, finger: 3 }
            ]
        },
        {   id: 2,
            title: "C Major", 
            description: "Full chord that's a staple in countless genres.",
            details: "C Major uses 3 fingers across the A, D, and B strings.",
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
            description: "Uplifting chord that's commonly used in Rock and Country",
            details: "Triangle shape on the G, B, and highE strings.",
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
            description: "Versatile chord with warm and balanced tones",
            details: "Three fingers packed tightly on the 2nd fret. Can also be played with one finger by 'barring' the D, G, and B strings.",
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
            description: "One of the easiest and most beginner friendly chords",
            details: "Two fingers on the A and D strings.",
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
            description: "A fairly challenging barre chord with bright and punchy tones",
            details: "Uses a full index finger barre across all six strings.",
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