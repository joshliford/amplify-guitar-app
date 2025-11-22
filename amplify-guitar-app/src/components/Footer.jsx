import { Link } from "react-router";

export default function Footer() {
  return (
    <div>
      <footer className="flex w-full justify-center font-['Nunito-Sans'] p-2 border-t-4 border-[#D4A574] bg-[#1F5D3D] dark:bg-[#1A1F2A]">
        <p className="text-[#FFFEF7] text-lg">
          &copy; 2025 Amplify | Gamified Guitar Learning Dashboard |{" "}
          <Link to={"https://github.com/joshliford"} target="_blank">
            GitHub
          </Link>{" "}
          | Josh Liford
        </p>
      </footer>
    </div>
  );
}
