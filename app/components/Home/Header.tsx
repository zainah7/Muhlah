"use client";
import React, { useState } from "react";
import Image from "next/image";
import { logowhite, logoBlue } from "@/public/assets/index";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-[#4285F4] sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 text-[#FFFFFF]">
        {/* Logo for mobile */}
        <div className="md:hidden">
          <Image src={logowhite} alt="logo" />
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Language Selector for larger screens */}
        <div className="hidden md:flex items-center space-x-7">
          <button className="font-medium hover:text-blue-100 transition">
            EN
          </button>
          <Link
            href="/#contact"
            className="font-medium hover:text-blue-200 transition"
          >
            تواصل معنا
          </Link>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex items-center md:space-x-8 absolute md:static top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none`}
        >
          {/* Close Button for mobile */}
          {menuOpen && (
            <button
              className="absolute left-4 top-4"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="w-6 h-6 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          {/* Blue Logo for mobile view when menu is open */}
          {menuOpen && (
            <div className="absolute right-4 top-4">
              <Image src={logoBlue} alt="logo" />
            </div>
          )}

          {/* Menu Items */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 mt-10 md:mt-0 text-right w-full">
            <Link
              href="/#contact"
              className="block font-medium text-black md:text-white hover:text-blue-200 transition"
            >
              انضم الينا
            </Link>
            <Link
              href="/financing"
              className="block font-medium text-black md:text-white hover:text-blue-200 transition"
            >
              أسعار منتجات التمويل
            </Link>
            <Link
              href="#howitworks"
              className="block font-medium text-black md:text-white hover:text-blue-200 transition"
            >
              اطلب تمويل
            </Link>
            <Link
              href="#features"
              className="block font-medium text-black md:text-white hover:text-blue-200 transition"
            >
              ما يميزنا
            </Link>
            <Link
              href="/#services"
              className="block font-medium text-black md:text-white hover:text-blue-200 transition"
            >
              خدماتنا
            </Link>

            <Link
              href="/about"
              className="block font-medium text-black md:text-white hover:text-blue-200 transition"
            >
              عن مهلة
            </Link>
            <Link
              href="/home"
              className="block font-medium text-black md:text-white hover:text-blue-200 transition"
            >
              الرئيسية
            </Link>
            <div className="hidden md:block text-2xl">
              <Image src={logowhite} alt="logo" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
