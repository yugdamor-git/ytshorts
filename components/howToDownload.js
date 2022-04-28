import React from 'react'

const HowToDownload = ({t}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-2">
        <div>
            <h1 className="font-bold text-center my-2 text-black">{t('how_to_download.title')}</h1>
            <h2 className="text-gray-500 my-2">{t('how_to_download.description')}</h2>
            <ol className=' p-1 font-bold'>
                <li className="my-2">{t('how_to_download.step1')}</li>
                <li className="my-2">{t('how_to_download.step2')}</li>
                <li className="flex">
                <img className="w-[40%] md:w-[20%] rounded-md mx-2" src='static/staticImage/first_shorts.jpg'/>
                <img className="w-[40%] md:w-[20%] rounded-md" src='/static/staticImage/copylink.jpg'/>
                </li>
                <li className="my-2">{t('how_to_download.step3')}</li>
                <li className="my-2">{t('how_to_download.step4')}</li>
            </ol>
            <p className="font-semibold">{t('how_to_download.finish')}</p>
        </div>
    </div>
  )
}

export default HowToDownload