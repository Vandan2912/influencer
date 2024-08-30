"use client";

import { SearchBar } from "@/app/_components/SearchBar";
import { SearchResultsList } from "@/app/_components/SearchResultsList";
import {
  Button,
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Field,
  Input,
} from "@headlessui/react";
import {
  ClockIcon,
  HandThumbUpIcon,
  PlusIcon,
  UsersIcon,
  WalletIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import FAQ from "./_components/FAQ";
import AllAgencies from "./_components/AllAgencies";

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

const Page = () => {
  const [input, setInput] = useState("");
  const [searchbar, setSearchbar] = useState(false);
  const [results, setResults] = useState([]);

  const close = () => {
    setSearchbar(false);
  };

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[1]);
  const [selected1, setSelected1] = useState(people[1]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <main className="font-Gotham">
      <section
        className="py-20 px-5 pt-28 md:px-16 flex flex-col text-center gap-10 align-middle"
        style={{
          background:
            "transparent linear-gradient(159deg, #fff 0, #EB3C75 100%)",
        }}
      >
        <h1 className="text-4xl font-bold">Agency Hub</h1>
        <h3 className="text-xl font-bold">
          Browse 15,000 agencies by Location, Category or Expertise, Client Type
          and more.
        </h3>
        <Button
          className="bg-[#EB3C75] w-56 flex gap-3 px-5 mx-auto items-center justify-center hover:bg-[#860e35] duration-300 rounded-full p-3 text-white"
          onClick={() => {
            setSearchbar(true);
          }}
        >
          <MagnifyingGlassIcon className="text-white h-5 w-5" />
          <span className="text-base self-center">Search</span>
          {/* <div className=" h-5 w-5" /> */}
        </Button>
        <Dialog
          open={searchbar}
          as="div"
          className="relative z-50 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 pt-24 md:pt-32 ">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-white p-6  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <div className="search-bar-container">
                  <SearchBar setResults={setResults} />
                  {results && results.length > 0 && (
                    <SearchResultsList results={results} />
                  )}
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </section>
      <section className="py-8 px-5 md:py-20 md:px-16">
        <div className="flex my-5 justify-center items-center gap-10 w-full">
          <hr className="w-10 border-black" />
          <p className="text-lg font-bold text-center">
            VIEW DIGITAL MARKETING AGENCIES BY LOCATION
          </p>
          <hr className="w-10 border-black" />
        </div>
        <div className="p-10 border border-gray-400 rounded-xl hidden lg:grid grid-cols-8 gap-10 ">
          <div className="col-span-2">
            <h6 className="text-[#EB3C75] text-xl font-medium">Countries</h6>
            <a
              href="#"
              className="mt-8 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
            >
              United States
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </div>
          <div className="col-span-3">
            <h6 className="text-[#EB3C75] text-xl font-medium">State</h6>
            <div className="w-full">
              <Combobox
                value={selected}
                onChange={(value) => setSelected(value)}
                onClose={() => setQuery("")}
                immediate
              >
                <div className="relative mt-5">
                  <ComboboxInput
                    className={clsx(
                      "w-full rounded-lg bg-white py-1.5 pr-8 pl-3 text-sm/6 text-black",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                    displayValue={(person) => person?.name}
                    onChange={(event) => setQuery(event.target.value)}
                    style={{ border: "1px solid rgb(209 213 219) !important" }}
                  />
                  <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                    <ChevronDownIcon className="size-4 group-data-[hover]:fill-white" />
                  </ComboboxButton>
                </div>

                <ComboboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-[var(--input-width)] rounded-xl border border-white/5 bg-[#e67198] p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
                    "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                  )}
                >
                  {filteredPeople.map((person) => (
                    <ComboboxOption
                      key={person.id}
                      value={person}
                      className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                    >
                      <CheckIcon className="invisible size-4 text-white group-data-[selected]:visible" />
                      <div className="text-sm/6 text-white">{person.name}</div>
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </Combobox>
            </div>
            <a
              href="#"
              className="mt-8 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
            >
              California
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
            >
              Florida
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
            >
              New York
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
            >
              Texas
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </div>
          <div className="col-span-3">
            <h6 className="text-[#EB3C75] text-xl font-medium">City</h6>
            <div className="w-full">
              <Combobox
                value={selected1}
                onChange={(value) => setSelected1(value)}
                onClose={() => setQuery("")}
                immediate
              >
                <div className="relative mt-5">
                  <ComboboxInput
                    className={clsx(
                      "w-full rounded-lg bg-white py-1.5 pr-8 pl-3 text-sm/6 text-black",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                    displayValue={(person) => person?.name}
                    onChange={(event) => setQuery(event.target.value)}
                    style={{ border: "1px solid rgb(209 213 219) !important" }}
                  />
                  <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                    <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
                  </ComboboxButton>
                </div>

                <ComboboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-[var(--input-width)] rounded-xl border border-white/5 bg-[#e67198] p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
                    "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                  )}
                >
                  {filteredPeople.map((person) => (
                    <ComboboxOption
                      key={person.id}
                      value={person}
                      className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                    >
                      <CheckIcon className="invisible size-4 text-white group-data-[selected]:visible" />
                      <div className="text-sm/6 text-white">{person.name}</div>
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </Combobox>
            </div>
            <a
              href="#"
              className="mt-8 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
            >
              Chicago
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
            >
              Los Angeles
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
            >
              Miami
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
            >
              NYC
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
            >
              San Diego
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className=" w-full pt-6 block lg:hidden">
          <div className="mx-auto w-full  divide-y divide-white/5 rounded-xl bg-white border border-gray-300">
            <Disclosure as="div" className="px-6 pt-6 pb-3" defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-lg font-medium text-black flex items-center gap-3">
                  <ComputerDesktopIcon className="h-4 w-4" /> Digital Marketing
                </span>
                <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 text-black">
                {/* Inner  */}
                <Disclosure as="div" className="p-2">
                  <DisclosureButton className="group flex w-full items-center gap-2">
                    <PlusIcon className="size-5 group-data-[open]:rotate-45 durat3" />
                    <span className="text-sm/6 font-medium text-black">
                      Countries
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 text-black ps-8">
                    <a
                      href="#"
                      className="mt-3 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
                    >
                      United States
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-2">
                  <DisclosureButton className="group flex w-full items-center gap-2">
                    <PlusIcon className="size-5 group-data-[open]:rotate-45 durat3" />
                    <span className="text-sm/6 font-medium text-black">
                      State
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 text-black ps-8">
                    <a
                      href="#"
                      className="mt-3 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
                    >
                      California
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
                    >
                      Florida
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
                    >
                      New York
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
                    >
                      Texas
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-2">
                  <DisclosureButton className="group flex w-full items-center gap-2">
                    <PlusIcon className="size-5 group-data-[open]:rotate-45 durat3" />
                    <span className="text-sm/6 font-medium text-black">
                      City
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 text-black ps-8">
                    <a
                      href="#"
                      className="mt-3 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
                    >
                      Chicago
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
                    >
                      Los Angeles
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
                    >
                      Miami
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
                    >
                      NYC
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="mt-4 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
                    >
                      San Diego
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  </DisclosurePanel>
                </Disclosure>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="px-6 pt-3 pb-6">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-black flex items-center gap-3">
                  <HandThumbUpIcon className="h-4 w-4" /> Social Media Marketing
                </span>
                <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 text-black">
                {/* Inner  */}
                <Disclosure as="div" className="p-2">
                  <DisclosureButton className="group flex w-full items-center gap-2">
                    <PlusIcon className="size-5 group-data-[open]:rotate-45 durat3" />
                    <span className="text-sm/6 font-medium text-black">
                      Countries
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 text-black ps-8">
                    <a
                      href="#"
                      className="mt-3 flex gap-3 items-center h-fit w-fit hover:text-[#EB3C75] duration-300"
                    >
                      United States
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  </DisclosurePanel>
                </Disclosure>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>

        {/* Second */}

        <div className="flex mt-20 my-5 justify-center items-center gap-10 w-full">
          <hr className="w-32 border-black" />
          <p className="text-lg font-bold">FEATURED AGENCIES</p>
          <hr className="w-32 border-black" />
        </div>

        <div className="grid grid-cols-6 mt-20 my-5 justify-center items-center gap-10 w-full">
          <Card
            image="/platforms/D.webp"
            title="Directive Consulting"
            desc="Directive Consulting is a dynamic marketing agency with its core expertise lying in creating insightful Marketing Strategies, innovative Advertisin... "
            minCamp="$4.999+"
            rate="Not Revealed"
            size={"50"}
            services={[
              "PPC Campaign Services",
              "Content Creation Services",
              "Strategic Marketing Services",
              "Visual Content Creation",
            ]}
          />
          <Card
            image="/platforms/S.webp"
            title="Sociallyin"
            desc="Sociallyin is a marketing agency with a team size of over 50, primarily serving medium-size clients and offering a range of key services including... "
            minCamp="$4.999+"
            rate="From $100"
            size={"50"}
            services={[
              "PPC Campaign Services",
              "Content Creation Services",
              "Strategic Marketing Services",
            ]}
          />
          <Card
            image="/platforms/Bulb.webp"
            title="SmartSites"
            desc="SmartSites is a leading marketing agency serving squarely medium-sized clients, boasting a comprehensive range of key services including marketing... "
            minCamp="$999+"
            rate="From $100"
            size={"50"}
            services={[
              "PPC Campaign Services",
              "Content Creation Services",
              "Strategic Marketing Services",
            ]}
          />
        </div>

        <AllAgencies />
        <FAQ />
      </section>
    </main>
  );
};

export default Page;

const Card = ({ image, title, desc, minCamp, rate, size, services = [] }) => {
  const router = useRouter();
  return (
    <div className="group h-full col-span-6 sm:col-span-3 lg:col-span-2 bg-white rounded-[20px] flex flex-col border border-[#00000033] py-5 hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300">
      <div className="w-full px-5 rounded-[20px] overflow-hidden flex items-center gap-3">
        <img
          src={image}
          alt=""
          className="w-9 h-9 object-contain rounded-[20px] group-hover:scale-110 duration-300"
        />
        <div className="flex w-full sm:w-4/5 gap-5 sm:gap-10 flex-col lg:flex-row">
          <div className="flex flex-col">
            <p className="text-base font-semibold">{title}</p>
            <p className="text-xs text-[#b8bfd9]">SPONSORED</p>
          </div>
        </div>
      </div>
      <p className="min-h-[100px] text-sm my-3 px-5">
        <span>{desc}</span>
        <span
          className="text-[#EB3C75] w-fit  cursor-pointer hover:text-[#bb134a] hover:underline duration-300"
          onClick={() => {
            router.push("/resources/agency/sociallyin");
          }}
        >
          Read more
        </span>{" "}
      </p>
      <div className="grid grid-cols-2">
        <div className="border-y border-r border-gray-200"></div>
        <div className="flex gap-3 items-center text-sm p-3 border-y border-gray-200">
          <WalletIcon className="w-4 h-4 text-[#b8bfd9]" /> {minCamp}
        </div>

        <div className="flex gap-3 items-center text-sm p-3 border-y border-r border-gray-200">
          <ClockIcon className="w-4 h-4 text-[#b8bfd9]" /> {rate}
        </div>
        <div className="flex gap-3 items-center text-sm p-3 border-y border-gray-200">
          <UsersIcon className="w-4 h-4 text-[#b8bfd9]" /> {size}
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2 p-5 bg-[#f3f5f9] text-sm">
        <p className="font-bold ">Services:</p>
        <ul className="list-disc">
          {services.map((item, i) => (
            <li key={i} className="ms-9 listStyle">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex w-full gap-3 mt-3 justify-center items-center">
        <Button
          className="w-fit border border-[#b8bfd9] text-[#b8bfd9] hover:bg-[#b8bfd9] rounded-md text-sm uppercase py-2 px-3 hover:text-white mt-0 sm:mt-5 flex items-center gap-3 shrink-0 h-fit duration-300"
          onClick={() => {
            router.push("/resources/agency/derective");
          }}
        >
          View Profile
        </Button>

        <Button
          className="w-fit border border-[#EB3C75] text-[#EB3C75] hover:bg-[#EB3C75] rounded-md text-sm uppercase py-2 px-3 hover:text-white mt-0 sm:mt-5 flex items-center gap-3 shrink-0 h-fit duration-300"
          onClick={() => {
            // router.push(`/agencies/${title}`);
          }}
        >
          Visit Website
        </Button>
      </div>
    </div>
  );
};
