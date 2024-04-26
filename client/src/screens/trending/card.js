import React from 'react'

export default function Card(name, followers, image) {
  return (
    <div className='card'>
      <div>{name}</div>
      <div>{followers}</div>
      <div>{image}</div>
    </div>
  )
}
