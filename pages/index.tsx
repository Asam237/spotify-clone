import Head from 'next/head'
import { AsideComponent } from '../components/Aside'
import { HeaderComponent } from '../components/Header'
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
          <section className='p-4 lg:p-8 w-full h-[100vh] lg:h-[90vh]'>
            <div className='flex justify-between items-center'>
              <h4 className={`text-white text-xl lg:text-3xl font-semibold`}>Focus</h4>
              <h4 className={`text-gray-400 text-lg  font-semibold hidden lg:flex`}>Show all</h4>
            </div>
          </section>
        </main>
        <SignupFree />
      </div>
    </>
  )
}
