import { Link } from "react-router-dom";
import XPBar from "../components/XPBar";
import SectionCard from "../components/SectionCard";
import { dailyChallenges } from "../components/Data/dailyChallenges";
import { rewards } from "../components/Data/rewards";
import { lessons } from "../components/Lessons/lessonData";
import { Flame, AlarmClock, BookOpen, Zap } from "lucide-react";

export default function Home({ streak, level, currentXP, xpNeeded, addXP, completedChallenges, markChallengeComplete }) {

  const threshold = 1000;
  const nextLevel = level + 1;

  const handleCompletedChallenge = (challengeId, xpReward) => {
    const isComplete = completedChallenges.includes(challengeId);

    if (!isComplete) {
      addXP(xpReward);
      markChallengeComplete(challengeId);
    }
  };

  const reward = rewards.find((r) => r.level === level);

  return (
    <main className="grid grid-cols-2 gap-4 bg-[#f9fafb] dark:bg-[#1a2536] font-['Nunito-Sans'] py-12 px-16">
      <SectionCard
        title={`Welcome Back, Josh!`}
        icon={<Zap size={35} className="text-[#FFFEF7] dark:text-black" />}
      >
        <div className="flex gap-3 items-center mb-6 pb-4 border-b-2 border-[#D4A574] dark:border-[#EBD5B3]">
          <div className="p-2 bg-[#1F5D3D] dark:bg-[#EBD5B3] rounded-full">
            <reward.icon size={25} className="text-[#FFFEF7] dark:text-black" />
          </div>
          <div>
            <span className="font-bold text-2xl font-['Lora'] text-[#1F5D3D] dark:text-[#EBD5B3] block">
              {reward.title}
            </span>
            <p className="text-sm font-['Nunito_Sans'] italic dark:text-gray-300 mt-1">
              {reward.description}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center text-xl font-semibold font-['Lora'] mb-4">
          <p>Level: {level}</p>
          <div className="flex items-center gap-2">
            <Flame size={25} className="fill-orange-500 animate-pulse" />
            <p>Streak: {streak} days</p>
          </div>
        </div>
        <div className="flex flex-row justify-between px-1 py-2 font-bold text-lg">
          <p>EXPERIENCE POINTS</p>
          <p className="text-amber-700 dark:text-[#EBD5B3]">
            {currentXP} / {threshold} XP
          </p>
        </div>
        <div className="flex justify-center my-4">
          <XPBar xp={currentXP} xpToNextLevel={threshold} />
        </div>
        <p className="text-center text-sm dark:text-gray-300">
          {xpNeeded} XP left until level {nextLevel}
        </p>
      </SectionCard>

      <SectionCard
        title={"Lesson Suggestions"}
        icon={<BookOpen size={35} className="m-2 text-[#FFFEF7] dark:text-black" />}
      >
        <div>
          <ul className="flex flex-col items-start space-y-8 m-4 p-6">
            {lessons.map((lesson) => {
              return (
                <Link
                  to={"/jamroom"}
                  key={lesson.id}
                  className="text-xl border-3 p-4 w-full shadow-lg hover:shadow-xl hover:bg-[#FFFEF7] dark:hover:bg-[#1F5D3D]/70 dark:hover:border-[#E3B85B] dark:hover:text-[#FFFEF7] hover:text-[#1F5D3D] hover:font-semibold hover:border-amber-700 transition rounded-lg"
                >
                  <li className="flex justify-between">
                    <span>{lesson.title}</span>
                    <span className="text-amber-700 dark:text-[#EBD5B3] font-semibold">{`Earn +${lesson.xpReward} XP`}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center">
          <Link to={"/jamroom"}>
            <button className="px-8 py-3 bg-amber-700 dark:bg-[#e5c391] dark:hover:bg-[#D4A574] dark:text-black hover:bg-amber-800 rounded-xl shadow-lg text-white hover:cursor-pointer hover:shadow-xl transition">
              GO TO THE JAM ROOM
            </button>
          </Link>
        </div>
      </SectionCard>

      <SectionCard
        title={"Daily Challenges"}
        icon={<AlarmClock size={35} className="text-[#FFFEF7] dark:text-black m-2"/>}
      >
        <div className="p-6">
          <form className="flex flex-col p-4 gap-6 space-y-4">
            {dailyChallenges.map((challenge) => {
              // checks if a challenge is marked complete by the user
              const isComplete = completedChallenges.includes(challenge.id);
              return (
                <label
                  key={challenge.id}
                  className={
                    isComplete
                      ? `text-xl flex justify-between space-x-3 border-2 p-4 hover:cursor-pointer shadow-md hover:shadow-lg bg-[#1F5D3D]/70 border-amber-600 dark:border-[#E3B85B] rounded-lg`
                      : `text-xl flex justify-between space-x-3 border-3 p-4 hover:cursor-pointer shadow-md hover:shadow-lg hover:bg-linear-to-r hover:from-[#1F5D3D]/10 hover:to-transparent hover:border-[#1F5D3D] transition rounded-lg`
                  }
                >
                  <div className="flex justify-start items-center">
                    <input
                      type="checkbox"
                      name={challenge.challenge}
                      // if the challenge is checked, disabled the checkbox to prevent 'XP farming'
                      onChange={() =>
                        handleCompletedChallenge(
                          challenge.id,
                          challenge.xpReward
                        )
                      }
                      checked={isComplete}
                      disabled={isComplete}
                      className="size-5"
                    />
                    <p
                      className={`${
                        isComplete ? "line-through text-[#FFFEF7]" : ""
                      } pl-2`}
                    >
                      {challenge.challenge}
                    </p>
                  </div>
                  <span
                    className={
                      isComplete
                        ? "line-through text-[#FFFEF7]"
                        : "text-amber-700 dark:text-[#EBD5B3] font-semibold"
                    }
                  >{`+${challenge.xpReward} XP`}</span>
                </label>
              );
            })}
          </form>
        </div>
        <div className="flex justify-center">
          <Link to={"/shed"}>
            <button className="px-8 py-3 bg-amber-700 hover:bg-amber-800 dark:bg-[#e5c391] dark:hover:bg-[#D4A574] dark:text-black rounded-xl shadow-lg text-white hover:cursor-pointer hover:shadow-xl transition">
              GO TO THE SHED
            </button>
          </Link>
        </div>
      </SectionCard>
    </main>
  );
}
