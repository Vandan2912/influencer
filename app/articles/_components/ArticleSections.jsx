import { Button } from '@headlessui/react'
import React from 'react'

const ArticleSections = ({ title, data }) => {
    return (
        <div className=''>
            <div className='flex justify-between items-center'>
                <p className='text-2xl font-bold'>{title}</p>
                <Button className="hover:bg-[#EB3C75] border border-[#EB3C75] bg-white b rounded-full py-1 px-8 text-[#EB3C75] hover:text-white mt-5 flex items-center gap-3">
                    See all
                </Button>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                {data.map((item, i) => (
                    <Card key={i} data={item} index={i} />
                ))}
            </div>
        </div>
    )
}

export default ArticleSections

const Card = ({ data, index }) => {
    return (
        <div className='col-span-4 sm:col-span-2 lg:col-span-1 flex flex-col gap-2 p-4 shadow-[0px_3.33px_4.44px_0px_#00000012] rounded-md '>
            <img src={`/eccomerce/${data.image}`} className='max-h-52 h-48 w-full object-cover rounded-md' />
            <p className='text-lg font-bold'>{data.title}</p>
            <p className='text-sm'>{data.desc}</p>
        </div>
    )
}