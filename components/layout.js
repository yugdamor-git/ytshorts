import React, { useState } from 'react';
import Footer from './footer'
import Navbar from './navbar'
import Head from 'next/head';
import LanguageSwitcher from './languageSwitcher';

const Layout = ({ children }) => {



  function setDarkModeStorage(value)
  {
    setDarkMode(value)

    
  }

  

  const [darkMode,setDarkMode] = useState(false)

  return <div className={`${darkMode ? "dark bg-black " : " "}font-OpenSans flex flex-col h-screen justify-between`}>
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
    </Head>
    
    <div className="dark:bg-black h-fit">

      <main className="">
          {children}
      </main>
      
    </div>

    <div className="dark:bg-black w-full p-2">
      <Footer/>
      </div>
      
  </div>;
};

export default Layout;