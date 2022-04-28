import FileSaver from 'file-saver'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import LanguageSwitcher from '../../components/languageSwitcher'
import Navbar from '../../components/navbar'
import NavbarMenu from '../../components/navbarMenu'
import PageHeader from '../../components/pageHeader'
import Search from '../../components/search'
import Tabs from '../../components/tabs'
import Thumbnail from '../../components/thumbnail'
import Thumbnail2 from '../../components/thumbnail2'



const ThumbnailDownload = ({}) => {
  
  const router = useRouter()

  const [data,setData] = useState(null)
  
  const { t } = useTranslation("common");

  const pageTitle = t('thumbnail.title')
  const pageDescription = t('thumbnail.description')

  const [isLangSwitcherOpen,setIsLangSwitcherOpen] = useState(false)
  const [isMenuOpen,setIsMenuOpen] = useState(false)

  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setIsLangSwitcherOpen={setIsLangSwitcherOpen} isLangSwitcherOpen={isLangSwitcherOpen}/>
      <NavbarMenu setIsLangSwitcherOpen={setIsLangSwitcherOpen} isLangSwitcherOpen={isLangSwitcherOpen} t={t} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <LanguageSwitcher isLangSwitcherOpen={isLangSwitcherOpen} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <div className="mx-6 md:mx-72">
        <Tabs downloadType="thumbnail" t={t}/>
        <PageHeader title={pageTitle} description={pageDescription}/>
        <Search t={t} setData={setData} downloadType={"thumbnail"}/>


          { data != null &&
            <>
            <h1 className="text-center font-bold my-4 md:text-xl">{data.title}</h1>
          <div className="grid md:grid-cols-2">
            {
              data.resolutions.map((resolution) =>(
                <Thumbnail2 t={t} key={resolution.download_url} downloadType={"thumbnail"} title={resolution.lable} imageUrl={resolution.download_url}/>
              ))
            }
          </div>
            </>
          }
        </div>
    </div>
  )
}

export async function getServerSideProps(context) {

  // const url = context.query.url
  
  // let data = null

  // if (url != null)
  // {
  //     const formData = new URLSearchParams();

  //     formData.append("url",url)
      
  //     const response = await fetch(
  //       `${process.env.YOUTUBE_API}/api/v1/thumbnails?url=${url}`,
  //       {
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     data = await response.json()
  // }
  

  return {
    props: {
        ...(await serverSideTranslations(context.locale, ['common']))
    }, // will be passed to the page component as props
  }
}

export default ThumbnailDownload