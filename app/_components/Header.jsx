"use client";

import { useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import logo from "../../assets/logo.png";
import {
  about,
  agencies,
  articles,
  platforms,
  products,
  resources,
} from "@/Constants/header-constants";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

// const callsToAction = [
//   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "#", icon: PhoneIcon },
// ];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchbar, setSearchbar] = useState(false);
  const [results, setResults] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeOutRef = useRef();
  const articlesRef = useRef();
  const platformRef = useRef();
  const agenciesRef = useRef();
  const resourcesRef = useRef();
  const aboutRef = useRef();
  console.log("results", results);
  const handleEnter = (isOpen, ref) => {
    clearTimeout(timeOutRef.current);
    !isOpen && ref.current?.click();
  };

  const handleLeave = (isOpen, ref) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && ref.current?.click();
    }, 400);
  };

  const close = () => {
    setSearchbar(false);
  };

  return (
    <header
      className="fixed z-20 w-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.91) 9.37%, rgba(0, 0, 0, 0.01) 100%)",
        display: pathname === "/login" && "none",
      }}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[90rem] items-center justify-between py-3 px-6 lg:px-8"
      >
        <div className="flex lg:flex-1 shrink-0">
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <a href="/" className="-m-1.5 p-1.5 shrink-0">
            <span className="sr-only">Your Company</span>
            <img alt="logo" src={logo.src} className="h-12 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden gap-5 items-center">
          <Button
            className="rounded-full text-white"
            onClick={() => {
              setSearchbar(true);
            }}
          >
            <MagnifyingGlassIcon className="text-white h-5 w-5" />
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-4 lg:items-center">
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          {/* <a href="#" className="text-sm leading-6 text-white">
            Home
          </a> */}
          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter(open, articlesRef)}
                onMouseLeave={() => handleLeave(open, articlesRef)}
              >
                <PopoverButton
                  ref={articlesRef}
                  className="flex group items-center gap-x-1 text-sm leading-6 text-white focus-visible:outline-none"
                >
                  <Link
                    href="/articles"
                    className="group-hover:text-[#EB3C75] duration-300"
                  >
                    Articles
                  </Link>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none transition-all"
                    style={{
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </PopoverButton>
                <PopoverElement array={articles} />
              </div>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter(open, platformRef)}
                onMouseLeave={() => handleLeave(open, platformRef)}
              >
                <PopoverButton
                  ref={platformRef}
                  className="group flex items-center gap-x-1 text-sm leading-6 text-white focus-visible:outline-none"
                >
                  <Link
                    href="/platforms"
                    className="group-hover:text-[#EB3C75] duration-300"
                  >
                    Platforms
                  </Link>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none transition-all"
                    style={{
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </PopoverButton>
                <PopoverElement array={platforms} />
              </div>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter(open, agenciesRef)}
                onMouseLeave={() => handleLeave(open, agenciesRef)}
              >
                <PopoverButton
                  ref={agenciesRef}
                  className="group flex items-center gap-x-1 text-sm leading-6 text-white focus-visible:outline-none"
                >
                  <Link
                    href="/agencies"
                    className="group-hover:text-[#EB3C75] duration-300"
                  >
                    Agencies
                  </Link>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none transition-all"
                    style={{
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </PopoverButton>
                <PopoverElement array={agencies} />
              </div>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter(open, resourcesRef)}
                onMouseLeave={() => handleLeave(open, resourcesRef)}
              >
                <PopoverButton
                  ref={resourcesRef}
                  className="group flex items-center gap-x-1 text-sm leading-6 text-white focus-visible:outline-none"
                >
                  <Link
                    href="/resources"
                    className="group-hover:text-[#EB3C75] duration-300"
                  >
                    Resources
                  </Link>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none transition-all"
                    style={{
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </PopoverButton>
                <PopoverElement array={resources} />
              </div>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => handleEnter(open, aboutRef)}
                onMouseLeave={() => handleLeave(open, aboutRef)}
              >
                <PopoverButton
                  ref={aboutRef}
                  className="group flex items-center gap-x-1 text-sm leading-6 text-white focus-visible:outline-none"
                >
                  <Link
                    href="/about"
                    className="group-hover:text-[#EB3C75] duration-300"
                  >
                    About Us
                  </Link>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none transition-all"
                    style={{
                      transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </PopoverButton>
                <PopoverElement array={about} />
              </div>
            )}
          </Popover>

          <Button
            className="bg-[#EB3C75] rounded-full py-2 px-5 text-white hover:bg-[#860e35] duration-300 "
            onClick={() => {
              router.push("/resources/benchmark-report");
            }}
          >
            Benchmark Report 2024
          </Button>
          <Button
            className="bg-[#EB3C75] hover:bg-[#860e35] duration-300 rounded-full p-3 text-white"
            onClick={() => {
              setSearchbar(true);
            }}
          >
            <MagnifyingGlassIcon className="text-white h-5 w-5" />
          </Button>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="logo" src={logo.src} className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-10 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Button
                  className="bg-[#EB3C75] rounded-lg py-2 px-5 text-white w-full"
                  onClick={() => {
                    router.push("/resources/benchmark-report");
                  }}
                >
                  Benchmark Report 2024
                </Button>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Articles
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...articles].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm  leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Platforms
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...platforms].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm  leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Agencies
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...agencies].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm  leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Resources
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...resources].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm  leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    About Us
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...about].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm  leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
              {/* <div className="py-6">
                <a
                  // biome-ignore lint/a11y/useValidAnchor: <explanation>
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
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
    </header>
  );
};

export default Header;

const PopoverElement = ({ array = [] }) => {
  return (
    <PopoverPanel
      transition
      className="absolute -left-40 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-700 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <div className="p-4 grid grid-cols-2 gap-4">
        {array.map((item) => (
          <div
            key={item.name}
            className="group col-span-2 lg:col-span-1 relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6"
          >
            {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <item.icon
                aria-hidden="true"
                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
              />
            </div> */}
            <div className="flex-auto">
              <a
                href={item.href}
                className="block font-semibold text-gray-900 group-hover:text-[#EB3C75] duration-300"
              >
                {item.name}
                <span className="absolute inset-0" />
              </a>
              {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
        {callsToAction.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
            <item.icon
              aria-hidden="true"
              className="h-5 w-5 flex-none text-gray-400"
            />
            {item.name}
          </a>
        ))}
      </div> */}
    </PopoverPanel>
  );
};
