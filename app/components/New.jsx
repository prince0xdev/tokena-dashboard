import React from 'react'
import Photo from '@/public/images/user.png'
import Image from 'next/image'
import { Heart, ShoppingCartIcon } from 'lucide-react'

function New( { nouvelle} ) {
  return (
    <div className='border border-gris1 rounded-lg p-3'>
        <div className="flex gap-3 items-center">
            <Image src={Photo} width={40} className='rounded-full'/>
            <div>
                <h1 className='font-mono-sans-bold text-bold'>CoinMarket Cap</h1>
                <h1 className='text-gris2'>News-7 hours ago</h1>
            </div>
        </div>
        <div className="w-full h-[200px] bg-gris1 mt-5 rounded-lg">

        </div>
        <div className='mt-3'>
            <h1 className='font-mono-sans-bold text-bold'>{nouvelle.title}</h1>
            <p className='text-gris2 mt-3'>{nouvelle.description}</p>

            <div className='flex gap-2 items-center mt-3'>
                <div className="flex gap-1 items-center">
                    <Heart className='cursor-pointer hover:scale-105 duration-200'/>
                    <h3>5</h3>
                </div>
                <div className="flex gap-1 items-center ">
                    <ShoppingCartIcon className='cursor-pointer hover:scale-105 duration-200'/>
                    <h3>5</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default New