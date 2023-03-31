import { BiMenu } from "react-icons/bi"
import { BsSpotify, BsSearch } from "react-icons/bs"
import { Button } from "../commons/Button"

export const HeaderComponent = () => {
    return (
        <>
            <header className="h-20 lg:h-24 bg-black">
                <div className="flex justify-between px-6 py-8 items-center">
                    <div className="text-white flex items-center">
                        <BsSpotify color="white" className="text-4xl lg:text-5xl" />
                        <h4 className={`text-white text-xl lg:text-3xl ml-2 font-semibold`}>Spotify</h4>
                    </div>
                    <div className="flex lg:hidden items-center">
                        <BsSearch className="text-white" size={20} />
                        <Button className="bg-white ml-4 text-xs px-6 py-[8px]">OPEN APP</Button>
                        <BiMenu size={30} className="text-white ml-4" />
                    </div>
                </div>
            </header>
        </>
    )
}