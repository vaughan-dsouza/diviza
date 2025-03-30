import React from 'react'
import Layout from '../Layouts/Layout'
import { Link } from '@inertiajs/react'

const Home = () => {
  return (
    <>
      <h1 className='title'>Home Page</h1>
      <Link preserveScroll href='/' className='block title mt-[1000px]'>
        {new Date().toLocaleTimeString()}
      </Link>
    </>
  )
}

// Home.layout = page => <Layout children={page} />
export default Home;