import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './_components/Header'
import Footer from './_components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
