import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import exclusive_image from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <>
<div className="flex flex-col bg-white dark:bg-gray-800 relative z-20 overflow-hidden py-8">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 max-w-6xl flex flex-col md:flex-row justify-between items-center rounded-lg bg-gray-800">
    <div className="text-center md:text-left lg:w-2/3 flex flex-col gap-4 py-6 md:py-8">
      <h1 className="font-bebas-neue text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white text-gray-100">
        Exclusive Offers For You
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-300">
        Discover amazing deals and discounts on our latest collection. Don't miss out!
      </p>
      <div className="mt-4">
        <Link to="/login">
          <Button
            size={"md"}
            className="px-6 py-2 sm:px-8 sm:py-3 primary"
            style={{
              background: "linear-gradient(to right, #c0392b, #8e44ad)",
            }}
          >
            Check Now
          </Button>
        </Link>
      </div>
    </div>
    <div className="hidden md:flex justify-center lg:w-1/3 mt-6 md:mt-0">
      <img
        src={exclusive_image}
        className="max-w-[150px] sm:max-w-[200px] md:max-w-[250px] w-full"
        alt="Exclusive Offer"
      />
    </div>
  </div>
</div>

    </>
  );
};

export default Offer;
