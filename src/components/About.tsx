import React from 'react'

export const About = () => {
  return (
    <div className='flex flex-col w-full lg:w-[900px]'>
        <div>
            <h2 className='text-4xl font-bold text-yellow-600 mb-2'>Mision</h2>
            <div className='flex'>
                <div className='w-44 h-2 bg-black'></div>
                <div className='w-44 h-2 bg-yellow-500'></div>
            </div>
            <p className=' w-full lg:w-[600px] mt-3'>“Impulsar el rendimiento de los equinos a través de productos de higiene de alta tecnología, diseñados para optimizar la salud de la piel y el pelaje. Comprometidos a ofrecer soluciones innovadoras para alcanzar su máximo potencial”</p>
        </div>
        <div className='flex flex-col w-full items-end'>
            <h2 className='text-4xl font-bold text-yellow-600 mb-2'>Visión</h2>
            <div className='flex'>
                <div className='w-44 h-2 bg-black'></div>
                <div className='w-44 h-2 bg-yellow-500'></div>
            </div>
            <p className=' w-full lg:w-[600px] mt-3 text-end'>“Ser líderes mundiales en el cuidado de la piel y el pelaje equino, ofreciendo una gama completa de productos naturales y seguros que superen las expectativas de los propietarios y de los médicos veterinarios.”</p>
        </div>
    </div>
  )
}
