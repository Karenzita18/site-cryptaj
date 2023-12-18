const FeedHospitalarPage = ({
  title = "Cursos",
  desc = "Unisal | 2023",
}) => {
  return (
    <section className="bg-gradient-to-r from-brand-100 to-brand-150 relative">
      <div className="row relative">
        <div className="container">
          <h1 className="font-bold text-white text-xl sm:text-2xl lg:text-3xl">
            {title}
          </h1>
          <p className="text-lg text-zinc-100 font-medium">{desc}</p>
        </div>
      </div>
      <div className="absolute w-11/12 h-2 bottom-4 rounded-r-md left-0 bg-brand-200 z-10"></div>
      <div className="absolute w-full h-[10px] bottom-0 left-0 bg-brand-200 z-10"></div>
    </section>
  );
};

export default FeedHospitalarPage;
