"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaAngleDoubleRight,
  FaMapPin,
  FaClock,
  FaLinkedinIn,
} from "react-icons/fa";
//import { Link as Scroll } from "react-scroll";

const Footer = () => {
  const data = new Date(Date.now());
  return (
    <footer className={`bg-brand-100/70`}>
      <div className="row py-16 px-5">
        <div className="container">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4 md:col-span-1">
              <div className="max-w-[15rem] ">
                <img
                  src="/img/logo/logo-cryptaj.webp"
                  width={700}
                  height={204}
                  alt="Logo Footer"
                />
                <div className="flex gap-x-3 mt-4 md:place-content-center">
                  <a
                    href="https://www.facebook.com/unisalamericana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.linkedin.com/school/unisal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/unisalamericana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3 grid md:grid-cols-3 gap-5">
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Links Importantes</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Endereço</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <p className="text-white">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaMapPin />
                      </span>
                      Lorem Ipsum - Lorem Ipsum, São Paulo - SP, 00000-000
                    </p>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">
                  Horário de Funcionamento
                </h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <p className="text-white">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaClock />
                      </span>
                      Segunda à Sexta das 8h às 22h
                    </p>
                  </li>
                </ul>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-200">
        <div className="container flex flex-wrap place-content-center gap-1 py-3">
          <div>
            <p className="text-white text-sm">
              © {data.getFullYear()} Todos os direitos reservados.
            </p>
          </div>
          <div className="text-white flex gap-2 text-sm">
            Desenvolvido por
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-50 underline hover:text-brand-100 transition duration-500"
            >
              GoTiger
            </a>
          </div>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
