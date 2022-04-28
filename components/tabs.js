import Link from 'next/link'
import React from 'react'

const Tabs = ({downloadType,setDownloadType,t}) => {

  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-16 m-2 p-3 text-xs md:text-sm text-gray-700 bg-gray-50 dark:bg-gray-900 rounded">
        <div>
        <Link href="/" passHref>
           <a  className="flex flex-col items-center">
           <div><svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${downloadType == 'video' ? 'stroke-red-500' : 'stroke-gray-400 dark:stroke-gray-500'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg></div>
            <div className={`my-2 p-2 text-center rounded ${downloadType == 'video' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 hover:bg-red-500 hover:text-white dark:text-gray-400 dark:hover:text-gray-200'} `}>{t('tabs.1')}</div>
            
           </a>
            </Link>
            </div>
        <div >
        <Link href="/shorts-to-mp3" passHref>
           
           <a  className="flex flex-col items-center"><div><svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${downloadType == 'audio' ? 'stroke-red-500' : 'stroke-gray-400 dark:stroke-gray-500'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg></div>
            <div className={`my-2 px-8 ${downloadType == 'audio' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'} p-2 text-center rounded hover:bg-red-500 hover:text-white dark:hover:text-gray-200 dark:hover:bg-red-700`}>{t('tabs.2')}</div></a>
           
            </Link>
           
            </div>

        <div>
            <Link href="/thumbnail-download" passHref>
            <a  className="flex flex-col items-center">
            <div><svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${downloadType == 'thumbnail' ? 'stroke-red-500' : 'stroke-gray-400 dark:stroke-gray-500'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg></div>
            <div className={`my-2 px-4  ${downloadType == 'thumbnail' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'} p-2 text-center rounded hover:bg-red-500 hover:text-white dark:hover:text-gray-200`}>{t('tabs.3')}</div>
        
            </a>
            </Link>
        </div>
    </div>
  )
}

export default Tabs