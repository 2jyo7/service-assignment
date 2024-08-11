import React from 'react'

const Card = ({title, para, time, rate}) => {
  return (
    <div className='card'>
        <h1>{title}</h1>
        <p>{time}</p>
        <p>{para}</p>
        <h2>{rate}</h2>
    </div>
  )
}

export default Card