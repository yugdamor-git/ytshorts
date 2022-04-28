import FileSaver from 'file-saver';

import React, { useState } from 'react'
import { Default } from 'react-awesome-spinners';

async function fetchDownloadUrl(cid,id,quality,title,setIsLoading,value,downloadType)
    {
        setIsLoading(value)
        const url = `${"http://api.savetube.me"}/api/v1/convert`
        console.log(url)
        console.log(cid)
        console.log(id)
        console.log(quality)
        const formData = new URLSearchParams();
        formData.append("cid",cid)
        formData.append("id",id)
        formData.append("format",downloadType)
        formData.append("quality",quality)
        
        console.log(formData)

        const response = await fetch(
            url,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                method:"POST",
                body:formData
            }
        )
        
        const jsonData = await response.json();
        
        console.log(jsonData)

        FileSaver.saveAs(
            jsonData.url,
            `${title}.mp4`
        )
        setIsLoading(false)

        
    }

function getVideoQuality(video_formats)
{
    let videoQuality = []

    for(let format of video_formats)
    {
        if (format == 1080 || format == 1920)
        {
            videoQuality.push({
                name:"Full HD",
                resolution:format
            })
        }

        if (format == 720 || format == 1280)
        {
            videoQuality.push({
                name:"HD",
                resolution:format
            })
        }

        if (format == 480 || format == 640)
        {
            videoQuality.push({
                name:"SD",
                resolution:format
            })
        }
    }

    return videoQuality
}

function getAudioQuality(formats)
{
    let quality = []

    for(let format of formats)
    {
        if (format == 160)
        {
            quality.push({
                name:"Full HD",
                resolution:160
            })
        }

        if (format == 128)
        {
            quality.push({
                name:"HD",
                resolution:128
            })
        }

        if (format == 64)
        {
            quality.push({
                name:"SD",
                resolution:64
            })
        }
    }

    return quality
}


const Download = ({formats,cid,id,title,downloadType,t}) => {
    let quality = []
    let formatExt = ""

    let finalFormats = []

    if (downloadType == "video")
    {   formatExt = "px"
        quality = getVideoQuality(formats)
    }
    else if (downloadType == "audio")
    {
        formatExt = "kbps"
        quality = getAudioQuality(formats)
    }

    for (let format of formats)
    {
        if (format > 480)
        {
            finalFormats.push({format:format,title:`${format}${formatExt} - HD Download`})
        }
        else
        {
            finalFormats.push({format:format,title:`${format}${formatExt} - Download`})
        }
    }

    
    

    const [isLoading,setIsLoading] = useState(false)

    const [isOpen,setIsOpen] = useState(false)

    const firstItem = finalFormats.shift()


return (
    <div>

{isLoading != false &&
        <div className="fixed top-0 bottom-0 w-[100%] h-[100%] left-0 right-0 z-[100] bg-[#afafaf] opacity-30">
        <div className="relative"></div>
        </div>
    }


<div>
<div id='downloadSection' className="flex flex-col justify-center">
    
    <div className="flex">
        <button onClick={()=>(fetchDownloadUrl(cid,id,firstItem.format,title,setIsLoading,`r-${firstItem.format}`,downloadType))} className="flex items-center justify-center bg-red-500 my-1 p-3">
            <span className="mx-2 text-white">{firstItem.title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
</svg>
        </button>
        <button onClick={()=>(setIsOpen(!isOpen))} className="bg-red-500 my-1 p-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg></button>
    
    </div>
    {isLoading == `r-${firstItem.format}` &&
            <div class="flex justify-center items-center">
              <div>
                <Default sizeUnit="px" color="#FD0054" />
              </div>
            </div>
          }

</div>

<div className="flex flex-col items-start justify-center">
    { isOpen == true &&
        finalFormats.map((format)=>(

        <div key={format.format}>
            <div className="flex justify-center items-center">
        <button onClick={()=>(fetchDownloadUrl(cid,id,format.format,title,setIsLoading,`r-${format.format}`,downloadType))} className="flex items-center justify-center bg-red-500 my-1 p-3">
        <span className="mx-2 text-white">{format.title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
</svg>
        </button>

        <button className="bg-red-500 m-1 p-1 rounded invisible"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg></button>
        </div>
        {isLoading == `r-${format.format}` &&
            <div className="flex justify-center items-center">
              <div>
                <Default color="#FD0054" />
              </div>
            </div>
          }

            </div>
        
        ))
    }
</div>

</div>
    </div>
        
        )}

export default Download