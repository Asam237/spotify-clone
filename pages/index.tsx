import Head from 'next/head'
import { AsideComponent } from '../components/Aside'
import { HeaderComponent } from '../components/Header'
import { Item } from '../components/Item'
import { SignupFree } from '../components/Signupfree'
import img1 from "../public/imgs/img1.jpeg"
import img2 from "../public/imgs/img4.jpeg"
import img3 from "../public/imgs/img5.jpeg"
import img4 from "../public/imgs/img4.jpeg"
import img5 from "../public/imgs/img5.jpeg"

const players = [
  {
    image: img1,
    title: "Peaceful Piano",
    subtitle: "Relax and indulge with beautiful piano pieces"
  },
  {
    image: img2,
    title: "Deep focus",
    subtitle: "Relax and indulge with beautiful piano pieces"
  },
  {
    image: img3,
    title: "Instrumental Study",
    subtitle: "Relax and indulge with beautiful piano pieces"
  },
  {
    image: img4,
    title: "Jazz Vibes",
    subtitle: "Relax and indulge with beautiful piano pieces"
  },
  {
    image: img5,
    title: "Focus Flow",
    subtitle: "Relax and indulge with beautiful piano pieces"
  },
  {
    image: img4,
    title: "Beats to think to",
    subtitle: "Relax and indulge with beautiful piano pieces"
  },
  {
    image: img4,
    title: "Reading Adventure",
    subtitle: "Relax and indulge with beautiful piano pieces"
  },
  {
    image: img5,
    title: "Peaceful Piano",
    subtitle: "Relax and indulge with beautiful piano pieces"
  },
]

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
          <section className='p-4 lg:p-8 w-full h-[93vh]'>
            <div className='flex justify-between items-center'>
              <h4 className={`text-white text-xl lg:text-3xl font-semibold`}>Focus</h4>
              <h4 className={`text-gray-400 text-lg  font-semibold hidden lg:flex`}>Show all</h4>
            </div>
            <div className='overflow-x-scroll flex lg:grid lg:gap-10 lg:grid-cols-8 pt-6 lg:overflow-hidden'>
              {
                players.map((item, index) => {
                  return (
                    <Item key={index} image={item.image} title={item.title} subtitle={item.subtitle} />
                  )
                })
              }
            </div>
            <div className='flex justify-between items-center mt-20'>
              <h4 className={`text-white text-xl lg:text-3xl font-semibold`}>Spotify Playlists</h4>
            </div>
            <div className='flex flex-row overflow-x-scroll lg:grid lg:gap-10 lg:grid-cols-8 pt-6 lg:overflow-hidden'>
              {
                players.map((item, index) => {
                  return (
                    <Item key={index} image={item.image} title={item.title} subtitle={item.subtitle} />
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
