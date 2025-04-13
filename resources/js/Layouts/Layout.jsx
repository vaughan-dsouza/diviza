import React, { useEffect, useState } from 'react';
import { Link, router } from '@inertiajs/react';
import axios from 'axios';


const Layout = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const checkAuth = async () => {
          try {
            const res = await axios.get('/api/user');
            console.log(res);
            if (res?.data) {
              setIsAuthenticated(true);
            }
          } catch (err) {
            router.visit('/login'); 
          } finally {
          }
        };
    
        checkAuth();
      }, []);

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