import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <div className='w-full h-[600px] bg-cover bg-center items-center justify-center flex' style={{ backgroundImage: 'url(/portada.jpg)' }}>
        <div className='h-[400px] w-[400px] bg-black rounded-full items-center flex justify-center'>
            <Image
                src={'/equimaster.jpg'}
                alt='Equimaster'
                width={ 300 }
                height={ 300 }
            />
        </div>
    </div>
  )
}
