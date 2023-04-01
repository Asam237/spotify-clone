export const Item = () => {
    return (
        <div className="2xl:w-1/6 xl:w-1/5 lg:w-1/4 sm:w-1/3 px-3">
            <span className="bg-white bg-opacity-5 hover:bg-opacity-10 cursor-pointer flex flex-col rounded-sm">
                <img className="rounded-md sm:m-2 lg:m-4" src="https://source.unsplash.com/bsLXJsucvxc/200x200" />
                <span className="capitalize px-2 font-bold text-blue-100">
                    <h3 className="text-lg text-blue-50 whitespace-nowrap overflow-ellipsis w-full overflow-x-hidden">Instrumental Study</h3>
                    <div className="text-sm my-2 text-gray-400 overflow-hidden overflow-ellipsis h-11">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </span>
            </span>
        </div>
    )

}