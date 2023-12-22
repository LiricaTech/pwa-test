import { whiteLabel } from '@/lib/whiteLabel'
import Hero from './hero.jsx'
import styles from './weston.module.css'

const pathname = process.env.NEXT_PUBLIC_VERCEL_URL

const appData: any = whiteLabel.find((app) => pathname?.includes(app.name))


export default function Home() {
  

  return (
    <main style={{backgroundColor: appData?.bg}} className={styles.main} >
      <Hero img={appData?.img} title={appData?.title} />
    </main>
  )
}
