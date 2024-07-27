"use client";

import { Button } from '@headlessui/react'
import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const PlatformCard = ({ data }) => {
    const router = useRouter()

    return (
        <div className='grid grid-cols-6 gap-8 border border-[#00000033] shadow rounded-[20px] p-5'>
            <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                <img src={`/platforms/${data.image}`} alt="" className='w-full h-full object-contain' />
            </div>
            <div className='col-span-6 sm:col-span-4 lg:col-span-4 flex flex-col gap-3'>
                <p className='text-sm sm:text-base'><span className='font-bold'>Key Features: </span> {data.features}</p>
                <p className='text-sm sm:text-base'><span className='font-bold'>Channels: </span> {data.channels}</p>
            </div>
            <div className='col-span-6 lg:col-span-1 flex lg:justify-end items-center justify-center sm:justify-end'>
                <Button className="hover:bg-[#EB3C75] border border-[#EB3C75] bg-white b rounded-full w-fit py-1 px-8 text-[#EB3C75] hover:text-white flex items-center gap-3 text-sm sm:text-base" onClick={() => { router.push(`/platforms/${data.category}`) }}>
                    View More
                    <ArrowLongRightIcon className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}

export default PlatformCard