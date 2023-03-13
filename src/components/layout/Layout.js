import { Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

function Layout({ children }) {
  return (
    <div>
        <Helmet>
            <title>Portfolio</title>
            <meta name='description' content="A website that scores 100% across all categories on the Chrome Lighthouse audit report showcasing Sarah Kapalka's best projects" />
        </Helmet>
        <div className="sm:pr-6 pr-4 text-lg text-white flex gap-2 sm:gap-4 justify-end items-center bg-zinc-800">
            <Link className="px-4 py-2" to='/'>Projects</Link>
            <Link className="px-4 py-2" to='/about'>About me</Link>
         </div>
         {children}
    </div>
  )
}

export default Layout