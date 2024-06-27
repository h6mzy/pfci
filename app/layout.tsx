import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './global.sass'
import Navbar from './components/navbar'
import { project_details } from './_lib/project'
import { AuthContextProvider } from './_lib/auth-context'
import type { Viewport } from 'next'

const montserrat = Montserrat({ subsets: ['latin'], weight: [ '300', '900' ] })

export const metadata: Metadata = {
  title: `${project_details.title}`,
  description: 'Rapid web apps and sites',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'black' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' href='/sitefiles/12345/678/90/apple-touch-icon.png' />
      </head>
      <body className={montserrat.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}