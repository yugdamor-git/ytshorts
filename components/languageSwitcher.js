import { Combobox, Listbox } from '@headlessui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
export const langs = [
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

  
const LanguageSwitcher = ({isLangSwitcherOpen,isMenuOpen,setIsMenuOpen}) => {
    const router = useRouter()
    const { pathname, asPath,query } = router

    const currentLocale = router.locale

    let currentLang = {label:"English",id:"en"}

    for(let lang of langs)
    {
        if(lang.id == currentLocale)
        {
            currentLang = lang
            break
        }
    }

    const [selectedLang,setSelectedLang] = useState(currentLang)

    const [searchQuery,setSearchQuery] = useState('')
    
    

    const filteredLang =
    searchQuery === ''
      ? langs
      : langs.filter((lang) => {
          return lang.label.toLowerCase().includes(searchQuery.toLowerCase())
        })

    


  return (
   <>
    { isLangSwitcherOpen == true &&
        <Listbox as="div" className="flex flex-col" value={selectedLang} onChange={setSelectedLang}>

        <Listbox.Button className="rounded-md px-2 mr-4 my-2 text-sm p-1 bg-red-500 hidden md:hidden">1</Listbox.Button>
        
        <div className="flex items-center justify-center">
        
          <Listbox.Options static className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center rounded-md bg-white">
          {langs.map((lang) =>(
              <Listbox.Option disabled={selectedLang.id == lang.id ? true : false} key={lang.id} value={lang}>
                  <button className="m-1 p-1 rounded-md shadow text-center w-40" onClick={()=>(router.push({ pathname, query }, asPath, { locale: lang.id }))}>{lang.label}</button>
              </Listbox.Option>
          ))

          }
      </Listbox.Options>
       
        </div>

    </Listbox>
  }
   </>
  )
}

export default LanguageSwitcher