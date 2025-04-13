import React, { useEffect, useState } from 'react';
import { Link, router } from '@inertiajs/react';
import axios from 'axios';


const Layout = ({children}) => {
  return (
    <>
        <header>
            <nav>
                <Link className='nav-link' href='/'>
                    Home
                </Link>
                <Link className='nav-link' href='/posts/create'>
                    Create
                </Link>
            </nav>
        </header>

        <main>
            {children}
        </main>
    </>
  )
}

export default Layout