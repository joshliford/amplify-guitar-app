import { Link } from "react-router";

export default function Footer() {
  return (
    <div>
      <footer className="flex w-full justify-center font-['Nunito-Sans'] p-2 border-t-2 border-[#e2e8f0] dark:border-[#149eca]/30 bg-white dark:bg-gray-800">
        <p className="text-[#718096] dark:text-[#e0e0e0] text-lg">
          &copy; 2025 Amplify | Gamified Guitar Learning Dashboard |{" "}
          <Link to={"https://github.com/joshliford"} target="_blank" className="hover:text-[#087ea4]">
            GitHub
          </Link>{" "}
          | Josh Liford
        </p>
      </footer>
    </div>
  );
}
