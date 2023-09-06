import Link from 'next/link'
import React from 'react'

const homePage = () => {
  return (
    <main className='container flex flex-col justify-center items-center'>
      <div className='welcome_container dflex'>
                <h1 className='hero_title'>Welcome to Our Site!</h1>
                <p className='hero_sec_desc'>
                    Discover a world of possibilities and information. We are
                    <br />
                    here to provide you with the latest updates and insights.
                </p>
                <div className='btn_wrapper dflex mt-10'>
                    <Link href='/signup' className="btn">Sign Up</Link>
                    <Link href='/login' className="btn btn-secondary">Log In</Link>
                </div>
            </div>
      
    </main>
  )
}

export default homePage