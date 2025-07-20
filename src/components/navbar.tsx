"use client";
import { useState } from "react";
import styles from "@/styles";
import Link from "next/link";
import Image from "next/image";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`${styles.paddingX} ${styles.flexCenter} bg-[#EBF5FF]`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-6 justify-between items-center navbar">
          <div className="">
            <Link href="/">
              <p className="font-bold md:text-2xl text-lg text-[#2E91FF]">
                Strat<span className="text-[#F4B400]">Digital</span>
              </p>
            </Link>
          </div>

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            <Link
              href="/"
              className="font-semibold text-base mr-10 cursor-pointer text-[#213053]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-semibold text-base mr-10 cursor-pointer text-[#213053]"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="font-semibold text-base mr-10 cursor-pointer text-[#213053]"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-base cursor-pointer text-[#213053]"
            >
              Contact Us
            </Link>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-[24px] h-[24px] object-contain color-[#000]"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div
              className={`${
                toggle ? "flex" : "hidden"
              } bg-[#fff] shadow-2xl p-6 absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col justify-end flex-1">
                <Link
                  href="/"
                  className="font-normal text-base mb-2 cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="font-normal mb-2 text-base cursor-pointer"
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="font-normal mb-2 text-base cursor-pointer"
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="font-normal text-base cursor-pointer"
                >
                  Contact Us
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
