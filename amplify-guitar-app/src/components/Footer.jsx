import { Link } from "react-router";

export default function Footer() {
  return (
    <div>
      <footer className="flex w-full justify-center font-['Nunito_Sans'] p-2 border-t-2 border-stone-200 dark:border-[#778da9]/30 bg-white dark:bg-gray-800">
        <p className="text-stone-400 dark:text-[#e0e0e0] text-lg">
          &copy; 2025 Amplify | Gamified Guitar Learning Dashboard |{" "}
          <Link to={"https://github.com/joshliford"} target="_blank" className="hover:text-[#415a77] transition-colors">
            GitHub
          </Link>{" "}
          | Josh Liford
        </p>
      </footer>
    </div>
  );
}
