"use client"

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import profile from "../../../../assets/userprofile.jpeg"

const BreadCrumb = () => {
    const pathname = usePathname()
    const category = pathname.split("/")[2]
    console.log(category)
    return (
        <div className='bg-[#FBF9F9] px-5 md:px-10 lg:px-16 pt-24 md:pt-28 pb-10'>
            <div className='flex flex-col'>
                <div className='flex items-center gap-5 w-full text-sm flex-wrap'>
                    <Link href="/" className="">Home</Link>
                    <ChevronRightIcon className='h-3 w-3' />
                    <Link href={`/articles/${category}` || "#"} className="">{category}</Link>
                    <ChevronRightIcon className='h-3 w-3' />
                    <div className="text-[#EB3C75] font-bold">Monthly Influencer Marketing report</div>
                </div>
            </div>
            <div className='grid grid-cols-6 gap-8 md:gap-16 mt-5'>
                <div className='col-span-6 md:col-span-3 lg:col-span-4 flex flex-col order-2 md:order-1'>
                    <p className='hidden md:block text-2xl md:text-3xl lg:text-4xl font-bold mt-10 mb-5'>May 2024 Influencer Marketing Report</p>
                    <div className='flex justify-between items-start md:items-center gap-5 w-full text-sm'>
                        <div className="flex items-center gap-3 shrink-0">
                            <img src={profile.src} alt="" className='h-6 w-6 object-cover rounded-full' />
                            <span>Djanan Kasumovic</span>
                        </div>
                        <div className='flex flex-row gap-3 flex-1 justify-around flex-wrap'>
                            <span className='shrink-0'>June 15th, 2024</span>
                            <span className='shrink-0'>23 Min read</span>
                        </div>
                    </div>
                </div>
                <div className='col-span-6 md:col-span-3 lg:col-span-2 order-1 md:order-2 rounded-2xl min-h-[35vh] sm:min-h-[30vh] md:min-h-[25vh] lg:min-h-[20vh]'
                    style={{
                        background: "linear-gradient(246.65deg, rgba(83, 80, 80, 0.57) -3.93%, rgba(105, 96, 96, 0.11) 46.24%, rgba(69, 69, 69, 0.53) 85.66%), linear-gradient(111.71deg, rgba(95, 95, 95, 0.1) 8.71%, rgba(126, 122, 122, 0.14) 46.84%, rgba(92, 92, 92, 0.5) 89.76%), url('/articleDetail.jpeg')",
                        backgroundRepeat: "inherit",
                        backgroundSize: "cover",
                    }}>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb