import Navbar from '@/components/navbar'
import '../styles/globals.css'
import type { Metadata } from 'next'
import StatusProvider from '@/contexts/context'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Brandon',
  description: 'Software Engineer with frontend and backend experience. Accustomed to technologies such as Next.js, React, Python, Typescript. etc.',
  keywords: ["Software Engineer", "Software Engineer Intern", "Software Developer", "Programmer"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StatusProvider>
          <Navbar />
            {children}
          <Footer />
        </StatusProvider>
     
        </body>
    </html>
  )
}
