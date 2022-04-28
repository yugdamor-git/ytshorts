import { useTranslation } from 'next-i18next';
import React from 'react'

const Hero = ({t}) => {

  return (
    <div className="text-center my-6">
        <h1 className="font-bold text-xl md:text-3xl text-gray-700 md:mb-2 dark:text-gray-400">{t('title')}</h1>
        <p className="text-center text-sm">{t('description')}</p>
    </div>
  )
}

export default Hero