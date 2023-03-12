import { Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

function Layout({ children }) {
  return (
    <div>
        <Helmet>
            <title>Portfolio</title>
        </Helmet>
        <div className="px-10 text-lg text-white flex gap-4 justify-end items-center bg-blue-400">
            <Link className="px-4 py-2" to='/'>Projects</Link>
            <Link className="px-4 py-2" to='/about'>About me</Link>
         </div>
         {children}
    </div>
  )
}

export default Layout