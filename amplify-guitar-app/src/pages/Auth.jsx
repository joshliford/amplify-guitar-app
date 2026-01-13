import { Field, Input, TabGroup, Tab, TabList, TabPanels, TabPanel, Button } from "@headlessui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import backgroundImage from "../assets/images/loginbackground.jpg";
import { Mail, Lock } from "lucide-react";
import RegistrationSuccessful from "../components/RegistrationSuccessful";

export default function Auth() {

  const [isActive, setIsActive] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleCloseRegistrationModal = () => setSuccessModalOpen(false);

  const delay = async (ms) => {
    return new Promise((resolve) => 
      setTimeout(resolve, ms));
  }

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!isLoginValid) {
      setLoginError("Invalid Email or Password");
      return;
    }

    setIsLoading(true);
    setLoginError("");
    await delay(1500);
    navigate("/dashboard");
  };

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

  const validEmail = email === "fretboardwizard@email.com";
  const validPassword = password === "p@ssword";
  const isLoginValid = validEmail && validPassword;

  const passwordsMatch = password === confirmPassword;
  const isRegistrationValid = email.includes("@") && email.length > 0 && password.length > 0 && passwordsMatch;

  return (
    <main
      className="flex flex-col justify-center items-center bg-cover w-full min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col max-w-1/2 justify-center items-center bg-[#1F5D3D]/80 text-white mb-4 p-6 rounded-xl">
        <p>
          Note: For early development, please use the following to login as a mock user
        </p>
        <ul className="list-disc">
          <li>Email: fretboardwizard@email.com</li>
          <li>Password: p@ssword</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center mb-4 bg-[#1F5D3D]/80 p-4 rounded-xl text-white">
        <h1 className="text-4xl font-['Lora']">Amplify</h1>
        <p className="font-['Lora'] text-lg">
          Gamified Guitar Learning Dashboard
        </p>
      </div>
      <TabGroup className="flex flex-col justify-center items-center rounded-2xl bg-[#FFF8EE]/90 p-10 border-[#3E2723]">
        <TabList className="flex gap-6">
          <Tab
            onClick={() => {
              setIsActive("Login");
              setEmail("");
              setPassword("");
              setConfirmPassword("");
              setLoginError("");
              setRegistrationError("");
            }}
            className={`
                    ${
                      isActive === "Login"
                        ? `border-2 border-black rounded-xl p-2 hover:cursor-pointer text-white bg-[#1F5D3D] font-['Nunito_Sans'] text-lg`
                        : `border-2 border-black rounded-xl p-2 hover:cursor-pointer hover:bg-[#FFF8EE] font-['Nunito_Sans'] text-lg transition-colors`
                    }`}
          >
            Login
          </Tab>
          <Tab
            onClick={() => {
              setIsActive("Register");
              setEmail("");
              setPassword("");
              setConfirmPassword("");
              setLoginError("");
              setRegistrationError("");
            }}
            className={`
                    ${
                      isActive === "Register"
                        ? `border-2 border-black rounded-xl p-2 hover:cursor-pointer text-white bg-[#1F5D3D] font-['Nunito_Sans'] text-lg`
                        : `border-2 border-black rounded-xl p-2 hover:cursor-pointer hover:bg-[#FFF8EE] font-['Nunito_Sans'] text-lg transition-colors`
                    }`}
          >
            Register
          </Tab>
        </TabList>

        <TabPanels>
          {/* container for login form */}
          <TabPanel>
            <form className="p-4">
              <div className="flex flex-col items-center mt-2 mb-6">
                <h1 className="text-xl font-semibold font-['Lora'] mb-4">
                  Have an Account?
                </h1>
                <p className="text-lg font-['Nunito_Sans']">Sign In</p>
              </div>
              <div>
                <Field className="flex flex-col space-y-4 font-['Nunito-Sans']">
                  <div className="relative">
                    <Mail size={20} className="absolute left-2 top-3" />
                    <Input
                      id="login-email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="border-2 p-2 pl-8 rounded-3xl bg-white/80 border-black font-['Nunito_Sans']"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Lock size={20} className="absolute left-2 top-3" />
                    <Input
                      id="login-password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="border-2 p-2 pl-8 rounded-3xl bg-white/80 border-black font-['Nunito_Sans']"
                      required
                    />
                  </div>
                </Field>
                {loginError && (
                  <p className="text-red-500 font-semibold text-center mb-2 font-['Nunito_Sans']">
                    {loginError}
                  </p>
                )}
                <Button
                  type="submit"
                  onClick={handleSignIn}
                  disabled={isLoading}
                  className={isLoading ? `disabled cursor-not-allowed border-2 border-black rounded-3xl p-2 max-w-3xl w-full text-lg bg-gray-300 font-['Nunito_Sans']` : `border-2 border-black rounded-3xl p-2 max-w-3xl w-full text-lg text-white bg-[#1F5D3D] hover:bg-[#1F5D3D]/90 cursor-pointer font-['Nunito_Sans']`}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            </form>
          </TabPanel>

          {/* container for register form */}
          <TabPanel>
            <form className="p-6">
              <div className="flex flex-col items-center mt-2 mb-2">
                <h2 className="text-xl font-semibold mb-4 font-['Lora']">
                  Create an Account
                </h2>
              </div>
              <div>
                <Field className="flex flex-col space-y-4 font-['Nunito-Sans']">
                  <div className="relative">
                    <Mail size={20} className="absolute left-2 top-3" />
                    <Input
                      id="register-email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      className="border-2 p-2 pl-8 rounded-3xl bg-white/80 border-black font-['Nunito_Sans']"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Lock size={20} className="absolute left-2 top-3" />
                    <Input
                      id="register-password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      className="border-2 p-2 pl-8 rounded-3xl bg-white/80 border-black font-['Nunito_Sans']"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Lock size={20} className="absolute left-2 top-3" />
                    <Input
                      id="register-confirm-password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      className="border-2 p-2 pl-8 rounded-3xl bg-white/80 border-black font-['Nunito_Sans']"
                      required
                    />
                  </div>
                  {registrationError && (
                    <p className="text-red-500 font-semibold text-center mb-2 font-['Nunito_Sans']">
                      {registrationError}
                    </p>
                  )}
                  <Button
                    type="submit"
                    onClick={handleRegistration}
                    className="border-2 border-black rounded-3xl p-2 max-w-3xl w-full text-white text-lg bg-[#1F5D3D] hover:bg-[#1F5D3D]/90 cursor-pointer"
                  >
                    Register
                  </Button>
                </Field>
              </div>
            </form>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <RegistrationSuccessful
        successModalOpen={successModalOpen}
        handleCloseModal={handleCloseRegistrationModal}
      />
    </main>
  );
}
