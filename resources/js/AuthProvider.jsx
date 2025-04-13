import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { router } from '@inertiajs/react';

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    axios.get('/api/user')
      .then(() => {
        // User is authenticated
      })
      .catch(() => {
        // Redirect to login if not authenticated
        router.visit('/login');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-10">Loading...</div>; // Optional: loader
  }

  return children;
};

export default AuthProvider;
