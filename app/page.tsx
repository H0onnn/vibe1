"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border rounded-md overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-500 text-white p-2 w-full text-left flex justify-between items-center rounded-md"
        >
          Click me
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isOpen
              ? contentRef.current?.scrollHeight || "1000px"
              : "0",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div ref={contentRef} className="p-4 border-t">
            Accordion content goes here
          </div>
        </div>
      </div>
    </div>
  );
}
