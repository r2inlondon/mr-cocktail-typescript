const Hero = () => {
  return (
    <div className="relative h-72">
      <div
        id="hero-img"
        className=" h-full bg-[url('./assets/bg-hero.jpg')] bg-center "
      ></div>
      <div className="absolute inset-0 bg-slate-950 opacity-60"></div>
      <div
        id="hero-txt"
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center"
      >
        <h1 className="mb-10 text-2xl text-white">
          Check out the recipes and why not add your favorite cocktail !
        </h1>
        <button className="rounded-md bg-btn-color px-4 py-2 text-center font-medium text-white duration-300 hover:scale-110">
          Add New
        </button>
      </div>
    </div>
  );
};

export default Hero;
