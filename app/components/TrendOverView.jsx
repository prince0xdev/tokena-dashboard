import { MoveDownIcon, MoveUpIcon, TrendingUp } from 'lucide-react'
import React from 'react'
import Photo from '@/public/images/user.png'
import Image from 'next/image'
import Search from './Search'

function TrendOverView() {
  return (
    <div className='w-full flex flex-col items-end lg:flex-row gap-6 mt-10'>
        <div className=" lg:w-[35%] w-full border rounded-lg  p-3 border-gris1">
            <h1 className='font-mono-sans-bold text-xl'>Balance</h1>

            <div className="flex w-full items-center gap-5 justify-between mt-3">
                <h1 className='font-mono-sans-bold text-2xl md:text-3xl'>
                    $63,375,200
                </h1>
                <div className="flex justify-between hover:scale-95 duration-200 items-center ">
                    <h1 className="text-vert p-1 bg-green-100 rounded-full">+2,38%</h1>
                    <p className='text-sm text-center'>vs Last Month</p>
                </div>

            </div>

            <div className="flex items-center gap-5 justify-between mt-3">
                <button className="flex justify-center text-bleu1 bg-gray-100 p-3 rounded-lg w-1/2 hover:scale-95 duration-200 ">
                    <MoveUpIcon />
                    <p>Deposit</p>
                </button>

                <button className="flex justify-center text-bleu1 bg-gray-100 p-3 rounded-lg w-1/2 hover:scale-95 duration-200">
                    <MoveDownIcon />
                    <p>Withdrow</p>
                </button>

            </div>
        </div>

        <div className=' lg:w-[60%] w-full'>
            <div className="flex justify-between items-center w-full">
                <h1 className='font-mono-sans-bold text-xl'>Trending</h1>
                <p className='cursor-pointer hover:scale-95 duration-200'>View more</p>
            </div>

            {/* le mapping des donnes du trending */}
            <div className='grid grid-cols-2 lg:grid-cols-4 justify-between wrap gap-3 rounded-lg mt-2'>

                <div className='border border-gris1  rounded-lg p-2'>
                    <div className="flex items-center">
                        <div className="flex items-center w-full justify-between gap-2">
                            <div className='flex gap-2 w-1/2 items-center'>
                                <Image src={Photo} width={20} 
                                className='rounded-full'/>
                                <div className='text-sm'>
                                    <h1>Sui</h1>
                                    <h1 className='text-gris2'>SUI</h1>
                                </div>
                            </div>
                            <div className="flex w-1/2 text-vert p-1 bg-green-100 justify-between rounded-full hover:scale-95 duration-200 items-center gap-1">
                                <h1>+2,38%</h1>
                                <TrendingUp className='text-vert text-sm'/>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <h1>1.56 SUI </h1>
                        <p className='text-gris2  sm:text-sm'>$2,455,373,268</p>
                    </div>
                </div>
                <div className='border border-gris1  rounded-lg p-2'>
                    <div className="flex items-center">
                        <div className="flex items-center w-full justify-between gap-2">
                            <div className='flex gap-2 w-1/2 items-center'>
                                <Image src={Photo} width={20} 
                                className='rounded-full'/>
                                <div className='text-sm'>
                                    <h1>Sui</h1>
                                    <h1 className='text-gris2'>SUI</h1>
                                </div>
                            </div>
                            <div className="flex w-1/2 text-vert p-1 bg-green-100 justify-between rounded-full hover:scale-95 duration-200 items-center gap-1">
                                <h1>+2,38%</h1>
                                <TrendingUp className='text-vert text-sm'/>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <h1>1.56 SUI </h1>
                        <p className='text-gris2  sm:text-sm'>$2,455,373,268</p>
                    </div>
                </div>
                <div className='border border-gris1  rounded-lg p-2'>
                    <div className="flex items-center">
                        <div className="flex items-center w-full justify-between gap-2">
                            <div className='flex gap-2 w-1/2 items-center'>
                                <Image src={Photo} width={20} 
                                className='rounded-full'/>
                                <div className='text-sm'>
                                    <h1>Sui</h1>
                                    <h1 className='text-gris2'>SUI</h1>
                                </div>
                            </div>
                            <div className="flex w-1/2 text-vert p-1 bg-green-100 justify-between rounded-full hover:scale-95 duration-200 items-center gap-1">
                                <h1>+2,38%</h1>
                                <TrendingUp className='text-vert text-sm'/>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <h1>1.56 SUI </h1>
                        <p className='text-gris2  sm:text-sm'>$2,455,373,268</p>
                    </div>
                </div>

                <div className='border border-gris1  rounded-lg p-2'>
                    <div className="flex items-center">
                        <div className="flex items-center w-full justify-between gap-2">
                            <div className='flex gap-2 w-1/2 items-center'>
                                <Image src={Photo} width={20} 
                                className='rounded-full'/>
                                <div className='text-sm'>
                                    <h1>Sui</h1>
                                    <h1 className='text-gris2'>SUI</h1>
                                </div>
                            </div>
                            <div className="flex w-1/2 text-vert p-1 bg-green-100 justify-between rounded-full hover:scale-95 duration-200 items-center gap-1">
                                <h1>+2,38%</h1>
                                <TrendingUp className='text-vert text-sm'/>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <h1>1.56 SUI </h1>
                        <p className='text-gris2 sm:text-sm'>$2,455,373,268</p>
                    </div>
                </div>
            </div>
            {/* le mapping des donnes du trending */}
        </div>
    </div>
  )
}

export default TrendOverView