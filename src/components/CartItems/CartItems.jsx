import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, ShoppingCart, X } from "lucide-react";
import { useContext } from "react";
import { ShopContext } from "@/Context/ShopContext";
import TotalCalculator from "./TotalCalculator";
import { Link } from "react-router-dom";

function CartItems() {
  const {
    all_product,
    addToCart,
    cartItems,
    subtractFromCart,
    removeFromCart,
    getTotalCartItems,
  } = useContext(ShopContext);
  return (
    <>
      <div className="p-6 lg:p-16 xl:px-48">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Your Cart</CardTitle>
            <CardDescription>
              Manage your cart and process to checkout.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {getTotalCartItems() > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className=" w-[100px] sm:table-cell">
                      <span>Products</span>
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className=" md:table-cell text-center">
                      Quanity
                    </TableHead>
                    <TableHead className=" md:table-cell text-center">
                      Total
                    </TableHead>
                    <TableHead className=" md:table-cell text-center">
                      Remove
                    </TableHead>
                    {/* <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                      return (
                        <TableRow key={e.id}>
                          <TableCell className=" sm:table-cell">
                            <img
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src={e.image}
                              width="64"
                            />
                          </TableCell>
                          <TableCell>{e.name}</TableCell>
                          <TableCell>${e.new_price}</TableCell>

                          <TableCell className=" md:table-cell text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6 shrink-0"
                                onClick={() => subtractFromCart(e.id)}
                                disabled={cartItems[e.id] <= 1}
                              >
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                              <div className="flex text-center">
                                <div>{cartItems[e.id]}</div>
                              </div>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6 shrink-0"
                                onClick={() => addToCart([e.id])}
                                disabled={cartItems[e.id] >= 12}
                              >
                                <ChevronUp className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className=" md:table-cell text-center">
                            ${e.new_price * cartItems[e.id]}
                          </TableCell>
                          <TableCell className="text-center">
                            <Button
                              variant="destructive"
                              size="icon"
                              className="h-8 w-8 shrink-0"
                              onClick={() => removeFromCart(e.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    }
                    return null;
                  })}
                </TableBody>
              </Table>
            ) : (
              <>
                {/* <Separator/> */}
                <div className="flex flex-col items-center space-y-4 mt-2 ">
                  <h3 className="text-md font-medium text-gray-500">
                    Your Cart is Empty
                  </h3>
                  <ShoppingCart className="w-10 h-10 text-gray-400" />
                  <div className="flex justify-center space-x-4">
                    <Link to="/#popular-section">
                      <Button
                        className=" rounded-full mt-2"
                        style={{
                          background:
                            "linear-gradient(to right, #c0392b, #8e44ad)",
                        }}
                      >
                        Start Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
      {getTotalCartItems() > 0 && <TotalCalculator />}
    </>
  );
}

export default CartItems;

// import { Badge } from "@/components/ui/badge";
