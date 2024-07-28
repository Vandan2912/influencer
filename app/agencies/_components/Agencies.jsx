import React from 'react'
import AgenciesCard from './AgenciesCard'
import { agencies } from '@/Constants/agencies-category'

const Agencies = () => {
    return (
        <section className='min-h-screen grid grid-cols-1 gap-5 p-7 px-5 sm:px-10 md:px-20'>
            {
                agencies.map((item, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <AgenciesCard key={i} data={item} />
                ))
            }
        </section>
    )
}

export default Agencies