import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Expo Line App</title>
      </Head>

      <main className={styles.main}>

        <div className={styles.header}>
          <p>Welcome to Translink's Expo Line</p>
        </div>

        <div className={styles.subheader}>
          <p>Expo Line connects Downtown Vancouver with the cities of Burnaby, New Westminster, and Surrey.
          View the map below to see the Skytrain Stations. </p>
        </div>

        <div className={styles.map}>
          <Map></Map>
        </div>

        <div className={styles.footer}>
          <Image
                src="/TranslinkLogo.png"
                alt="Translink Logo"
                className={styles.TranslinkLogo}
                width={120}
                height={50}
                priority
              />

          <p>
            Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.
          </p>

        </div>

      </main>
    </>
  )
}
