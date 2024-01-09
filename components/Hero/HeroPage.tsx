import React from "react";

interface PropsHero {
  title: string;
  subtitle?: string;
  imgSrc?: string;
}

const HeroPage: React.FC<PropsHero> = ({ title, subtitle, imgSrc }) => {
  return (
    <section
      className="pt-10 md:pt-28 pb-0 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, #3d3d3d66,#00000008 ),url(${imgSrc})`,
      }}
    >
      <div className="row">
        <div className="container relative">
          <h1
            className={
              imgSrc
                ? "text-3xl md:text-5xl font-black text-white max-w-3xl mb-4"
                : "text-3xl md:text-5xl font-black text-brand-400 max-w-3xl"
            }
          >
            {title}
          </h1>
          <p className="max-w-md pb-10 md:pb-28 text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
