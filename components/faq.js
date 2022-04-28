import React from 'react'

const Faq = ({t}) => {
  return (
    <div className="my-6">
        <div>
            <h1 className="text-center text-black font-bold my-6">{t('faqs.title')}</h1>
            <ul className='text-sm'>
                <li className="mb-4 shadow m-1">
                    <h1 className="text-white rounded-t-sm bg-red-500 font-bold my-1 p-4">{t('faqs.faq1.title')}</h1>
                    <p className="text-gray-600 p-2">{t('faqs.faq1.description')}</p>
                </li>

                <li  className="mb-4 shadow m-1">
                    <h1 className="text-white rounded-t-sm bg-red-500 font-bold my-1 p-4">{t('faqs.faq2.title')}</h1>
                    <p className="text-gray-600 p-2">{t('faqs.faq2.description')}</p>
                </li>

                <li className="mb-4 shadow m-1">
                    <h1 className="text-white rounded-t-sm bg-red-500 font-bold my-1 p-4">{t('faqs.faq3.title')}</h1>
                    <p className="text-gray-600 p-2">{t('faqs.faq3.description')}</p>
                </li>

                <li className="mb-4 shadow m-1">
                    <h1 className="text-white rounded-t-sm bg-red-500 font-bold my-1 p-4">{t('faqs.faq4.title')}</h1>
                    <p className="text-gray-600 p-2">{t('faqs.faq4.description')}</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Faq