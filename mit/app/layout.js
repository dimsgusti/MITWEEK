import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import NavPhone from './components/navPhone'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MIT-WEEK 2023',
  description: 'Mulawarman Informatics Tech Week 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <NavPhone />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
