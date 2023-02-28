import React from 'react'
import error from "../assets/error.png"
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
        <img className='error-img' src={error} alt="error" />
        <h1 className="error-heading">Oops! An error has occurred!</h1>
        <Link className='route' to = "/homepage">
        <button className="error-btn">Go back to HomePage
        </button></Link>
        
    </div>
  )
}

export default Error