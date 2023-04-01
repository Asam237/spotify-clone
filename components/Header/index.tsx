import Link from "next/link"
import { BiMenu, BiArrowBack, BiArrowToRight, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { BsSpotify, BsSearch } from "react-icons/bs"
import { Button } from "../commons/Button"

export const HeaderComponent = () => {
    return (
        <>
            <header className="sticky top-0 left-0 z-10">
                <div className="h-20 bg-black flex flex-col justify-center">
                    <div className="flex justify-between lg:justify-start items-center">
                        <div className="text-white flex items-center lg:w-96 px-8 py-8 lg:mt-6">
                            <BsSpotify color="white" className="text-4xl lg:text-5xl" />
                            <h4 className={`text-white text-xl lg:text-3xl ml-2 font-semibold`}>Spotify</h4>
                        </div>
                        <div className="flex lg:hidden items-center my-auto px-6 py-8">
                            <BsSearch className="text-white" size={20} />
                            <Button className="bg-white ml-4 text-xs px-6 py-[8px]">OPEN APP</Button>
                            <BiMenu size={30} className="text-white ml-4" />
                        </div>
                        <div className="hidden lg:flex justify-between my-auto h-20 items-center w-full bg-[#101010] px-6 py-8">
                            <div className="text-white ml-12">
                                <div className="flex items-center justify-center">
                                    <BiLeftArrowAlt size={30} className="text-gray-400" />
                                    <BiRightArrowAlt size={30} className="ml-6 text-gray-400" />
                                </div>
                            </div>
                            <div className="text-white">
                                <div className="flex items-center">
                                    <Link href={'/signup'} className="text-gray-400 mr-10 font-medium text-xl">Sign up</Link>
                                    <Link href={'/login'}><Button className="bg-white px-[2rem] py-2 text-black font-medium">Log in</Button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}