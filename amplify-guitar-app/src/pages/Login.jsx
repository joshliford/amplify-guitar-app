import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from "../assets/images/guitarbackground.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const validEmail = email === "fretboardwizard@email.com";
  const validPassword = password === "p@ssword";
  const isLoginValid = validEmail && validPassword;

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!isLoginValid) {
      setLoginError("Invalid email or password.");
      return;
    }
    setIsLoading(true);
    setLoginError("");
    await delay(1500);
    navigate("/dashboard");
  };

  return (
    <div className="grid w-full lg:grid-cols-[55fr_45fr] min-h-screen">
      {/* Left branding panel */}
      <div
        className="max-lg:hidden flex flex-col justify-between bg-gray-300 bg-cover bg-center p-16 min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <h1 className="text-4xl font-['Lora'] text-white">
            Amplify
          </h1>
        </div>
        <div>
          <h2 className="text-4xl font-['Lora'] text-white leading-snug">
            Guitar practice,
            <br />
            <em>Amplified.</em>
          </h2>
          <p className="text-white/70 mt-3 font-['Nunito_Sans'] text-lg">
            Gamified Guitar Learning Dashboard
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex flex-col justify-center items-center bg-[#f9fafb] px-8 py-16">
        <div className="w-full max-w-sm">
          {/* Mobile */}
          <div className="mb-4 lg:hidden">
          <h1 className="text-5xl font-['Lora'] mb-2">
            Amplify
          </h1>
          <h2 className="font-['Nunito_Sans']">
            Gamified Guitar Learning Dashboard
          </h2>
          </div>

          <h2 className="text-3xl font-['Lora'] mb-2">
            Welcome back!
          </h2>
          <p className="text-[#718096] font-['Nunito_Sans'] mb-8">
            Sign in to your account
          </p>

          {/* Dev hint */}
          <div className="bg-[#415a77]/10 border border-[#415a77]/20 rounded-lg p-3 mb-6 text-sm font-['Nunito_Sans']">
            <p className="font-semibold mb-1">Mock user credentials</p>
            <p>Email: fretboardwizard@email.com</p>
            <p>Password: p@ssword</p>
          </div>

          <form onSubmit={handleSignIn} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold font-['Nunito_Sans']">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="border border-stone-300 rounded-lg px-4 py-2.5 text-sm font-['Nunito_Sans'] focus:outline-none focus:ring-2 focus:ring-[#415a77] bg-white"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold font-['Nunito_Sans']">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*****"
                className="border border-stone-300 rounded-lg px-4 py-2.5 text-sm font-['Nunito_Sans'] focus:outline-none focus:ring-2 focus:ring-[#415a77] bg-white"
              />
            </div>

            {loginError && (
              <p className="text-red-500 text-sm font-['Nunito_Sans']">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#415a77] hover:bg-[#31455a] text-white font-semibold font-['Nunito_Sans'] py-2.5 rounded-lg transition-colors disabled:opacity-60 mt-2 cursor-pointer"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="text-center text-sm text-[#718096] font-['Nunito_Sans'] mt-6">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-[#415a77] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
