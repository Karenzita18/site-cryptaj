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
  FaRegEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const data = new Date(Date.now());
  return (
    <footer className={`bg-brand-200/60`}>
      <div className="row py-8 px-5">
        <div className="container">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4 md:col-span-1">
              <div className="max-w-[15rem] ">
                <Link
                  href="/"
                >
                  <Image
                    src="/img/cryptaj-footer.png"
                    width={189}
                    height={189}
                    alt="Logo Footer" 
                  />
                </Link>
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
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/quem-somos">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Quem Somos
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/criptas-funerarias">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Criptas Funerárias
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/construcao-casas">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Construção Casas
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/blog">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Blog
                    </Link>
                  </li>
                  <li className="hover:text-brand-50 transition duration-500">
                    <Link href="/contato">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaAngleDoubleRight />
                      </span>
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Contato</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <a
                      href="mailto:contato@cryptaj.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaRegEnvelope/>
                      </span>
                      contato@cryptaj.com
                    </a>
                  </li>
                </ul>
                <h2 className="font-bold mb-3 mt-4 text-xl">
                  Redes Sociais
                </h2>
                <div className="flex gap-x-3 mt-2 ">
                  <a
                    href="https://www.facebook.com/cryptajoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/cryptajoficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-500"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div className="text-white">
                <h2 className="font-bold mb-3 text-xl">Endereço</h2>
                <ul className="flex gap-y-2 flex-col">
                  <li className="hover:text-brand-50 transition duration-500">
                    <p className="text-white">
                      <span className="inline-block -mb-[2px] mr-1">
                        <FaMapPin />
                      </span>
                      R. Lorem, XXX - Lorem Ispsum, São Paulo - SP
                    </p>
                  </li>
                </ul>
                <h2 className="font-bold mb-3 mt-4 text-xl">
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
          <div className="text-white flex gap-1 text-sm">
            Desenvolvido por 
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-brand-300 transition duration-500"
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
