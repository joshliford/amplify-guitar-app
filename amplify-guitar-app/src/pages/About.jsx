import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function About() {
  return (
    <main className="bg-[#FFFEF7] dark:bg-black font-['Nunito_Sans'] text-lg">
      <section className="space-y-4 py-12 px-12">
        <div className="flex justify-center">
          <h1 className="text-2xl text-center font-bold font-['Lora'] border-b-2 border-b-[#D4A574] inline-block">
            About Amplify
          </h1>
        </div>
        <p>
          <strong className="text-[#1F5D3D] dark:text-[#EBD5B3] font-['Lora'] text-xl">
            Amplify
          </strong>{" "}
          is a gamified guitar-learning dashboard designed to make consistent
          practice simple, structured, and rewarding. The overall goal is to
          combine progress tracking and a clean practice workflow so guitar
          players at any skill level can build long-term habits and improve
          through small, daily wins.
        </p>
        <p>
          Whether you&apos;re learning your first chords or refining advanced
          techniques, Amplify keeps everything you need in one place—organized,
          motivating, and easy to return to.
        </p>
      </section>
      <section className="space-y-4 py-12 px-12 mt-12">
        <div className="flex justify-center">
          <h2 className="text-2xl text-center font-bold font-['Lora'] border-b-2 border-b-[#D4A574] inline-block">
            Purpose
          </h2>
        </div>
        <p className="mb-4 text-lg">
          <strong className="text-[#1F5D3D] dark:text-[#EBD5B3] font-['Lora'] text-xl">
            Amplify
          </strong>{" "}
          was built to solve a problem I often faced: staying consistent. After
          playing both electric and acoustic guitar for 10+ years—often on and
          off as life got busier—the motivation behind Amplify was to create a
          tool that brings structure, clarity, and fun back into practicing.
        </p>
        <p>
          Building Amplify was a way to re-spark that passion while creating
          something meaningful for other players facing the same struggle. By
          turning practice into a guided, gamified experience, Amplify makes it
          easier to stay motivated, track improvement, and enjoy the process of
          learning again.
        </p>
      </section>

      <section className="py-12 px-12 mt-12 flex flex-col items-center mb-6">
        <div className="w-full max-w-8xl">
          <div className="flex justify-center mb-6">
            <h3 className="text-2xl font-bold font-['Lora'] border-b-2 border-b-[#D4A574] inline-block text-center">
              Core Pages
            </h3>
          </div>
          <div className="w-full max-w-8xl shadow-2xl rounded-xl overflow-hidden border-2 border-[#D4A574] bg-white dark:bg-[#1A1F2A]">
            <Table className="text-lg">
              <TableHeader className="bg-[#1F5D3D] dark:bg-[#D4A574] font-['Lora'] text-xl border-b-3 border-[#D4A574]">
                <TableRow className="font-bold font-['Lora'] text-xl">
                  <TableHead className="pl-4 text-[#FFFEF7] dark:text-black">
                    Page
                  </TableHead>
                  <TableHead className="text-[#FFFEF7] dark:text-black">
                    Purpose
                  </TableHead>
                  <TableHead className="text-[#FFFEF7] dark:text-black">
                    Features
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="text-lg">
                  <TableCell className="text-[#1F5D3D] dark:text-[#EBD5B3] font-semibold font-['Lora'] text-xl pl-4">
                    The Dashboard
                  </TableCell>
                  <TableCell>Central hub to view your progress</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Current Level & XP</li>
                      <li>XP Bar/Progress to next Level</li>
                      <li>Suggested Lessons and Daily Challenges</li>
                      <li>Links to The Jam Room and The Shed</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-[#1F5D3D] dark:text-[#EBD5B3] font-semibold font-['Lora'] text-xl  pl-4">
                    The Jam Room
                  </TableCell>
                  <TableCell>
                    Main learning and exploration hub where you primarily earn
                    XP by completing lessons
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>
                        <strong>Lessons:</strong> topics covering chords,
                        scales, etc.
                      </li>
                      <li>
                        <strong>Chord Library:</strong> common chords with
                        diagrams
                      </li>
                      <li>
                        <strong>Scale Library:</strong> essential scales with
                        tabs
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-[#1F5D3D] dark:text-[#EBD5B3] font-semibold font-['Lora'] text-lg  pl-4">
                    The Shed
                  </TableCell>
                  <TableCell>
                    Designed for focused, distraction-free practice
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>
                        <strong>Practice Timer:</strong> track session length
                      </li>
                      <li>
                        <strong>Practice Goals:</strong> choose a specific goal
                        to practice
                      </li>
                      <li>
                        <strong>Session Completion XP:</strong> earn XP and
                        rewards
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  );
}
