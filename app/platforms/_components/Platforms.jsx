import React from 'react'
import PlatformCard from './PlatformCard'
import { platforms } from '@/Constants/platforms-category'

const Platforms = () => {
    return (
        <section className='min-h-screen grid grid-cols-1 gap-5 p-7'>
            {
                platforms.map((item, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <PlatformCard key={i} data={item} />
                ))
            }
        </section>
    )
}

export default Platforms