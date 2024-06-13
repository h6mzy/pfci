import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './global.sass'
import Navbar from './components/navbar'
import { project_details } from './_lib/project'
import { AuthContextProvider } from './_lib/auth-context'

const montserrat = Montserrat({ subsets: ['latin'], weight: [ '300', '900' ] })

export const metadata: Metadata = {
  title: `${project_details.title}`,
  description: 'Rapid web apps and sites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}