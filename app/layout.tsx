import { Header } from './components/common/Header'
import './globals.css'

export const metadata = {
  title: 'Netflix Mock',
  description: 'Top 250 IMDB movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black text-white'>
        <Header />
        <div className='content pt-10'>
        {children}
        </div>
        </body>
    </html>
  )
}
