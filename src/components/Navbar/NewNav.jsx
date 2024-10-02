import { ShoppingCart, Menu, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useContext, useState } from "react";
import { ShopContext } from "@/Context/ShopContext";

export function NewNav() {
  const [menu, setMenu] = useState("shop");
  const [sheetOpen, setSheetOpen] = useState(false);

  const { getTotalCartItems } = useContext(ShopContext);

  const navbarLinks = [
    {
      id: 1,
      href: "/",
      label: "Shop",
    },
    {
      id: 2,
      href: "/men",
      label: "Men",
    },
    {
      id: 3,
      href: "/women",
      label: "Women",
    },
    {
      id: 4,
      href: "/kids",
      label: "Kids",
    },
  ];

  return (
    // <div className="flex min-h-screen w-full flex-col">
    // </div>
    <header className="sticky top-0 flex h-20 items-center gap-4 bg-white px-4 lg:px-40 z-40">
      <div className="hidden md:block flex md:w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold md:text-base"
        >
          <Store className="h-6 w-6" />
          <span className="px-2 text-lg">E-Store</span>
        </Link>
      </div>

      <nav className="hidden flex-col gap-6 text-6xl font-medium md:flex md:flex-row md:items-center md:gap-10 md:text-sm lg:gap-16 justify-between">
        {navbarLinks.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            onClick={() => setMenu(item.label)}
          >
            <Button variant={menu === item.label ? "secondary" : "ghost"}>
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <a className="sr-only">Toggle navigation menu</a>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={() => setSheetOpen(false)}
            >
              <Store className="h-6 w-6" />
              <span className="px-2">E-Store</span>
            </Link>

            {navbarLinks.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="text-gray-500 hover:text-gray-950"
                onClick={() => setSheetOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="block md:hidden lg:hidden flex md:w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold md:text-base"
        >
          <Store className="h-6 w-6" />
          <span className="px-2 text-lg whitespace-nowrap">E-Store</span>
        </Link>
      </div>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end">
        <Link to="/login">
          <Button className="rounded-full">Login</Button>
        </Link>
        <Link to="/cart" className="relative">
          <Button variant="ghost" className="rounded-full" size="icon">
            <ShoppingCart className="h-4 w-4 " />
            <div className="absolute -top-0 -right-0 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
              {getTotalCartItems()}
            </div>
          </Button>
        </Link>
      </div>
    </header>
  );
}
