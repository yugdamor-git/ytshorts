import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import LanguageSwitcher from "./languageSwitcher";


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

const Navbar = ({setIsLangSwitcherOpen,isLangSwitcherOpen,isMenuOpen,setIsMenuOpen}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const { t } = useTranslation("common");

  let Links = [
    { name: t("home"), href: "/" },
    { name: t("navbar.shorts"), href: "/" },
    { name: t("navbar.mp3"), href: "/shorts-to-mp3" },
    { name: t("navbar.thumbnail"), href: "/thumbnail-download" },
  ];



  function handleLanguageSwitcher(e)
  {

  }

  return (
    <div
      className={
        ""
      }
    >
      <div className="flex items-center justify-between bg-red-500 pt-2 dark:bg-black text-white py-2 px-1">
        <div className="flex cursor-pointer items-center p-2">
        <div className="w-72">
        <Link href="/">
          <a className="text-white flex">
            <img src="/static/svg/logo.svg" className="mr-2" height="22px" width="22px" />
            Youtube Shorts Downloader
          </a>
        </Link>
        </div>

        
        </div>
        <ul
          className={`pb-4 hidden md:flex md:items-center flex-col md:flex-row md:justify-end w-full md:pl-0 pl-2 pr-2 text-sm transition-all duration-300 ease-in`}
        >
          {Links.map((link) => (
            <li key={link.name} className="mt-2 md:ml-5 md:mr-5 md:text-sm">
              <Link href={link.href} passHref>
                <a
                  href={link.href}
                  className={`md:px-1 md:py-2 duration-100 block rounded p-1 text-center hover:bg-red-500 hover:text-white ${
                    currentRoute == link.href
                      ? "text-white"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
          <li className="mt-2 md:ml-5 md:mr-5 md:text-sm">
            <button onClick={()=>(setIsLangSwitcherOpen(!isLangSwitcherOpen))} className="md:px-1 md:py-2 duration-100 block rounded p-1 text-center hover:bg-red-500 hover:text-white">{getLangNameById(router.locale)}</button>
          </li>
        </ul>
        
        <div className="md:hidden">
    <div className="cursor-pointer md:hidden mx-1" onClick={()=>(setIsMenuOpen(!isMenuOpen))}>
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 dark:stroke-gray-400 ${isMenuOpen ? "hidden" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 dark:stroke-gray-400 ${isMenuOpen ? "" : "hidden"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    </div>
        </div>

        

      </div>
    </div>
  );
};

export default Navbar;
