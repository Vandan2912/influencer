"use client";

import { Button } from '@headlessui/react'
import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const AgenciesCard = ({ data }) => {
    const router = useRouter()

    return (
        <div className='group grid grid-cols-12 gap-8 border border-[#00000023] hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300 rounded-[20px] p-5'>
            <div className='col-span-12 sm:col-span-3 lg:col-span-2 overflow-hidden'>
                <img src={`/agencies/${data.image}`} alt="" className='w-full h-full object-contain group-hover:scale-110 duration-300' />
            </div>
            <div className='col-span-12 sm:col-span-9 lg:col-span-7 flex flex-col gap-3'>
                <p className='text-sm sm:text-base'>{data.desc}</p>
            </div>
            <div className='col-span-12 lg:col-span-3 flex lg:justify-end items-center justify-center sm:justify-end'>
                <Button className="hover:bg-[#EB3C75] border border-[#EB3C75] duration-300 bg-white b rounded-full w-fit py-1 px-8 text-[#EB3C75] hover:text-white flex items-center gap-3 text-sm sm:text-base" onClick={() => { router.push(`/agencies/${data.category}`) }}>
                    View More
                    <ArrowLongRightIcon className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}

export default AgenciesCard