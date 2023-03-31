import Image from "next/image"

interface ItemProps {
    image?: any
    title?: string
    subtitle?: string
}

export const Item = ({ image, title, subtitle }: ItemProps) => {
    return (
        <div className="lg:h-80 h-60 bg-[#272727] flex flex-col p-4">
            <Image src={image} alt="img" className="lg:h-2/3 h-44 mx-auto w-auto mt-2" />
            <h4 className="text-white font-medium lg:text-start pt-4 text-xs text-center lg:text-lg">{title}</h4>
            <p className="hidden lg:flex pt-2 text-gray-400 font-normal text-base">{subtitle}</p>
        </div>
    )

}