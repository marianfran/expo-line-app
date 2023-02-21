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
        <link rel="icon" href="/TranslinkLogo.png" />
      </Head>

      <main className={styles.main}>

        <div className={styles.header}>
          <p>Welcome to Translink's Expo Line</p>
        </div>

        <div className={styles.subheader}>
          <p>Expo Line connects Downtown Vancouver to the cities of Burnaby, New West, and Surrey.</p>
        </div>

        <div className={styles.map}>
          <Map></Map>
        </div>

        <div className={styles.footer}>
          <Image
                src="/TranslinkLogo.png"
                alt="Translink Logo"
                className={styles.TranslinkLogo}
                width={100}
                height={40}
                priority
              />
            <p>400-287 Nelson's Ct., New Westminster, BC V3L0E || Marian Francisco </p>
        </div>

      </main>
    </>
  )
}
