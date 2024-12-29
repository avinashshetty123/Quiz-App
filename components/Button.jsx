import React from 'react'

export default function Button({image,url,children}) {
  return (

    <img src={image} alt={children} onClick={url} className='h-12 w-16'/>
    
  )
}
