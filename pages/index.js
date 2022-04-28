import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Banner from '../components/banner'
import Download from '../components/download'
import Faq from '../components/faq'
import Features from '../components/features'
import Hero from '../components/hero'
import HowToDownload from '../components/howToDownload'
import HowToMake from '../components/howToMake'
import LanguageSwitcher from '../components/languageSwitcher'
import Navbar from '../components/navbar'
import NavbarMenu from '../components/navbarMenu'
import Search from '../components/search'
import Tabs from '../components/tabs'
import Thumbnail from '../components/thumbnail'

const BASE_URL = process.env.BASE_URL;


async function fetchData(url,youtubeApi)
{

  const response = await fetch(`${youtubeApi}/api/v1/info?url=${url}`)

  data = await response.json()

  return data

}



export default function Home({}) {

  const youtubeApi = process.env.YOUTUBE_API

  const [data,setData] = useState(null)

  const [url,setUrl] = useState(null)


  const router = useRouter()
  const { locale } = router;

  const { t } = useTranslation("common");

  console.log(router)

  const banners = [
    {
      title:t('downloader.title'),
      description:t('downloader.description')
    },
    {
      title:t('shorts.title'),
      description:t('shorts.description')
    }
  ]

  const [downloadType,setDownloadType] = useState("video")

  const [isLangSwitcherOpen,setIsLangSwitcherOpen] = useState(false)

  const [isMenuOpen,setIsMenuOpen] = useState(false)

  // useEffect(() => {
  //   const timeoutID = window.setTimeout(() => {
  //     let elem = document.getElementById('downloadSection')
  //     if (elem != null)
  //     {
  //       elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  //     }
  //   }, 100);

  // return () => window.clearTimeout(timeoutID );
  // }, [])

  return (
    <div>
      <Head>
        
      <meta charSet="utf-8" />
        <title>{t('page_title')}</title>
        <meta key="title" property="og:title" content={t('page_title')} />
        <meta name="description" content={t('page_description')} />
        <meta key="description" property="og:description" content={t('page_description')} />
        <meta property="og:url" content={BASE_URL + (locale === 'en' ? '' : '/' + locale)} />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="YouTube Shorts Downloader" />
        <meta property="og:site_name" content="YouTube Shorts Video Download" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta property="og:image" content={`${BASE_URL}/static/staticImage/og.jpg`} />

        <link
          rel="icon"
          href={`${BASE_URL}/static/staticImage/og.jpg`}
          type="image/gif"
          sizes="16x16"></link>
        <link rel="alternate" href="https://ytshorts.savetube.me/" hrefLang="x-default" />
        <link rel="alternate" href="https://ytshorts.savetube.me/" hrefLang="en" />
        <link rel="alternate" href="https://ytshorts.savetube.me/de" hrefLang="de" />
        <link rel="alternate" href="https://ytshorts.savetube.me/es" hrefLang="es" />
        <link rel="alternate" href="https://ytshorts.savetube.me/fr" hrefLang="fr" />
        <link rel="alternate" href="https://ytshorts.savetube.me/hi" hrefLang="hi" />
        <link rel="alternate" href="https://ytshorts.savetube.me/id" hrefLang="id" />
        <link rel="alternate" href="https://ytshorts.savetube.me/it" hrefLang="it" />
        <link rel="alternate" href="https://ytshorts.savetube.me/ja" hrefLang="ja" />
        <link rel="alternate" href="https://ytshorts.savetube.me/ko" hrefLang="ko" />
        <link rel="alternate" href="https://ytshorts.savetube.me/my" hrefLang="my" />
        <link rel="alternate" href="https://ytshorts.savetube.me/ms" hrefLang="ms" />
        <link rel="alternate" href="https://ytshorts.savetube.me/nl" hrefLang="nl" />
        <link rel="alternate" href="https://ytshorts.savetube.me/ph" hrefLang="en-PH" />
        <link rel="alternate" href="https://ytshorts.savetube.me/pt" hrefLang="pt" />
        <link rel="alternate" href="https://ytshorts.savetube.me/ru" hrefLang="ru" />
        <link rel="alternate" href="https://ytshorts.savetube.me/th" hrefLang="th" />
        <link rel="alternate" href="https://ytshorts.savetube.me/tr" hrefLang="tr" />
        <link rel="alternate" href="https://ytshorts.savetube.me/vi" hrefLang="vi" />
        <link rel="alternate" href="https://ytshorts.savetube.me/zh" hrefLang="zh" />
        <link rel="alternate" href="https://ytshorts.savetube.me/zt" hrefLang="zt" />
        <link rel="alternate" href="https://ytshorts.savetube.me/sa" hrefLang="sa" />
        <link rel="alternate" href="https://ytshorts.savetube.me/bn" hrefLang="bn" />
      </Head>

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setIsLangSwitcherOpen={setIsLangSwitcherOpen} isLangSwitcherOpen={isLangSwitcherOpen}/>
      <NavbarMenu setIsLangSwitcherOpen={setIsLangSwitcherOpen} isLangSwitcherOpen={isLangSwitcherOpen} t={t} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <LanguageSwitcher isLangSwitcherOpen={isLangSwitcherOpen} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        
      <main className="mx-6 md:mx-20 lg:mx-72">
      <Tabs downloadType={"video"} t={t}/>
      <Hero  t={t}/>
      <Search setData={setData} t={t} downloadType={downloadType}/>

      { data != null &&
       <>
       <Thumbnail t={t} title={data.title} imageUrl={data.thumbnail} duration={data.duration} />
       <Download t={t} downloadType={"video"} title={data.title} formats={data.video_formats} cid={data.cid} id={data.id} />
       </>
      }

      <Features t={t}/>
      {
        banners.map((banner)=>(
          <Banner key={banner.title} title={banner.title} description={banner.description}/>
        ))
      }
      <HowToMake t={t}/>
      <HowToDownload t={t}/>
      <Faq t={t}/>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {

  return {
    props: {
        ...(await serverSideTranslations(context.locale, ['common']))
    }, // will be passed to the page component as props
  }
}
