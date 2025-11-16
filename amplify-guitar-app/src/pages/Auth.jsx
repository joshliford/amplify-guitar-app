import { Field, Label, Input, TabGroup, Tab, TabList, TabPanels, TabPanel, Button } from '@headlessui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import backgroundImage from '../assets/images/loginbackground.jpg'
import { Mail, Lock } from 'lucide-react';
import RegistrationSuccessful from '../components/RegistrationSuccessful';

export default function Auth() {

    const [ isActive, setIsActive ] = useState("Login");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ successModalOpen, setSuccessModalOpen ] = useState(false);

    const navigate = useNavigate();
    const handleCloseRegistrationModal = () => setSuccessModalOpen(false);

    const handleSignIn = (e) => {
        // prevents the page from reloading on sign in
        e.preventDefault();
        
        if (!email || !password) {
            return;
        }

        // navigate to the homepage/dashboard when sign in button is clicked
        navigate('/dashboard');

    }

    const handleRegistration = (e) => {
        // prevents the page from reloading on sign in
        e.preventDefault();
        
        if (!isRegistrationValid) {
            return;
        }

        setSuccessModalOpen(true);
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    }

    const validEmail = email === "fretboardwizard@email.com";
    const validPassword = password === "p@ssword";
    const isLoginValid = validEmail && validPassword;

    const passwordsMatch = password === confirmPassword;
    const isRegistrationValid = email.length > 0 && password.length > 0 && passwordsMatch;

    return (
        <main
            className="flex flex-col justify-center items-center bg-cover w-full min-h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex flex-col justify-center items-center mb-4 bg-[#1F5D3D]/80 p-4 rounded-xl text-white">
                <h1 className="text-4xl">Amplify</h1>
                <p>Gamified Guitar Learning Dashboard</p>
            </div>
            <TabGroup className="flex flex-col justify-center items-center rounded-2xl bg-[#FFF8EE]/90 p-10 border-[#3E2723]">
                <TabList className="flex gap-6">
                    <Tab onClick={() => setIsActive("Login")} className={`
                    ${isActive === "Login" ? `border rounded-xl p-2 hover:cursor-pointer text-white bg-[#1F5D3D]`
                        : `border rounded-xl p-2 hover:cursor-pointer `
                    }`}>
                        Login
                    </Tab>
                    <Tab onClick={() => setIsActive("Register")} className={`
                    ${isActive === "Register" ? `border rounded-xl p-2 hover:cursor-pointer text-white bg-[#1F5D3D]`
                        : `border rounded-xl p-2 hover:cursor-pointer `
                    }`}>
                        Register
                    </Tab>
                </TabList>

                <TabPanels>

                    {/* panel/container for login form */}
                    <TabPanel>
                        <form>
                            <div className="flex flex-col items-center mt-6 mb-6">
                                <h1 className="text-xl font-semibold mb-4">Have an Account?</h1>
                                <p className="text-lg text-[#3E2723]">Sign In</p>
                            </div>
                            <div>
                                <Field className="flex flex-col space-y-4">
                                    <div className="relative">
                                        <Mail size={20} className="absolute left-2 top-3" />
                                        <Input onChange={e => setEmail(e.target.value)} value={email} name="email" type="email" placeholder="Email" className="border p-2 pl-8 rounded-3xl bg-white/80 border-black" required />
                                    </div>
                                    <div className="relative">
                                        <Lock size={20} className="absolute left-2 top-3" />
                                        <Input onChange={e => setPassword(e.target.value)} value={password} name="password" type="password" placeholder="Password" className="border p-2 pl-8 rounded-3xl bg-white/80 border-black" required />
                                    </div>
                                </Field>
                                <Button type="submit" onClick={handleSignIn} disabled={!isLoginValid} className={`
                                   ${isLoginValid  ? `border rounded-3xl p-2 max-w-3xl w-full text-white bg-[#1F5D3D] cursor-pointer`
                                    : `border rounded-3xl p-2 max-w-3xl w-full bg-gray-200 cursor-not-allowed`
                                }`}>
                                    Sign In
                                </Button>
                            </div>
                        </form>
                    </TabPanel>

                    {/* panel/container for register form */}
                    <TabPanel>
                        <form>
                            <div className="flex flex-col items-center mt-12 mb-6">
                                <h2 className="text-xl font-semibold mb-4">Create Account</h2>
                            </div>
                            <div>
                                <Field className="flex flex-col space-y-4">
                                    <div className="relative">
                                        <Mail size={20} className="absolute left-2 top-3" />
                                        <Input onChange={e => setEmail(e.target.value)} value={email} name="email" type="email" placeholder="Enter Email" className="border p-2 pl-8 rounded-3xl bg-white/80 border-black" required />
                                    </div>
                                    <div className="relative">
                                        <Lock size={20} className="absolute left-2 top-3" />
                                        <Input onChange={e => setPassword(e.target.value)} value={password} name="password" type="password" placeholder="Enter Password" className="border p-2 pl-8 rounded-3xl bg-white/80 border-black" required />
                                    </div>
                                    <div className="relative">
                                        <Lock size={20} className="absolute left-2 top-3" />
                                        <Input onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} name="confirmPassword" type="password" placeholder="Confirm Password" className="border p-2 pl-8 rounded-3xl bg-white/80 border-black" required />
                                    </div>
                                    <Button type="submit" onClick={handleRegistration} disabled={!isRegistrationValid} className={`
                                        ${isRegistrationValid  ? `border rounded-3xl p-2 max-w-3xl w-full text-white bg-amber-700 cursor-pointer`
                                        : `border rounded-3xl p-2 max-w-3xl w-full bg-gray-200 cursor-not-allowed`
                                    }`}>
                                        Register
                                    </Button>
                                </Field>
                            </div>
                        </form>
                    </TabPanel>
                
                </TabPanels>

            </TabGroup>
        <RegistrationSuccessful successModalOpen={successModalOpen} handleCloseModal={handleCloseRegistrationModal} />
        </main>
    )

}