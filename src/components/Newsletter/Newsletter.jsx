import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Offer = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 relative z-20 overflow-hidden md:p-20 md:px-28">
        <div className=" flex container mx-auto px-16 justify-center items-center p-16 bg-gray-800 rounded-lg text-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-2xl sm:text-4xl dark:text-white text-gray-100 font-bold">
              Subscribe to our Newsletter
            </h3>
            <p className="sm:text-md dark:text-white text-gray-400 p-4">
              Stay up to date and get exclusive discounts with your email.
            </p>
            <div className="flex space-x-2 pt-4 min-w-full">
              <Input
                type="email"
                placeholder="Email"
                className=" text-gray-100"
              />
              <Button
                type="submit"
                style={{
                  background: "linear-gradient(to right, #c0392b, #8e44ad)",
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
