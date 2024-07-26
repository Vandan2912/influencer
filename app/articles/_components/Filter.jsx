"use client";

import { Checkbox, Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Description, Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import clsx from 'clsx'

const people = [
    { id: 1, name: 'Tom Cook' },
    { id: 2, name: 'Wade Cooper' },
    { id: 3, name: 'Tanya Fox' },
    { id: 4, name: 'Arlene Mccoy' },
    { id: 5, name: 'Devon Webb' },
]

const plans = [
    { name: 'Guides' },
    { name: 'Tips' },
    { name: 'Statistics' },
    { name: 'Guides' },
    { name: 'Examples' },
]

const channels = [
    { name: 'Tiktok' },
    { name: 'Instagram' },
    { name: 'Facebook' },
    { name: 'Twitch' },
    { name: 'Snapchat' },
    { name: 'Youtube' },
    { name: 'Pinterest' },
    { name: 'Amazon' },
]

const Filter = () => {

    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState({ id: -1, name: '' })
    const [types, setTypes] = useState("")
    const [channel, setChannel] = useState("")

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <div className='w-full border border-[#EEF4F6] rounded-[20px] p-[30px]'>
            <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        {/* <span className="text-gray-500 sm:text-sm">$</span> */}
                        <MagnifyingGlassIcon className="size-4" />
                    </div>
                    <ComboboxInput
                        className={clsx(
                            'z-10 w-full rounded-full border-none bg-white/5 text-sm/6 text-black shadow-[0px_0.48px_44.12px_0px_#9098C329] py-1.5 pl-9 pr-5',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        displayValue={(person) => person?.name}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder='Search'
                    />
                    {/* <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                        <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
                    </ComboboxButton> */}
                </div>

                <ComboboxOptions
                    anchor="bottom"
                    transition
                    className={clsx(
                        'w-[var(--input-width)] rounded-xl border border-black/10 bg-gray-100 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
                        'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                    )}
                >
                    {filteredPeople.map((person) => (
                        <ComboboxOption
                            key={person.id}
                            value={person}
                            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                        >
                            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                            <div className="text-sm/6 text-black">{person.name}</div>
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Combobox>
            <div className='mt-5 hidden lg:block'>
                <p className='text-base font-bold mb-3'>Types</p>
                <RadioGroup value={types} onChange={setTypes} aria-label="Server size" className="flex flex-col w-full gap-3">
                    {plans.map((plan) => (
                        <Field key={plan} className="flex items-baseline gap-3 justify-between">
                            <div>
                                <Label className="text-sm">{plan.name}</Label>
                            </div>
                            <Checkbox
                                // checked={enabled}
                                // onChange={setEnabled}
                                className="group flex items-center justify-center size-4 rounded-full border bg-white data-[checked]:bg-[#EB3C75]"
                            >
                                <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                            </Checkbox>
                        </Field>
                    ))}
                </RadioGroup>
            </div>
            <div className='mt-7 lg:hidden block w-full bg-white/5 text-sm/6 text-black shadow-[0px_0.48px_44.12px_0px_#9098C329]'>
                <Listbox value={types} onChange={setTypes}>
                    <ListboxButton className={clsx(
                        'text-start w-full rounded-full border-none bg-white/5 text-sm/6 text-black shadow-[0px_0.48px_44.12px_0px_#9098C329] py-1.5 pl-9 pr-5',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                        style={{ color: types.name ? "black" : "rgba(0,0,0,0.5)" }}
                    >{types.name ? types.name : "Types"}</ListboxButton>
                    {/* <ListboxOptions anchor="bottom" className=" bg-white">
                        {plans.map((person, i) => (
                            <ListboxOption key={i} value={person.name} className="data-[focus]:bg-blue-100">
                                {person.name}
                            </ListboxOption>
                        ))}
                    </ListboxOptions> */}
                    <ListboxOptions anchor="bottom" className="w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0">
                        {plans.map((person, i) => (
                            <ListboxOption key={i} value={person.name} className="group flex gap-2 bg-white data-[focus]:bg-blue-100">
                                <CheckIcon className="invisible size-5 group-data-[selected]:visible" />
                                {person.name}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>
            </div>
            <div className='mt-5'>
                <p className='text-base font-bold mb-3'>Channel</p>
                <RadioGroup value={channel} onChange={setChannel} aria-label="Server size" className="flex flex-col w-full gap-3">
                    {channels.map((plan) => (
                        <Field key={plan} className="flex items-baseline gap-3 justify-between">
                            <div>
                                <Label className="text-sm">{plan.name}</Label>
                            </div>
                            <Checkbox
                                // checked={enabled}
                                // onChange={setEnabled}
                                className="group flex items-center justify-center size-4 rounded-full border bg-white data-[checked]:bg-[#EB3C75]"
                            >
                                <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                            </Checkbox>
                        </Field>
                    ))}
                </RadioGroup>
            </div>
        </div>
    )
}

export default Filter