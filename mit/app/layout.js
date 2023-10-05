import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import NavPhone from './components/navPhone'
// import Sponsor from './components/sponsor'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MIT-WEEK 2023',
  description: 'Mulawarman Informatics Technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Sponsor /> */}
        <Navbar />
        <NavPhone />
        {children}
      </body>
    </html>
  )
}
