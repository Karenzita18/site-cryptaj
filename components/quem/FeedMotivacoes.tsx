"use client";

import { useInView } from "react-intersection-observer";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import Link from "next/link";
import { BsCheckAll } from "react-icons/bs";

const FeedMotivacoes = () => {
  const { ref, inView, entry } = useInView();

  return (
    <div className="sm:grid sm:grid-cols-2 bg-slate-300 relative overflow-hidden">
        <div className="relative overflow-hidden h-60 sm:h-auto">
          <img
            src="https://via.placeholder.com/1000x750"
            alt="Loteamentos Machpela"
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="z-10 bg-brand-200/80 p-8 md:p-20">
            <div className="max-w-xl mr-auto">
                <span className="font-bold text-lg text-white leading-none">
                    Cryptaj
                </span>
                <h1 className="font-bold text-4xl sm:text-3xl text-white leading-none">
                    Conheça nossas motivações
                </h1>
                <div className="flex flex-col gap-y-3 mt-3">
                    <div className="flex gap-3">
                        <div className="text-brand-100 text-2xl flex place-content-center items-start">
                        <BsCheckAll />
                        </div>
                        <p className="text-white md:text-justify text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pretium augue, sed gravida dolor mollis eu.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <div className="text-brand-100 text-2xl flex place-content-center items-start">
                        <BsCheckAll />
                        </div>
                        <p className="text-white md:text-justify text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pretium augue, sed gravida dolor mollis eu.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <div className="text-brand-100 text-2xl flex place-content-center items-start">
                        <BsCheckAll />
                        </div>
                        <p className="text-white md:text-justify text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pretium augue, sed gravida dolor mollis eu.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <div className="text-brand-100 text-2xl flex place-content-center items-start">
                        <BsCheckAll />
                        </div>
                        <p className="text-white md:text-justify text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pretium augue, sed gravida dolor mollis eu.    
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <div className="text-brand-100 text-2xl flex place-content-center items-start">
                        <BsCheckAll />
                        </div>
                        <p className="text-white md:text-justify text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pretium augue, sed gravida dolor mollis eu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FeedMotivacoes;