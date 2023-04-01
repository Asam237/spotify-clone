import Image from "next/image"
import { BsPlay } from "react-icons/bs"

interface ItemProps {
    image?: any
    title?: string
    subtitle?: string
}

export const Item = ({ image, title, subtitle }: ItemProps) => {
    return (
        <div className="lg:h-80 h-44 bg-[#232323] flex flex-col p-4 cursor-pointer hover:bg-[#303030]">
            <div className="w-28 lg:w-48 mx-auto relative">
                <Image src={image} alt="img" className="lg:h-44 h-28 mx-auto w-full object-cover mt-2" />
                <div className="hidden absolute w-full h-full lg:flex items-end justify-center pb-32 pl-32 opacity-0 hover:opacity-100">
                    <div className="h-12 w-12 flex items-center justify-center bg-green-500 rounded-full">
                        <BsPlay color="white" size={20} />
                    </div>
                </div>
            </div>
            <h4 className="text-white font-medium lg:text-start pt-4 text-xs text-center lg:text-lg">{title}</h4>
            <p className="hidden lg:flex pt-2 text-gray-400 font-normal text-base">{subtitle}</p>
        </div>
    )

}