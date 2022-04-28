import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const langs = [
    {
      label: 'English',
      id: 'en',
    },
    {
      label: 'German',
      id: 'de',
    },
    {
      label: 'Español',
      id: 'es',
    },
    {
      label: 'Français',
      id: 'fr',
    },
    {
      label: 'हिन्दी / Hindī',
      id: 'hi',
    },
    {
      label: 'Indonesian',
      id: 'id',
    },
    {
      label: 'Italiano',
      id: 'it',
    },
    {
      label: '日本語',
      id: 'ja',
    },
    {
      label: '한국어',
      id: 'ko',
    },
    {
      label: 'Myanmar (မြန်မာ)',
      id: 'my',
    },
    {
      label: 'Malay',
      id: 'ms',
    },
    {
      label: 'Dutch',
      id: 'nl',
    },
    {
      label: 'Filipino',
      id: 'ph',
    },
    {
      label: 'Português',
      id: 'pt',
    },
    {
      label: 'Русский',
      id: 'ru',
    },
    {
      label: 'ไทย',
      id: 'th',
    },
    {
      label: 'Türkçe',
      id: 'tr',
    },
    {
      label: 'Tiếng Việt',
      id: 'vi',
    },
    {
      label: '简体中文',
      id: 'zh',
    },
    {
      label: '繁體中文',
      id: 'zt',
    },
    {
      label: 'العربية',
      id: 'sa',
    },
    {
      label: 'বাঙালি',
      id: 'bn',
    },
  ];

  function getLangNameById(id)
  {
      for(let lang of langs)
      {
          if (id == lang.id)
          {
              return lang.label
          }
      }
  }

const NavbarMenu = ({isMenuOpen,setIsMenuOpen,isLangSwitcherOpen,setIsLangSwitcherOpen,t}) => {

    let Links = [
        { name: t("home"), href: "/" },
        { name: t("navbar.shorts"), href: "/" },
        { name: t("navbar.mp3"), href: "/shorts-to-mp3" },
        { name: t("navbar.thumbnail"), href: "/thumbnail-download" },
      ];

      const router = useRouter()
      const currentPath = router.pathname


  return (
    <div>
        { isMenuOpen == true &&
            <div className="flex flex-col justify-center items-center m-2 shadow-md p-1">
            {Links.map((link)=>(

                <Link href={link.href} passHref key={link.name}>
                <a className={`m-1 text-center rounded w-full p-2 ${currentPath == link.href ? 'bg-red-500 text-white' : 'bg-gray-50 text-black'}`}>{link.name}</a>
                </Link>
            ))

            }

        <div className="flex w-full">
        <button onClick={()=>(setIsLangSwitcherOpen(!isLangSwitcherOpen))} className="md:hidden m-1 p-1 text-red-500 flex items-center justify-center">
        <span>{getLangNameById(router.locale)}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-1 mt-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        </button>
        </div>

        </div>
        }
    </div>
  )
}

export default NavbarMenu