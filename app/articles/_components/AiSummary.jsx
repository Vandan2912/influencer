import { Button } from '@headlessui/react'
import React from 'react'

const AiSummary = () => {
    return (
        <div className='flex items-center gap-3 md:gap-10 bg-[#FBF9F9] rounded-xl py-5 md:py-6 px-5 md:px-10'>
            <div className='flex flex-col gap-2 md:gap-5 flex-1 text-start shrink-0'>
                <p className='text-xl md:text-2xl font-bold'>AI Summary</p>
                <p className='text-sm md:text-lg font-medium'>Ask influencer marketing hub AI for a quick summary</p>
            </div>
            <Button className="bg-[#EB3C75] border w-fit border-[#EB3C75] hover:bg-[#860e35] duration-300 rounded-full py-1 px-5 md:px-8 text-white mt-5 flex items-center gap-3">
                Summarize
            </Button>
        </div>
    )
}

export default AiSummary