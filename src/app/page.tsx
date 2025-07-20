"use client";
import styles from "@/styles";
import woman from "../assets/woman.png";
import arrowRight from "../assets/arrow-right.svg";
import innovateIcon from "../assets/calculator.svg";
import executeIcon from "../assets/execute.svg";
import rocketSvg from "../assets/rocket.svg";
import growIcon from "../assets/grow.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Alert } from "@/components/alert";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      {/* HERO SECTION */}
      <div className={`bg-[#EBF5FF] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
          >
            <div
              className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="font-semibold sm:text-[60px] text-[30px] text-[#213053]">
                  Smart Digital Solutions for a Smarter Business
                </h1>
              </div>
              <p
                className={`${styles.paragraph} text-[#213053] max-w-[470px] mt-5`}
              >
                We empower businesses with the tools they need to scale
                digitally from fintech integration to digital branding and
                payment systems.
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 mt-8">
                <Link href="/pricing">
                  <div className="bg-[#F4B400] flex flex-row items-center justify-center py-4 px-6 rounded-md cursor-pointer hover:bg-[#F4B400]/90 transition duration-300 ease-in-out">
                    <p className="flex-row items-center font-bold text-white mr-4">
                      Get Started
                    </p>
                    <Image
                      src={arrowRight}
                      alt="arrow-right"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                </Link>

                <div className="flex flex-row items-center justify-center cursor-pointer">
                  <p className="underline text-gray-600">Book a Demo</p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={woman}
                alt="woman"
                className="w-[100%] h-[100%] relative mt-10 md:mt-0"
              />
            </div>
          </section>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className={`${styles.boxWidth} mx-auto bg-white py-4 md:py-12`}>
        <section id="about" className={`${styles.paddingY} ${styles.paddingX}`}>
          <div className="flex flex-col items-center justify-center">
            <h2 className={styles.heading2}>About Us</h2>
            <p className={`${styles.paragraph} text-center px-4 mt-8 mb-4`}>
              Strat Digital is a tech-forward digital agency and product company
              offering tailored digital services for startups, SMEs and
              enterprises across Africa. We blend strategy, technology, and
              creativity to build solutions that power growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8 px-4">
            <div className="border border-gray-200 p-5 rounded-md shadow-xs">
              <Image
                src={innovateIcon}
                alt="innovate"
                className="w-[40px] h-[40px]"
              />
              <h3 className="my-6 font-semibold text-2xl text-[#213053]">
                Innovate
              </h3>
              <p className="leading-7">
                We craft forward-thinking digital solutions that combine
                creativity and technology—helping businesses stay ahead in
                fintech, branding, and beyond.
              </p>
            </div>
            <div className="border border-gray-200 p-5 rounded-md shadow-xs">
              <Image
                src={executeIcon}
                alt="execute"
                className="w-[40px] h-[40px]"
              />
              <h3 className="my-6 font-semibold text-2xl text-[#213053]">
                Execute
              </h3>
              <p className="leading-7">
                From strategy to launch, we deliver seamless digital products
                that are fast, reliable, and built for real-world performance.
              </p>
            </div>
            <div className="border border-gray-200 p-5 rounded-md shadow-xs">
              <Image src={growIcon} alt="grow" className="w-[40px] h-[40px]" />
              <h3 className="my-6 font-semibold text-2xl text-[#213053]">
                Grow
              </h3>
              <p className="leading-7">
                We equip businesses to scale through smart tools, strong
                branding, and ongoing digital support—so growth isn’t just
                possible, it’s predictable.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* PRODUCTS SECTION */}
      <div className={`bg-[#F9FAFB] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <section
            id="products"
            className={`${styles.paddingY} ${styles.paddingX}`}
          >
            <div className="flex flex-col mb-12">
              <h2 className={`${styles.heading2} text-center`}>Our Products</h2>
            </div>

            <div className="flex flex-col gap-4 mt-8 px-4">
              <div className="flex flex-row flex-wrap md:flex-nowrap mb-12">
                <div className="w-[100%] md:w-[300px] flex flex-row items-center gap-2 md:gap-12">
                  <h3 className="font-semibold text-[#2E91FF] text-base">
                    01.
                  </h3>
                  <h2 className="font-semibold md:text-xl text-lg text-[#1D263A]">
                    StratPay
                  </h2>
                </div>
                <div className="mt-4 md:mt-auto flex-1 ">
                  <p>A modular payment gateway for seamless transactions</p>{" "}
                </div>
                <div className="hidden md:flex flex-row items-end">
                  <div className="w-[20px] h-[3px] mr-4 bg-[#F4B400]"></div>
                  <Link href="/#" className="text-xs font-semibold">
                    LEARN MORE
                  </Link>
                </div>
              </div>

              <div className="flex flex-row flex-wrap md:flex-nowrap mb-12">
                <div className="w-[100%] md:w-[300px] flex flex-row items-center gap-2 md:gap-12">
                  <h3 className="font-semibold text-[#2E91FF] text-base">
                    02.
                  </h3>
                  <h2 className="font-semibold md:text-xl text-lg text-[#1D263A]">
                    StratWallet
                  </h2>
                </div>
                <div className="mt-4 md:mt-auto flex-1 ">
                  <p>White-label wallet infrastructure</p>
                </div>
                <div className="hidden md:flex flex-row items-end">
                  <div className="w-[20px] h-[3px] mr-4 bg-[#F4B400]"></div>
                  <Link href="/#" className="text-xs font-semibold">
                    LEARN MORE
                  </Link>
                </div>
              </div>

              <div className="flex flex-row flex-wrap md:flex-nowrap mb-12">
                <div className="w-[100%] md:w-[300px] flex flex-row items-center gap-2 md:gap-12">
                  <h3 className="font-semibold text-[#2E91FF] text-base">
                    03.
                  </h3>
                  <h2 className="font-semibold md:text-xl text-lg text-[#1D263A]">
                    StratCheckout
                  </h2>
                </div>
                <div className="mt-4 md:mt-auto flex-1 ">
                  <p>Hosted checkout pages for easier customer conversion</p>
                </div>
                <div className="hidden md:flex flex-row items-end">
                  <div className="w-[20px] h-[3px] mr-4 bg-[#F4B400]"></div>
                  <Link href="/#" className="text-xs font-semibold">
                    LEARN MORE
                  </Link>
                </div>
              </div>

              <div className="flex flex-row flex-wrap md:flex-nowrap mb-12">
                <div className="w-[100%] md:w-[300px] flex flex-row items-center gap-2 md:gap-12">
                  <h3 className="font-semibold text-[#2E91FF] text-base">
                    04.
                  </h3>
                  <h2 className="font-semibold md:text-xl text-lg text-[#1D263A]">
                    StratMedia
                  </h2>
                </div>
                <div className="mt-4 md:mt-auto flex-1 ">
                  <p>In-house creative and digital advertising support</p>
                </div>
                <div className="hidden md:flex flex-row items-end">
                  <div className="w-[20px] h-[3px] mr-4 bg-[#F4B400]"></div>
                  <Link href="/#" className="text-xs font-semibold">
                    LEARN MORE
                  </Link>
                </div>
              </div>

              <div className="flex flex-row flex-wrap md:flex-nowrap mb-12">
                <div className="w-[100%] md:w-[300px] flex flex-row items-center gap-2 md:gap-12">
                  <h3 className="font-semibold text-[#2E91FF] text-base">
                    05.
                  </h3>
                  <h2 className="font-semibold md:text-xl text-lg text-[#1D263A]">
                    StratAcademy
                  </h2>
                </div>
                <div className="mt-4 md:mt-auto flex-1 ">
                  <p>
                    Training and capacity building for digital and Fintech
                    professionals
                  </p>
                </div>
                <div className="hidden md:flex flex-row items-end">
                  <div className="w-[20px] h-[3px] mr-4 bg-[#F4B400]"></div>
                  <Link href="/#" className="text-xs font-semibold">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Section */}
      <div
        className={`${styles.flexStart} bg-[#213053] py-4 md:py-12 relative`}
      >
        <Image
          src={rocketSvg}
          alt="rocket img"
          className="absolute hidden md:block  md:bottom-12 right-2/12 animate-bounce"
        />
        <div className={`${styles.boxWidth} mx-auto`}>
          <section
            id="contact"
            className={`${styles.paddingY} ${styles.paddingX}`}
          >
            <div className="mb-12">
              <h2 className={`${styles.heading2} text-white text-center`}>
                Contact US
              </h2>
              <p></p>
            </div>
            <form
              name="contact"
              className="max-w-2xl mx-auto"
              onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                try {
                  const formData = new FormData(event.currentTarget);
                  const formDataObj = formData;
                  const res = await fetch("/__forms.html", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams(
                      formDataObj as unknown as Record<string, string>
                    ).toString(),
                  });

                  if (res.status === 200) {
                    setStatus("ok");
                  } else {
                    setStatus("error");
                    setError(`${res.status} ${res.statusText}`);
                  }
                } catch (e) {
                  setStatus("error");
                  setError(`${e}`);
                } finally {
                  setTimeout(() => {
                    setStatus(null);
                    setError(null);
                  }, 5000);
                }
              }}
            >
              <input type="hidden" name="contact" value="contact" />
              <div className="mb-8">
                <label htmlFor="name" className="text-white font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="bg-white p-4 rounded w-full mt-4 outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="name" className="text-white font-semibold">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="bg-white p-4 rounded w-full mt-4 outline-none"
                  required
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="name" className="text-white font-semibold">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  id="message"
                  name="message"
                  required
                  className="bg-white p-4 rounded w-full mt-4 outline-none"
                  placeholder="Enter your message"
                />
              </div>
              <input
                type="submit"
                value="Send a Message"
                className="w-full p-4 bg-[#F4B400] mt-12 rounded-md text-white font-semibold cursor-pointer hover:bg-[#F4B400]/90 transition duration-300 ease-in-out"
              />
              {status === "ok" && <Alert type="success">Submitted</Alert>}
              {status === "error" && <Alert type="error">{error}</Alert>}
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
