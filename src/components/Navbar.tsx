import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className='w-full h-20 bg-black px-10 flex items-center justify-between'>
        <span className='text-white font-bold text-xl cursor-pointer'>Equi<span className='font-normal'>master</span></span>
        <div className='flex items-center gap-x-3'>
            <Link href={'https://www.facebook.com/profile.php?id=61568748147515&locale=es_LA'} target='_blank' className='text-white text-xl'><FaFacebookSquare /></Link>
            <Link href={'https://www.instagram.com/equimastermx/'} target='_blank' className='text-white text-xl'><FaTiktok /></Link>
            <Link href={'https://www.tiktok.com/@equimastermx'} target='_blank' className='text-white text-xl'><FaInstagram /></Link>
        </div>
    </nav>
  )
}
