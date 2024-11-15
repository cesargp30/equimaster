import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTiktok } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='w-full h-80 bg-black mt-44 flex flex-col items-center justify-between'>
        <div className='max-w-[900px] flex md:flex-row flex-col items-center justify-center text-center gap-5 md:gap-36 md:justify-between mt-10'>
            <div className='flex flex-col'>
                <span className='text-white text-3xl font-bold'>Equimaster</span>
                <span className='text-white text-lg'>Jesica Paulina Inda Gomez</span>
                <span className='text-white text-md'>Derechos reservados - 2024</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-white text-3xl font-bold'>Contacto</span>
                <span className='text-white text-lg'>+52 327 105 5557</span>
                <span className='text-white text-lg'>equimaster4@gmail.com</span>
                <span className='text-white text-lg'>Compostela, Nayarit, Mexico</span>
                <span className='text-white text-lg'>Abasolo #414, Colonia Nueva Reforma</span>
                <span className='text-white text-md'>CP: 63705</span>
            </div>
        </div>
        <div className='bg-white/10 w-full h-10 flex items-center gap-x-3 justify-center'>
        <div className='flex items-center gap-x-3 justify-center '>
            <Link href={'https://www.facebook.com/profile.php?id=61568748147515&locale=es_LA'} target='_blank' className='text-white text-xl'><FaFacebookSquare /></Link>
            <Link href={'https://www.instagram.com/equimastermx/'} target='_blank' className='text-white text-xl'><FaTiktok /></Link>
            <Link href={'https://www.tiktok.com/@equimastermx'} target='_blank' className='text-white text-xl'><FaInstagram /></Link>
        </div>
        </div>
    </div>
  )
}
