import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useContext } from "react";
import { ShopContext } from "@/Context/ShopContext";

function TotalCalculator() {
  const { getTotalCartAmount } = useContext(ShopContext);
  return (
    <div>
      <div className="w-full max-w-5xl lg:max-w-6xl mx-auto p-6 mb-20  bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-8">Cart Totals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-20 lg:gap-x-32">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${getTotalCartAmount()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>Free</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${getTotalCartAmount()}</span>
              </div>
            </div>
            <Button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-6 text-sm">
              PROCEED TO CHECKOUT
            </Button>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                If you have a promo code, Enter it here
              </h3>
              <div className="flex space-x-2">
                <Input placeholder="promo code" className="flex-grow" />
                <Button
                  variant="default"
                  className="bg-black text-white hover:bg-gray-800 px-8"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalCalculator;
