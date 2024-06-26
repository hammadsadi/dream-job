import Shap from "../Shared/Shap/Shap";
import Btn from "../Shared/Btn/Btn";

const Hero = () => {
  return (
    <section className="my-12">
      <Shap>
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold ">
            Find your next <br /> Dream Job
          </h2>
          <form className="flex gap-2 max-w-sm md:max-w-lg mx-auto mt-3 md:mt-6">
            <input
              type="search"
              name="search"
              placeholder="Search Job"
              id=""
              className="w-full px-4 text-slate-50 focus:outline-none border border-gray-400/50 bg-transparent focus:border "
            />
            <Btn btnLabel={"Search"} />
          </form>
        </div>
      </Shap>
    </section>
  );
};

export default Hero;
