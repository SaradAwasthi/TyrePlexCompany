import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb() {
  return (
    <div className='ml-10 my-3' style={{textDecoration:"none"}}>
        <Link to="/" className='no-underline text-black'>Home <span> / </span></Link>
        <Link to="/" className='no-underline text-black'>Tyre Dealers <span> / </span></Link>
        <Link to="/" className='no-underline text-black'>Tyre Dealers Ghaziabad <span> / </span></Link>
        <span className='no-underline text-black'> SHREE HEMKUNT TYRES AND SERVICES</span>
    
    
    </div>
  )
}
