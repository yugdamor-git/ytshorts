import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Download from '../../components/download'
import LanguageSwitcher from '../../components/languageSwitcher'
import Navbar from '../../components/navbar'
import NavbarMenu from '../../components/navbarMenu'
import PageHeader from '../../components/pageHeader'
import Search from '../../components/search'
import Tabs from '../../components/tabs'
import Thumbnail from '../../components/thumbnail'

const ShortsToMp3 = ({ }) => {

  const router = useRouter()

  const [data,setData] = useState(null)

  const [url ,setUrl] = useState(router.query.url)
  
  const { t } = useTranslation("common");

  const pageTitle = t('mp3.title')
  const pageDescription = t('mp3.description')

  const [isLangSwitcherOpen,setIsLangSwitcherOpen] = useState(false)
  const [isMenuOpen,setIsMenuOpen] = useState(false)

  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setIsLangSwitcherOpen={setIsLangSwitcherOpen} isLangSwitcherOpen={isLangSwitcherOpen}/>
      <NavbarMenu setIsLangSwitcherOpen={setIsLangSwitcherOpen} isLangSwitcherOpen={isLangSwitcherOpen} t={t} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <LanguageSwitcher isLangSwitcherOpen={isLangSwitcherOpen} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <div className="mx-6 md:mx-72">
      <Tabs downloadType="audio" t={t}/>
        <PageHeader title={pageTitle} description={pageDescription}/>
        <Search setData={setData} t={t} downloadType={"audio"}/>
        { data != null &&
          <>
            <Thumbnail t={t} title={data.title} imageUrl={data.thumbnail} duration={data.duration} />
        <Download t={t} downloadType={"audio"} title={data.title} formats={data.audio_formats} cid={data.cid} id={data.id} />  
          </>
        }
        

    </div>
    </div>
  )
}

export async function getServerSideProps(context) {

  return {
    props: {
        ...(await serverSideTranslations(context.locale, ['common']))
    }, // will be passed to the page component as props
  }
}

export default ShortsToMp3