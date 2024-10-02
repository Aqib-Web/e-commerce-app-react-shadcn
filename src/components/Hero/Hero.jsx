import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <>
      <div
        className="flex flex-col min-h-[calc(100vh-5rem)] justify-center items-center lg:items-start relative z-20 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 2xl:px-32 flex flex-col lg:flex-row justify-between items-center py-12 lg:space-x-12">
          <div className="flex flex-col z-20 text-center lg:text-left lg:w-2/5">
            <span className="w-16 h-2 bg-gray-800 dark:bg-white mx-auto lg:mx-0 mb-6"></span>

            <h2 className="text-xl sm:text-2xl text-gray-700 mb-4">
              New Arrivals
            </h2>
            <h1 className="font-bebas-neue uppercase text-5xl sm:text-6xl lg:text-7xl font-black leading-tight dark:text-white text-gray-800 mb-4">
              Biggest Sale
              <span className="text-4xl sm:text-5xl lg:text-6xl block">
                is here
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white mb-8">
              Elevate your style with our curated collection of fashion-forward
              essentials.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link to="/">
                <Button size={"lg"} className="w-48 h-12 primary">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end lg:w-3/5 mt-8 lg:mt-0">
            <img
              src={hero_image}
              className="max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] w-full"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
