import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <nav className={`w-full flex flex-row h-20 items-center justify-around border-b-4 ${isSticky ? 'fixed top-0 left-0 bg-white shadow-md z-50' : ''}`}>
      <h1 className='text-4xl font-semibold text-teal-500'>AgriVenture</h1>
      <ul className='flex flex-row text-[23px] font-thin gap-x-8'>
        <li className={`hover:text-teal-500 hover:border-b-2 hover:border-b-teal-500 ${currentPage === '/' ? 'text-teal-500' : ''}`}>
          <a href="/">Home</a>
        </li>
        <li className={`hover:text-teal-500 hover:border-b-2 hover:border-b-teal-500 ${currentPage === '/about' ? 'text-teal-500' : ''}`}>
          <a href="/about">About</a>
        </li>
        <li className={`hover:text-teal-500 hover:border-b-2 hover:border-b-teal-500 ${currentPage === '/services' ? 'text-teal-500' : ''}`}>
          <a href="/services">Services</a>
        </li>
        <li className={`hover:text-teal-500 hover:border-b-2 hover:border-b-teal-500 ${currentPage === '/contact' ? 'text-teal-500' : ''}`}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
