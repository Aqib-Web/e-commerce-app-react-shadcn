import { Store, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex  justify-center bg-muted py-12 px-20 bg-gray-100">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2">
            <Store className="h-6 w-6" />
            <span className="font-bold text-lg">E-Store</span>
          </a>
          <p className="text-muted-foreground">
            Your go-to destination for bold, stylish, and trend-setting outfits.
            We’re here to make sure you look and feel your best—every day, every
            occasion.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <div className="grid gap-2 text-muted-foreground">
            <div>
              <span className="font-medium">Phone:</span> +92 312-3456789
            </div>
            <div>
              <span className="font-medium">Email:</span>{" "}
              <a href="#" className="hover:underline">
                info@e-store.com
              </a>
            </div>
            <div>
              <span className="font-medium">Address:</span> 123 Main St, Karachi
              Pakistan
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
