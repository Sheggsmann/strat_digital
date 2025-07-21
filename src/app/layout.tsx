import type { Metadata } from "next";
import { Lato, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import styles from "@/styles";
import Link from "next/link";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Strat Digital",
  description: "Providing smart digital solutions for smarter businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lato.variable} ${openSans.variable}`}
    >
      <body className={`${montserrat.className}`}>
        <Navbar />

        <main>{children}</main>
        {/* <main className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
          {children}
        </main> */}
        <footer className="bg-gray-100 p-4 border-t py-18">
          <div
            className={`${styles.boxWidth} flex flex-col md:flex-row gap-18 mx-auto`}
          >
            <div className="">
              <p className="font-bold md:text-2xl text-lg text-[#2E91FF]">
                Strat<span className="text-[#F4B400]">Digital</span>
              </p>
              <p className="mt-4">
                Smart digital solutions for smarter businesses.
              </p>

              <p className="mt-20">
                © {new Date().getFullYear()} Strat Digital. All rights reserved.
              </p>
            </div>

            <div className="flex flex-1">
              <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3">
                <div>
                  <h3 className="font-semibold text-xl">Support</h3>
                  <ul className="mt-4">
                    <li className="mb-2">
                      <Link href="/privacy-policy"> Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms-and-conditions">
                        Terms and Conditions
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Company</h3>
                  <ul className="mt-4">
                    <li className="mb-2">
                      <Link href="#about">About Us</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="#contact">Contact Us</Link>
                    </li>
                    <li className="mb-2">
                      <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/billing-and-refund-policy">
                        Billing and refund policy
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Address</h3>
                  <p className="mb-4">
                    No 1B, Adeola Raji Avenue, Atunrase Estate, Gbagada, Lagos
                    State, Nigeria.
                  </p>
                  <p className="mb-2">
                    📞 Phone:{" "}
                    <Link href="tel:+2348129664233">+234 8129664233</Link>
                  </p>
                  <p>✉️ Email: stratdigital@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
