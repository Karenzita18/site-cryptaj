
import Image from "next/image";
import Link from "next/link";

const FeedBanner = () => {

  return (
    <section className="pt-5 pb-10 relative overflow-hidden bg-slate-300 ">
        <div className="row relative">
          <div className="container relative">
            <p className="text-sm font-bold text-center mb-3 text-brand-150">
                Cryptaj
            </p>
            <h1 className="text-4xl font-bold text-center mb-3 -mt-2 text-brand-200">
			    Conheça nossos serviços
		    </h1>
            <div className="grid md:grid-cols-2 gap-8 md:max-w-7xl max-w-xs ">
              <div className="bg-gradient-to-br from-zinc-50/40 to-zinc-200/40 backdrop-blur-md p-8 border-x group border-brand-100/10 relative shadow-lg">
                <div className="flex flex-col justify-between relative h-full">
                  <div>
                    <h2 className="font-bold text-brand-100 text-2xl">
                      Criptas Funerárias
                    </h2>
                    <p className="font-medium text-zinc-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pretium augue, sed gravida dolor mollis eu.
                    </p>
                    <div className="flex flex-wrap sm:flex-row gap-2 -mt-7">
                      <div className={`mt-8 w-auto`}>
                        <Link
                          href="/criptas-funerarias"
                          className={`py-4 px-1 w-48 block text-white shadow-lg text-lg text-center font-bold bg-brand-200 hover:bg-brand-100 transition duration-500 `}
                        >
                          Saiba mais
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-50/40 to-zinc-200/40 backdrop-blur-md p-8 border-x group border-brand-100/10 relative shadow-lg">
                <div className="flex flex-col justify-between relative h-full">
                  <div>
                    <h2 className="font-bold text-brand-100 text-2xl">
                        Construção Casas
                    </h2>
                    <p className="font-medium text-zinc-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pretium augue, sed gravida dolor mollis eu.
                    </p>
                    <div className="flex flex-wrap sm:flex-row gap-2 -mt-7">
                      <div className={`mt-8 w-auto`}>
                        <Link
                          href="/construcao-casas"
                          className={`py-4 px-1 w-48 block text-white shadow-lg text-lg text-center font-bold bg-brand-200 hover:bg-brand-100 transition duration-500 `}
                        >
                          Saiba mais
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default FeedBanner;