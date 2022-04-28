
import React from 'react'

const Features = ({t}) => {

    const features = [
        {
            title:t('feature.features1.0.title'),
            description:t('feature.features1.0.description'),
            alt:t('feature.features1.0.alt'),
            image:"/static/svg/fast.svg"
        },
        {
            title:t('feature.features1.1.title'),
            description:t('feature.features1.1.description'),
            alt:t('feature.features1.1.alt'),
            image:"/static/svg/loop.svg"
        },
        {
            title:t('feature.features1.2.title'),
            description:t('feature.features1.2.description'),
            alt:t('feature.features1.2.alt'),
            image:"/static/svg/shield.svg"
        },
        {
            title:t('feature.features2.0.title'),
            description:t('feature.features2.0.description'),
            alt:t('feature.features2.0.alt'),
            image:"/static/svg/ux-design.svg"
        },
        {
            title:t('feature.features2.1.title'),
            description:t('feature.features2.1.description'),
            alt:t('feature.features2.1.alt'),
            image:"/static/svg/instructions.svg"
        },
        {
            title:t('feature.features2.2.title'),
            description:t('feature.features2.2.description'),
            alt:t('feature.features2.2.alt'),
            image:"/static/svg/computing.svg"
        },
    ]

  return (
    <div className="my-4">
        <div className="text-center text-gray-900 font-bold my-2">{t("feature.title")}</div>
        <div className="text-center text-gray-700 text-sm">{t("feature.description")}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
            {
                features.map((feature)=> (
                    <div key={feature.title} className="flex items-center justify-center flex-col shadow rounded m-2 my-4 p-4">
                        <img className="w-[35%]" src={feature.image}/>
                        <h1 className="my-2 text-black font-bold w-full text-lg">{feature.title}</h1>
                        <p className="text-black">{feature.description}</p>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Features