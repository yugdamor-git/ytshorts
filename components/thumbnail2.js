import React, { useEffect } from 'react'
import Link from 'next/link'
import FileSaver from 'file-saver'


async function downloadThumbnail(url)
{

  FileSaver.saveAs(
      url,
    `${url.split("/")[-1]}.jpg`
  )

}


const Thumbnail2 = ({title,imageUrl,duration,downloadType,t}) => {

  let parts = imageUrl.split("/")
  let fileName = parts[parts.length -1 ]

  const ip = "http://148.251.41.232:3000"
  

  return (
    <div id='thumbnailDownload' className="flex flex-col items-center justify-center my-4">
        <img className="rounded-lg shadow-lg w-[80%] md:w-[70%]" src={imageUrl}/>
        <div className="my-4 md:mx-6 flex flex-col justify-center items-center">
        <h1 className="md:text-xl font-bold text-gray-700 text-center md:text-left">{title}</h1>
        
        {duration != null &&
          <h1 className="text-gray-500 text-center md:text-left">{Math.round(duration/60)} min</h1>
        }

        {downloadType != null &&
          <a className="m-1 p-2 px-4 bg-red-500 text-white rounded-md" href={`${ip}/api/thumbnail?url=${imageUrl}`} download={fileName}>{title}</a>
        }
        
        </div>
    </div>
  )
}

export default Thumbnail2