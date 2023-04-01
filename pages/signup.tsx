import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { BsSpotify, BsFacebook, BsGoogle } from "react-icons/bs";
import { Button } from "../components/commons/Button";
import { InputComponent } from "../components/commons/Input";

export default function SingupPage() {
    return (
        <>
            <div className="container mx-auto lg:max-w-3xl mt-16">
                <div className="flex flex-col items-center justify-center">
                    <Link href={"/"}>
                        <div className="text-white flex items-center justify-center">
                            <BsSpotify color="black" className="text-4xl lg:text-5xl" />
                            <h4 className={`text-black text-xl lg:text-4xl ml-2 font-semibold`}>Spotify</h4>
                        </div>
                    </Link>
                </div>
                <h4 className={`text-black text-xl lg:text-4xl font-semibold mt-6 lg:mt-16 text-center`}>Sign up for free to start listening.</h4>
                <div className="mx-8 pt-6 lg:pt-12">
                    <button className="bg-[#3B4482] w-full h-16 rounded-full flex items-center justify-center"><BsFacebook size={30} color="white" /><span className="ml-3 lg:ml-6 text-white text-base lg:text-xl">Sign up with Facebook</span></button>
                </div>
                <div className="mx-8 pt-3 lg:pt-8">
                    <button className="border-[3px] border-[#3B4482] w-full h-16 rounded-full flex items-center justify-center"><BsGoogle size={30} className="text-gray-600" /><span className="ml-3 lg:ml-6 text-gray-600 text-base lg:text-xl">Sign up with Google</span></button>
                </div>
                <div className="flex flex-row items-center justify-center pt-6">
                    <hr className="w-52" />
                    <span className="mx-10 text-2xl text-gray-500">or</span>
                    <hr className="w-52" />
                </div>
                <div>
                    <h4 className="flex items-center mt-4 justify-center text-black text-base lg:text-xl">Sign up with your email address</h4>
                </div>
                <div className="pt-10">
                    <InputComponent placeholder="Enter your email." label="What's your email?" />
                    <InputComponent placeholder="Enter your email again." label="Confirm your email" />
                    <InputComponent placeholder="Create a password." label="Create a password" />
                    <InputComponent placeholder="What should we call you?" label="Enter a profile name." />
                    <div className="flex flex-col mb-6">
                        <label className="text-lg pb-2">What's your date of birth?</label>
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex flex-col mr-4">
                                <label className="text-lg pb-2">Day</label>
                                <input type="text" placeholder="DD" className="border-2 px-4 text-gray-500 border-gray-300 h-16 rounded-md lg:w-32" />
                            </div>
                            <div className="flex flex-col mr-4">
                                <label className="text-lg pb-2">Month</label>
                                <select className="border-2 px-4 text-gray-500 border-gray-300 h-16 rounded-md lg:w-64">
                                    <option value="Month">Month</option>
                                    <option value="january">January</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-lg pb-2">Year</label>
                                <input type="text" placeholder="YYYY" className="border-2 px-4 text-gray-500 border-gray-300 h-16 rounded-md lg:w-48" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <div>
                            <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full" />
                            <label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">Male</label>
                        </div>
                        <div className="ml-8">
                            <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full" />
                            <label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">Female</label>
                        </div>
                        <div className="ml-8">
                            <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full" />
                            <label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">Non-binary</label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full" />
                        <label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">Prefer not to say</label>
                    </div>
                    <div className="mb-12">
                        <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full" />
                        <label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">Please send me news and offers from Spotify</label>
                    </div>
                    <div className="mb-12">
                        <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full" />
                        <label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">Share my registration data with Spotify's content providers for marketing purposes.</label>
                    </div>
                    <div className="mb-4">
                        <p className="text-sm">By clicking on sign-up, you agree to the <span className="text-green-700 underline">Spotify Terms and Conditions</span> and <span className="text-green-700 underline">Privacy Policy.</span></p>
                    </div>
                    <div className="mb-8 flex justify-center">
                        <Button className="bg-green-500 h-12 lg:h-14 px-12 lg:px-16">Sign up</Button>
                    </div>
                    <div className="mb-16 flex justify-center">
                        <p className="text-xl">Have an account? <Link href={"/login"} className="text-green-700 underline">Login.</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}