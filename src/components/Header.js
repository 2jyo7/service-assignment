import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div >
        <Link className='header-container' href={"/featured"}>
        Featured
        </Link>
        <Link className='header-container' href={"/haircutting"}>
        Haircutting
        </Link>
        <Link className='header-container' href={"/styling"}>
        Styling
        </Link>
        <Link className='header-container' href={"/color-services"}>
        Color Services
        </Link>
    </div>
  )
}

export default Header