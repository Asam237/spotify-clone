import Link from "next/link";
import { BsSpotify, BsFacebook, BsGoogle, BsApple } from "react-icons/bs";
import { Button } from "../components/commons/Button";
import { InputComponent } from "../components/commons/Input";

export default function LoginPage() {
    return (
        <>
            <div className="container mx-auto lg:max-w-3xl mt-10">
                <div className="flex flex-col items-center justify-center">
                    <Link href={"/"}>
                        <div className="text-white flex items-center justify-center pb-8">
                            <BsSpotify color="black" className="text-4xl lg:text-5xl" />
                            <h4 className={`text-black text-xl lg:text-4xl ml-2 font-semibold`}>Spotify</h4>
                        </div>
                    </Link>
                    <hr className="w-[100vw]" />
                </div>
                <h4 className={`text-black text-xl lg:text-base font-semibold mt-6 lg:mt-10 text-center`}>To continue, log in to Spotify.</h4>
                <div className="mx-8 pt-4">
                    <button className="bg-blue-600 tracking-[0.2rem] w-full h-16 rounded-full flex items-center justify-center"><BsFacebook size={20} color="white" /><span className="ml-3 lg:ml-6 text-white text-xs lg:text-base uppercase">Continue with Facebook</span></button>
                </div>
                <div className="mx-8 pt-4">
                    <button className="tracking-[0.2rem] bg-black w-full h-16 rounded-full flex items-center justify-center"><BsApple size={20} color="white" /><span className="ml-3 lg:ml-6 text-white text-xs lg:text-base  uppercase">Continue with Apple</span></button>
                </div>
                <div className="mx-8 pt-4">
                    <button className="border-[3px] tracking-[0.2rem] border-[#3B4482] w-full h-16 rounded-full flex items-center justify-center"><BsGoogle size={20} className="text-gray-600" /><span className="ml-3 lg:ml-6 text-gray-600 text-xs lg:text-base uppercase">Continue with Google</span></button>
                </div>
                <div className="flex flex-row items-center justify-center pt-6">
                    <hr className="w-52" />
                    <span className="mx-10 text-2xl text-gray-500">or</span>
                    <hr className="w-52" />
                </div>
                <div className="pt-6">
                    <InputComponent placeholder="Email address or username" label="Email address or username" />
                    <div className="flex flex-col mb-6">
                        <label className="text-lg pb-2">Password</label>
                        <div className="border-2 text-gray-500 border-gray-300 h-16 rounded-md">
                            <input type="password" placeholder="Password" className="w-full h-full px-4" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-xl text-start underline">Forgot your password?</p>
                    </div>
                    <div className="mb-8 flex justify-between items-center">
                        <div>
                            <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full" />
                            <label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <Button className="bg-green-500 h-12 lg:h-14 px-12 text-xs lg:text-base uppercase tracking-[0.2rem]">Login</Button>
                    </div>
                    <hr className="w-full" />
                    <h4 className={`text-black text-base text-center py-8 lg:text-2xl font-semibold`}>Don't have an account?</h4>
                    <div className="mx-8 pt-4">
                        <Link href={"/signup"}>
                            <button className="border-[3px] tracking-[0.2rem] border-[#3B4482] w-full h-16 rounded-full flex items-center justify-center"><span className="ml-3 lg:ml-6 text-gray-600 text-xs lg:text-base uppercase">Sign up for spotify</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}