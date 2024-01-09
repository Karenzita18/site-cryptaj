import FeedContato from "./FeedContato";

const FeedForm = () => {
    return (
        <div className=" sm:grid sm:grid-cols-2 relative overflow-hidden">
        <div className="relative overflow-hidden h-60 sm:h-auto">
          <img
            src="https://via.placeholder.com/1000x750"
            alt="Loteamentos Machpela"
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="z-10  p-8 md:p-20">
            <div className="max-w-xl mr-auto">
              <p className="text-sm font-bold text-center mb-3 text-brand-150">
                Cryptaj
              </p>
              <h1 className="text-2xl font-bold text-center mb-3 -mt-2 text-brand-200">
                Entre em contato conosco.
              </h1>
              <FeedContato/>
            </div>
        </div>
      </div>
    );
};
  
  export default FeedForm;
  