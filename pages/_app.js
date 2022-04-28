import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/layout'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <>
  <NextNProgress
  options={{ easing: 'ease', speed: 500,showSpinner: false }}
  color="#000000"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={false}
  />
  <Layout><Component {...pageProps} /></Layout>
  </> 
}

export default appWithTranslation(MyApp)
