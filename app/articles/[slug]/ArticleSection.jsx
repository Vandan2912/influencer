"use client";


import { Button } from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import React from 'react'

const ArticleSection = ({ title, data, loadmore=false }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center mb-3 mt-7'>
                <p className='text-2xl font-bold text-center'>{title}</p>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {data.map((item, i) => (
                    <Card key={i} data={item} index={i} />
                ))}
            </div>
            {
                loadmore && (<Button className="bg-[#EB3C75] hover:bg-[#860e35] duration-300  w-fit rounded-full py-2 px-8 text-white mt-10 flex items-center gap-3">
                    Load More
                    <ArrowLongRightIcon className="h-5 w-5" />
                </Button>)
            }

        </div>
    )
}

export default ArticleSection


const Card = ({ data, index }) => {
    const router = useRouter()

    return (
        <div className='group col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col gap-2 p-4 hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300 rounded-md cursor-pointer' onClick={() => { router.push(`/articles/${data.category}/123`) }}>
            <div className='max-h-52 h-48 overflow-hidden rounded-md'>
                <img src={`/eccomerce/${data.image}`} className='h-full w-full object-cover group-hover:scale-105 duration-300 rounded-md' />
            </div>
            <p className='text-lg font-bold hover:text-[#EB3C75] duration-300'>{data.title}</p>
            <p className='text-sm'>{data.desc}</p>
        </div>
    )
}