"use client";

import { useInView } from "react-intersection-observer";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import Link from "next/link";

const FeedHistoria = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section>
        <div className="row">
          <div className="container flex flex-col md:flex-row gap-8 md:grid md:grid-cols-1 lg:flex">
            <div className="">
              <img
                src="https://via.placeholder.com/800x1000"
                alt="Machpela Institucional"
                className="rounded-md shadow-lg -my-5"
              />
            </div>
            <div>
              <div className="flex flex-col py-3 mr-3">
                <h1 className="font-bold text-5xl text-brand-200 leading-none">
                  Lorem ipsum
                </h1>
              </div>
              <div className="mt-2 text-lg leading-snug font-medium flex flex-col gap-y-3">
                <p className="text-black">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis eaque natus suscipit quidem quisquam. Nesciunt,
                  itaque id. Ipsa reiciendis nesciunt recusandae, aliquam
                  consequatur voluptas praesentium et commodi voluptatibus
                  labore unde.
                </p>
                <p className="text-black">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis eaque natus suscipit quidem quisquam. Nesciunt,
                  itaque id. Ipsa reiciendis nesciunt recusandae, aliquam
                  consequatur voluptas praesentium et commodi voluptatibus
                  labore unde.
                </p>
                <p className="text-black">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veritatis eaque natus suscipit quidem quisquam. Nesciunt,
                  itaque id.
                </p>
                <div className="flex flex-wrap sm:flex-row gap-2 -mt-7">
                  <div className={`mt-8 w-auto`}>
                    <Link
                      href="/quem-somos"
                      className={`py-4 px-5 w-48 block text-white shadow-lg text-lg text-center font-bold bg-brand-200 hover:bg-brand-100 transition duration-500 `}
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default FeedHistoria;
