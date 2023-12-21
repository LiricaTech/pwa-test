import { whiteLabel } from '@/lib/whiteLabel'
import Hero from './hero.jsx'
import styles from './weston.module.css'

export default function Home() {

const pathname = process.env.NEXT_PUBLIC_VERCEL_URL

const appData = whiteLabel.find((app) => pathname?.includes(app.name))



  return (
    <main className={styles.main}>
      <Hero img={appData?.img} title={appData?.title} />

      
    </main>
  )
}
