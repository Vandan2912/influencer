"use client";

import React, { useEffect, useState } from "react";
import { useHeadsObserver } from "@/hooks/handleObserver";

const TableContent = () => {
  const [headings, setHeadings] = useState([]);
  const { activeId } = useHeadsObserver();

  const getClassName = (level) => {
    switch (level) {
      case 2:
        return "head2";
      case 3:
        return "head3";
      case 4:
        return "head4";
      default:
        return null;
    }
  };

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
      .map((elem) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
      }))
      .filter((heading) => heading.id);
    setHeadings(elements);
  }, []);

  console.log("headings", headings);
  return (
    <div className="bg-[#FBF9F9] px-4 py-6 rounded-2xl lg:sticky lg:top-24">
      <p className="text-lg font-bold text-center mb-5">Table Of Content</p>
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={getClassName(heading.level)}
            style={{ marginBottom: "15px" }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();

                var element = document.getElementById(heading.id);
                var headerOffset = 200;
                var elementPosition = element.getBoundingClientRect().top;
                var offsetPosition =
                  elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }}
              className="hover:!font-bold duration-200"
              style={{
                fontWeight: activeId === heading.id ? "bold" : "normal",
                height: "100%",
                display: "block",
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableContent;
