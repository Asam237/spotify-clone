import Head from 'next/head'
import { AsideComponent } from '../components/Aside'
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
      <main>
        <AsideComponent />
        <SignupFree />
      </main>
    </>
  )
}
