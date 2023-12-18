"use client";

import React, { Fragment, useEffect, useState } from "react";
import {
  FaRegEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaLinkedinIn,
  FaAngleDown,
  FaChevronDown,
} from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/img/logo-unisal.webp";
import { usePathname } from "next/navigation";
import { Link as Scroll } from "react-scroll";
import navigation from "./navigation";

declare const window: any;


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const data = {
    logoAlt: "CrypTaj",
    redeSocial: {
      facebook: "/",
      linkedIn: "/",
      instagram: "/",
      whatsapp:
        "/",
    },
    contato: {
      phone: "(19) xxxxx-xxxx",
    },
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <header>
        <div className="bg-brand-200 md:px-5 z-20 font-light border-b border-white/20 relative text-white ">
          <div className="max-w-7xl mx-auto flex place-content-between">
            <div className="flex place-items-center gap-x-5">
              <a
                href="mailto:contato@cryptaj.com"
                className="text-sm hidden sm:block"
              >
                <span className="inline-block text-lg -mb-1 mx-2">
                  <FaRegEnvelope></FaRegEnvelope>
                </span>
                contato@cryptaj.com
              </a>
            </div>

            <div className="flex">
              <a
                href={data.redeSocial.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaFacebookF />
              </a>
              <a
                href={data.redeSocial.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaInstagram />
              </a>
              <a
                href={data.redeSocial.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <nav
          className={
            navbar
              ? "bg-white shadow-lg fixed w-full z-50 px-5 top-0 animate-slideInDown"
              : "bg-white shadow-lg fixed w-full z-50 px-5 "
          }
        >
          <div className="row ">
            <div className="flex items-center h-20 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex justify-center items-center flex-shrink-0 max-w-[240px] md:max-w-[300px]">
                  <Link
                    href="/"
                    className="cursor-pointer max-w-[8rem] md:max-w-[12rem]"
                  >
                    <img
                      src="https://via.placeholder.com/600x189"
                      width={600}
                      height={189}
                      className="cursor-pointer"
                      title={data.logoAlt}
                      alt={data.logoAlt}
                    />
                  </Link>
                </div>
                <div className="hidden lg:block w-full">
                  <div className=" flex items-center space-x-4 font-medium place-content-end">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={`${item.href}`}
                        className="cursor-pointer tracking-wider px-3 py-7 font-medium hover:text-brand-100 text-brand-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" flex lg:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className=" inline-flex items-center justify-center p-2 rounded-md text-brand-100 bg-brand-400 outline-none shadow-md"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="lg:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="bg-zinc-100 -mx-5 px-2 space-y-1 sm:px-3 py-10"
                >
                  <div>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer text-brand-100 block px-3 py-2 rounded-md text-base font-medium tracking-wider"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </header>
    </>
  );
}
