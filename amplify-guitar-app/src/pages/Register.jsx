import { Field, Input, Button, Label } from "@headlessui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import RegistrationSuccessful from "../components/RegistrationSuccessful";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [registrationError, setRegistrationError] = useState("");

  const navigate = useNavigate();
  const handleCloseRegistrationModal = () => setSuccessModalOpen(false);

  const handleRegistration = (e) => {
    e.preventDefault();

    if (!isRegistrationValid) {
      setRegistrationError("Invalid Email or Password");
      return;
    }

    setRegistrationError("");
    setSuccessModalOpen(true);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const passwordsMatch = password === confirmPassword;
  const isRegistrationValid =
    email.includes("@") &&
    email.length > 0 &&
    password.length > 0 &&
    passwordsMatch;

  return (
    <div className="relative min-h-screen flex items-center justify-center py-[10vh] bg-[#0a1628]">
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 px-11 py-10 bg-white/6">
        <h1 className="text-[32px] text-[#149eca] font-['Lora'] tracking-wide">
          Amplify
        </h1>
        <h2 className="text-[28px] font-bold font-['Lora'] text-stone-200 tracking-tight mb-1">
          Create an account
        </h2>
        <p className="text-sm text-gray-400 mb-8 font-['Nunito_Sans']">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-[#149eca] hover:underline transition-colors"
          >
            Sign in
          </Link>
        </p>
        <form onSubmit={handleRegistration}>
          <Field className="flex flex-col gap-4 font-['Nunito_Sans']">
            <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-1 flex-1">
              <Label className="text-xs font-semibold uppercase tracking-wide text-white/50">
                First name
              </Label>
              <Input
                id="register-first-name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                name="first-name"
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 rounded-xl text-sm text-white/90 placeholder:text-gray-500 bg-gray-700 border border-white/10 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-400/10 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <Label className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Last name
              </Label>
              <Input
                id="register-last-name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                name="last-name"
                type="text"
                placeholder="Smith"
                className="w-full px-4 py-3 rounded-xl text-sm text-white/90 placeholder:text-gray-500 bg-gray-700 border border-white/10 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-400/10 transition-all"
              />
            </div>
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Email address
              </Label>
              <Input
                id="register-email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-sm text-white/90 placeholder:text-gray-500 bg-gray-700 border border-white/10 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-400/10 transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Password
              </Label>
              <Input
                id="register-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm text-white/90 placeholder:text-gray-500 bg-gray-700 border border-white/10 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-400/10 transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Confirm password
              </Label>
              <Input
                id="register-confirm-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm text-white/90 placeholder:text-gray-500 bg-gray-700 border border-white/10 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-400/10 transition-all"
                required
              />
            </div>

            {registrationError && (
              <p className="text-red-400 text-sm font-semibold text-center font-['Nunito_Sans']">
                {registrationError}
              </p>
            )}

            <Button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-semibold font-['Nunito_Sans'] cursor-pointer transition-colors mt-1 bg-[#415a77] hover:bg-[#31455a]"
            >
              Create Account
            </Button>
          </Field>
        </form>
      </div>

      <RegistrationSuccessful
        successModalOpen={successModalOpen}
        handleCloseModal={handleCloseRegistrationModal}
      />
    </div>
  );
}
