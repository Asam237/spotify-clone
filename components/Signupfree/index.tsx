import { Button } from "../commons/Button"

export const SignupFree = () => {
    return (
        <>
            <div className="w-screen h-[7vh]  fixed bottom-0 left-0 bg-gradient-to-r from-[#B000A2] to-[#5D6DE9] hidden lg:flex">
                <div className="w-full px-8">
                    <div className="flex justify-between items-center h-full w-full">
                        <div>
                            <p className={`uppercase text-white text-base`}>preview of Spotify</p>
                            <p className={`text-white text-lg font-medium pt-1`}>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                        </div>
                        <div>
                            <Button className="bg-white">Sign up free</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}