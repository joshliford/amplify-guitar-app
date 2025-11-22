import { Check } from "lucide-react";
import Card from "../Card";

export default function LessonCard({ lesson, handleViewItem, completedLessons }) {
  
  const isComplete = completedLessons.includes(lesson.id);

  return (
    <Card
      title={lesson.title}
      description={lesson.description}
      category={lesson.category}
    >
      {isComplete && (
        <div className="flex justify-center items-center mt-2 mb-6">
          <Check size={20} className="text-emerald-600 dark:text-[#1F5D3D]" />
          <p className="text-emerald-600 dark:text-[#1F5D3D] font-['Nunito_Sans']">
            Lesson Complete!
          </p>
        </div>
      )}
      <div className="flex justify-center">
        {isComplete ? (
          <button
            onClick={() => handleViewItem(lesson)}
            className="mt-2 p-2 dark:bg-slate-700 dark:hover:bg-slate-800 dark:text-white bg-amber-700 hover:bg-amber-800 rounded-xl shadow-lg text-white hover:cursor-pointer hover:shadow-xl transition font-['Nunito_Sans']"
          >
            View Lesson
          </button>
        ) : (
          <button
            onClick={() => handleViewItem(lesson)}
            className="mt-2 p-2 dark:bg-slate-700 dark:hover:bg-slate-800 dark:text-white bg-amber-700 hover:bg-amber-800 rounded-xl shadow-lg text-white hover:cursor-pointer hover:shadow-xl transition font-['Nunito_Sans']"
          >
            Start Lesson
          </button>
        )}
      </div>
    </Card>
  );
}
