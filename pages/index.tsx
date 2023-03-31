import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify Clone</title>
        <meta name="description" content="Top mangas apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen bg-black flex justify-center items-center'>
        <h1 className='text-white text-2xl'>Hello World</h1>
      </main>
    </>
  )
}
