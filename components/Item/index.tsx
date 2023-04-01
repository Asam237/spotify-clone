import Image from "next/image"

interface ItemProps {
    image?: any
    title?: string
    subtitle?: string
}

export const Item = ({ image, title, subtitle }: ItemProps) => {
    return (
        <div className="lg:h-80 h-36 bg-[#232323] flex flex-col p-4 cursor-pointer hover:bg-[#303030]">
            <div>
                <Image src={image} alt="img" className="lg:h-44 h-16 mx-auto w-full object-cover mt-2" />
            </div>
            <h4 className="text-white font-medium lg:text-start pt-4 text-xs text-center lg:text-lg">{title}</h4>
            <p className="hidden lg:flex pt-2 text-gray-400 font-normal text-base">{subtitle}</p>
        </div>
    )

}