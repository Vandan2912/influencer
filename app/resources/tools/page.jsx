"use client";

import React, { useMemo, useState } from "react";
import HeroSection from "../_components/HeroSection";
import CalculatorCarousel from "../_components/CalculatorCarousel";
import Filter from "./_components/Filter";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { ecommerce } from "@/Constants/articles.-constants";
import { Pagination } from "react-bootstrap";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const Page = () => {
  const carouselData = [
    {
      image: "/resources/tools-carousel.jpg",
    },
    {
      image: "/resources/tools-carousel.jpg",
    },
    {
      image: "/resources/tools-carousel.jpg",
    },
    {
      image: "/resources/tools-carousel.jpg",
    },
  ];

  const calculatorCarouselData = [
    {
      image: "/resources/tool2.jpeg",
    },
    {
      image: "/resources/tool2.jpeg",
    },
    {
      image: "/resources/tool2.jpeg",
    },
    {
      image: "/resources/tool2.jpeg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(4);
  const [data] = useState([
    // ... your actual data here
  ]);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the indices for slicing the data array
  const indexOfLastRecord = (currentPage + 1) * itemsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage;
  const currentItems = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <main className="font-Gotham">
      <HeroSection data={carouselData} />
      <CalculatorCarousel data={calculatorCarouselData} />
      <section className="min-h-screen grid grid-cols-4 gap-5 p-7">
        <div className="col-span-4 lg:col-span-1 ">
          <Filter />
        </div>
        <div className="col-span-4 lg:col-span-3 grid grid-cols-1 gap-5">
          <ArticleSections title="Search More" data={ecommerce} />
          <nav className="pagination-container">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className="text-[#667085] flex gap-3 items-center"
            >
              <ArrowLongLeftIcon className="h-5 w-5" />
              Prev
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => onPageChange(number - 1)}
                className={`page-item ${
                  currentPage === number - 1 ? "active" : ""
                }`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === pageCount - 1}
              className="text-[#667085] flex gap-3 items-center"
            >
              Next
              <ArrowLongRightIcon className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Page;

const ArticleSections = ({ title, data }) => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">{title}</p>
        <Button className="hover:bg-[#EB3C75] duration-300 border border-[#EB3C75] bg-white b rounded-full py-1 px-8 text-[#EB3C75] hover:text-white mt-5 flex items-center gap-3">
          See all
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {data.map((item, i) => (
          <Card key={i} data={item} index={i} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ data, index }) => {
  const router = useRouter();
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className="col-span-4 sm:col-span-2 lg:col-span-1 group flex flex-col gap-2 p-4 border border-[#00000023] hover:shadow-[0_0_11px_rgba(33,33,33,.2)] duration-300 rounded-md cursor-pointer"
      onClick={() => {
        router.push("/resources/tools/123");
      }}
    >
      <div className="max-h-52 h-48 overflow-hidden rounded-md">
        <img
          src={`/eccomerce/${data.image}`}
          alt=""
          className=" group-hover:scale-105 duration-300 h-full w-full object-cover rounded-md"
        />
      </div>
      <p className="text-lg font-bold hover:text-[#EB3C75] duration-300">
        {data.title}
      </p>
      <p className="text-sm">{data.desc}</p>
    </div>
  );
};
