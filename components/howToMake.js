import React from 'react'

const HowToMake = ({t}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center rounded-lg p-2">
         <img className="w-[80%] md:w-[30%] rounded-md" src='/static/staticImage/create-a-short.jpg'/>
        <div>
            <h1 className="font-bold text-lg my-2 text-black">{t('how_to_make.title')}</h1>
            <h2 className="text-gray-700 my-2">{t('how_to_make.description')}</h2>
            <ol className='p-1 font-bold'>
                <li className="my-2">{t('how_to_make.step1')}</li>
                <li className="my-2">{t('how_to_make.step2')}</li>
                <li className="my-2">{t('how_to_make.step3')}</li>
            </ol>
            <p className="font-semibold">{t('how_to_make.follow')}</p>
        </div>
       
    </div>
  )
}

export default HowToMake