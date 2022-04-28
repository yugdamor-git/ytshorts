import React from 'react'
import Link from 'next/link'
import FileSaver from 'file-saver'


async function downloadThumbnail(url)
{

  FileSaver.saveAs(
      url,
    `${url.split("/")[-1]}.jpg`
  )

}


const Thumbnail = ({title,imageUrl,duration,downloadType,t}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-8">
        <img className="rounded-lg shadow-lg w-[80%] md:w-[60%]" src={imageUrl}/>
        <div className="my-4 md:mx-6 flex flex-col justify-center items-center">
        <h1 className="md:text-xl font-bold text-gray-700 md:text-left">{title}</h1>
        
        {duration != null &&
          <h1 className="text-gray-500 text-left md:text-left">{Math.round(duration/60)} min</h1>
        }

        {downloadType != null &&
          <a href={imageUrl}>{t('thumbnail.download')}</a>
        }
        
        </div>
    </div>
  )
}

export default Thumbnail