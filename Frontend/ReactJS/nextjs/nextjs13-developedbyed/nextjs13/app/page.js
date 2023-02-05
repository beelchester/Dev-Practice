import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

// page.js is the entry point for the page
// page.js is like index.js in a Next.js project
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hi</h1>
    </main>
  )
}
