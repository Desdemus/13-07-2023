import '@/styles/globals.css'
import DefaultLayout from '@/components/layout'

export default function App({ Component, pageProps }) {
  return <DefaultLayout> <Component {...pageProps} /></DefaultLayout>
}
