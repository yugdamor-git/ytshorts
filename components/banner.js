import React from 'react'

const Banner = ({title,description}) => {
  return (
    <div className="my-6 shadow m-2 p-2 rounded-lg">
        <div>
            <h1 className="text-center my-2 text-lg font-bold" dangerouslySetInnerHTML={{__html:title}}></h1>
            <p className="" dangerouslySetInnerHTML={{__html:description}}></p>
        </div>
    </div>
  )
}

export default Banner