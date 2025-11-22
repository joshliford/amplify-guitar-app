import aMinPent from "../../assets/images/AmPentScale.png";
import aMinPentTab from "../../assets/images/AmPentTab.png";
import gPentMaj from "../../assets/images/GPentMajScale.png";
import gPentMajTab from "../../assets/images/GMajPentTab.png";
import eMinPent from "../../assets/images/EmPentScale.png";
import eMinPentTab from "../../assets/images/EmPentTab.png";
import aBlues from "../../assets/images/APentBluesScale.png";
import aBluesTab from "../../assets/images/ABluesTab.png";
import eAeolian from "../../assets/images/EAeolianScale.png";
import eAeolianTab from "../../assets/images/EAeolianTab.png";
import eDorian from "../../assets/images/EDorianScale.png";
import eDorianTab from "../../assets/images/EDorianTab.png";

export const scales = [
  {
    id: 1,
    category: "scale",
    title: "A Minor Pentatonic Scale",
    description:
      "One of the most common scales that can be used for many genres and styles.",
    details:
      "Expressive minor sound that fits blues, rock, and modern soloing effortlessly.",
    image: aMinPent,
    tab: aMinPentTab,
    position: ["Position: 5th fret (Box 1)", "Root notes on 5th and 7th frets"],
    whenToUse: [
      "Great for blues turnarounds, rock licks, and improvising in minor keys",
      "Smooth transition into the A Blues scale when you want an extra punch",
    ],
  },
  {
    id: 2,
    category: "scale",
    title: "G Pentatonic Major Scale",
    description: "Melodic scale that sounds smooth over major chords.",
    details: "Bright, open major sound that feels upbeat and melodic.",
    image: gPentMaj,
    tab: gPentMajTab,
    position: ["Position: 3rd fret (Box 1)", "Root notes on 3rd and 5th frets"],
    whenToUse: [
      "Works over G, G6, and Gmaj7 chords",
      "Great for melodic hooks and smooth major pentatonic soloing",
      "Ideal for major-key rhythm breaks and open-position phrasing",
    ],
  },
  {
    id: 3,
    category: "scale",
    title: "E Minor Pentatonic Scale",
    description: "5-note blues favorite that's perfect for expressive solos.",
    details:
      "Gritty, expressive minor sound that fuels blue, rock, and classic guitar solos.",
    image: eMinPent,
    tab: eMinPentTab,
    position: [
      "Position: 12th fret (Box 1)",
      "Same pattern as open E position",
    ],
    whenToUse: [
      "Works over Em and Em7 progressions",
      "Great for rock riffing and blues phrasing with bends and slides",
      "Transition into E Blues scale for added character",
    ],
  },
  {
    id: 4,
    category: "scale",
    title: "A Blues Scale",
    description:
      "6-note scale that is similar to A Minor Pentatnoic, just with an additional note.",
    details: "Soulful minor sound with signature 'grit' from the 'blue' note.",
    image: aBlues,
    tab: aBluesTab,
    position: [
      "Position: 5th fret (Box 1)",
      "Includes the flat 5 'blue note' between 7th and 8th frets",
    ],
    whenToUse: [
      "Works over A7, Am7, and most blues progressions in the key of A",
      "Ideal for bending and sliding licks",
      "Adds color and tension to A Minor Pentatonic licks",
    ],
  },
  {
    id: 5,
    category: "scale",
    title: "E Aeolian (Natural Minor) Scale",
    description: "Dark, emotional sound that fits in rock and metal.",
    details:
      "Dark, minor sound that creates expressive melodies in rock & metal.",
    image: eAeolian,
    tab: eAeolianTab,
    position: [
      "Position: 12th fret (Aeolian box)",
      "Root notes on 12th and 14th frets",
    ],
    whenToUse: [
      "Fits Em, Em7, and minor-key progressions in E",
      "Ideal for melodic runs and moody soloing",
      "Pairs with Em Pentatonic for more tonal depth",
    ],
  },
  {
    id: 6,
    category: "scale",
    title: "E Dorian Scale",
    description:
      "Smooth, groovy, 'cool jazz' character ideal for funk, fusion, and modal improvisation.",
    details:
      "Smooth, cool minor sound with subtle brightness thanks to the raised sixth.",
    image: eDorian,
    tab: eDorianTab,
    position: [
      "Position: 12th fret (Dorian pattern)",
      "Root on 12th fret of both E strings",
    ],
    whenToUse: [
      "Works great over Em7 grooves",
      "Great for funk, fusion, modal rock, and improvising",
    ],
  },
];
