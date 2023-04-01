import Head from 'next/head'
import { AsideComponent } from '../components/Aside'
import { HeaderComponent } from '../components/Header'
import { Item } from '../components/Item'
import { SignupFree } from '../components/Signupfree'

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify - Web Player: Music for everyone</title>
        <meta name="description" content="Top mangas apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeaderComponent />
        <main className='h-full w-full bg-[#1d1d1d] flex'>
          <AsideComponent />
          <section className='p-4 lg:p-8 w-full h-[92vh]'>
            <div className='flex justify-between items-center mb-2'>
              <h4 className={`text-white text-xl lg:text-3xl font-semibold`}>Focus</h4>
              <h4 className={`text-gray-400 text-lg  font-semibold hidden lg:flex`}>Show all</h4>
            </div>
            <div className="flex overflow-x-scroll lg:overflow-x-hidden">
              {
                [0, 1, 2, 3, 4, 5, 6].map((item, index) => {
                  return (
                    <Item key={index} />
                  )
                })
              }
            </div>
            <div className='flex justify-between items-center mt-20 mb-2'>
              <h4 className={`text-white text-xl lg:text-3xl font-semibold`}>Spotify Playlists</h4>
            </div>
            <div className="flex overflow-x-scroll lg:overflow-x-hidden">
              {
                [0, 1, 2, 3, 4, 5, 6].map((item, index) => {
                  return (
                    <Item key={index} />
                  )
                })
              }
            </div>
          </section>
        </main>
        <SignupFree />
      </div>
    </>
  )
}


{/* <div class="flex overflow-x-hidden">
  <div class="2xl:w-1/6 xl:w-1/5 lg:w-1/4 sm:w-1/3 px-3">
    <span class="bg-white bg-opacity-5 hover:bg-opacity-10 cursor-pointer flex flex-col rounded-sm">
      <img class="rounded-md sm:m-2 lg:m-4" src="https://source.unsplash.com/bsLXJsucvxc/200x200" />
      <span class="capitalize px-2 font-bold text-blue-100">
        <h3 class="text-lg text-blue-50 whitespace-nowrap overflow-ellipsis w-full overflow-x-hidden">may i elaborate? asdadsadsda</h3>
        <div class="text-sm my-2 text-gray-400 overflow-hidden overflow-ellipsis h-11">by mark francis carandang sdfage ergwergerg erwgwrg</div>
      </span>
    </span>
  </div>
  <div class="2xl:w-1/6 xl:w-1/5 lg:w-1/4 sm:w-1/3 px-3">
    <span class="bg-white bg-opacity-5 hover:bg-opacity-10 cursor-pointer flex flex-col rounded-sm">
      <img class="rounded-md sm:m-2 lg:m-4" src="https://source.unsplash.com/bsLXJsucvxc/200x200" />
      <span class="capitalize px-2 font-bold text-blue-100">
        <h3 class="text-lg text-blue-50 whitespace-nowrap overflow-ellipsis w-full overflow-x-hidden">may i elaborate? asdadsadsda</h3>
        <div class="text-sm my-2 text-gray-400 overflow-hidden overflow-ellipsis h-11">by mark francis carandang sdfage ergwergerg erwgwrg</div>
      </span>
    </span>
  </div>
  <div class="2xl:w-1/6 xl:w-1/5 lg:w-1/4 sm:w-1/3 px-3">
    <span class="bg-white bg-opacity-5 hover:bg-opacity-10 cursor-pointer flex flex-col rounded-sm">
      <img class="rounded-md sm:m-2 lg:m-4" src="https://source.unsplash.com/bsLXJsucvxc/200x200" />
      <span class="capitalize px-2 font-bold text-blue-100">
        <h3 class="text-lg text-blue-50 whitespace-nowrap overflow-ellipsis w-full overflow-x-hidden">may i elaborate? asdadsadsda</h3>
        <div class="text-sm my-2 text-gray-400 overflow-hidden overflow-ellipsis h-11">by mark francis carandang sdfage ergwergerg erwgwrg</div>
      </span>
    </span>
  </div>
  <div class="2xl:w-1/6 xl:w-1/5 lg:w-1/4 sm:w-1/3 px-3">
    <span class="bg-white bg-opacity-5 hover:bg-opacity-10 cursor-pointer flex flex-col rounded-sm">
      <img class="rounded-md sm:m-2 lg:m-4" src="https://source.unsplash.com/bsLXJsucvxc/200x200" />
      <span class="capitalize px-2 font-bold text-blue-100">
        <h3 class="text-lg text-blue-50 whitespace-nowrap overflow-ellipsis w-full overflow-x-hidden">may i elaborate? asdadsadsda</h3>
        <div class="text-sm my-2 text-gray-400 overflow-hidden overflow-ellipsis h-11">by mark francis carandang sdfage ergwergerg erwgwrg</div>
      </span>
    </span>
  </div>
  <div class="2xl:w-1/6 xl:w-1/5 lg:w-1/4 sm:w-1/3 px-3">
    <span class="bg-white bg-opacity-5 hover:bg-opacity-10 cursor-pointer flex flex-col rounded-sm">
      <img class="rounded-md sm:m-2 lg:m-4" src="https://source.unsplash.com/bsLXJsucvxc/200x200" />
      <span class="capitalize px-2 font-bold text-blue-100">
        <h3 class="text-lg text-blue-50 whitespace-nowrap overflow-ellipsis w-full overflow-x-hidden">may i elaborate? asdadsadsda</h3>
        <div class="text-sm my-2 text-gray-400 overflow-hidden overflow-ellipsis h-11">by mark francis carandang sdfage ergwergerg erwgwrg</div>
      </span>
    </span>
  </div>
  <div class="2xl:w-1/6 xl:w-1/5 lg:w-1/4 sm:w-1/3 px-3">
    <span class="bg-white bg-opacity-5 hover:bg-opacity-10 cursor-pointer flex flex-col rounded-sm">
      <img class="rounded-md sm:m-2 lg:m-4" src="https://source.unsplash.com/bsLXJsucvxc/100x100" />
      <span class="capitalize px-2 font-bold text-blue-100">
        <h3 class="text-lg text-blue-50 whitespace-nowrap overflow-ellipsis w-full overflow-x-hidden">may i elaborate? asdadsadsda</h3>
        <div class="text-sm my-2 text-gray-400 overflow-hidden overflow-ellipsis h-11">by mark francis carandang sdfage ergwergerg erwgwrg</div>
      </span>
    </span>
  </div>
</div> */}