import Link from "next/link"
import { BsSpotify, BsSearch } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { BiLibrary, BiLike, BiPlus, BiWorld } from "react-icons/bi"

interface MenuProps {
    link?: string
    icon?: any
    title?: string
    onPressed?: boolean
}

const menus: MenuProps[] = [
    {
        title: "Home",
        icon: <AiFillHome size={30} className="mr-8" />,
        link: "#home",
        onPressed: true
    },
    {
        title: "Search",
        icon: <BsSearch size={30} className="mr-8" />,
        link: "#search",
        onPressed: false
    },
    {
        title: "library",
        icon: <BiLibrary size={30} className="mr-8" />,
        link: "#library",
        onPressed: false
    },
]
const othersMenu: MenuProps[] = [
    {
        title: "Create Playlist",
        icon: <BiPlus size={40} className="mr-8 text-gray-600 bg-gray-300 p-2" />,
        link: "#createplaylist",
        onPressed: false
    },
    {
        title: "Liked Songs",
        icon: <BiLike size={40} className="mr-8 text-gray-300 bg-violet-900 p-2" />,
        link: "#likedsongs",
        onPressed: false
    },
]

export const AsideComponent = () => {
    return (
        <>
            <aside className="h-[90vh] bg-black w-80 hidden lg:flex px-6 py-8 flex-col">
                <div className="h-3/4">
                    <ul>
                        {
                            menus.map((item, index) => {
                                return (
                                    <li key={index} className={`pb-8 ${item.onPressed === true ? 'text-white' : 'text-gray-400'}`}>
                                        <Link className="flex items-center text-lg font-medium" href={`${item.link}`}>{item.icon}{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="mt-12">
                        {
                            othersMenu.map((item, index) => {
                                return (
                                    <li key={index} className={`pb-8 ${item.onPressed === true ? 'text-white' : 'text-gray-400'}`}>
                                        <Link className="flex items-center text-lg font-medium" href={`${item.link}`}>{item.icon}{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="h-1/4">
                    <ul className="mt-12">
                        <li className={`pb-8 text-gray-400`}>
                            <Link className="flex items-center text-lg font-normal" href={`#`}>Cookies</Link>
                        </li>
                        <li className={`pb-8 text-gray-400`}>
                            <Link className="flex items-center text-sm font-medium justify-center text-white rounded-full border border-white w-36 px-2 py-1" href={`#`}><BiWorld size={30} className="mr-2" />English</Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}