import React from 'react'

const PageHeader = ({title,description}) => {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold my-1 p-1 text-gray-700 md:text-2xl">{title}</h1>
        <p className='text-center text-sm text-gray-500 my-2 md:text-lg'>{description}</p>
      </div>
    </div>
  )
}

export default PageHeader