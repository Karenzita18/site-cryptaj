"use client";

import { useInView } from "react-intersection-observer";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import Link from "next/link";

const FeedDiferencial = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section ref={ref} className="relative overflow-hidden bg-faiz-300/30">
      <div className="row relative">
        <div className="container">
            <p className="text-sm font-bold text-center mb-3 text-brand-150">
                Cryptaj
            </p>
            <h1 className="text-4xl font-bold text-center mb-3 -mt-2 text-brand-200">
			    Conheça nossos Diferenciais
		    </h1>
            <div className="grid grid-cols-1 sm:grid-cols-4 place-content-between gap-8">
              <div className="bg-brand-200 hover:bg-brand-300 p-6 max-w-sm w-full text-white relative">
                <div className="relative">
                    <p className="text-lg leading-snug text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pretium augue, sed gravida dolor mollis eu.
                    </p>
                </div>
              </div>
              <div className="bg-brand-200 hover:bg-brand-300 p-6 max-w-sm w-full text-white relative">
                <div className="relative">
                    <p className="text-lg leading-snug text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pretium augue, sed gravida dolor mollis eu.
                    </p>
                </div>
              </div>
              <div className="bg-brand-200 hover:bg-brand-300 p-6 max-w-sm w-full text-white relative">
                <div className="relative">
                    <p className="text-lg leading-snug text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pretium augue, sed gravida dolor mollis eu.
                    </p>
                </div>
              </div>
              <div className="bg-brand-200 hover:bg-brand-300 p-6 max-w-sm w-full text-white relative">
                <div className="relative">
                    <p className="text-lg leading-snug text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pretium augue, sed gravida dolor mollis eu.
                    </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeedDiferencial;
