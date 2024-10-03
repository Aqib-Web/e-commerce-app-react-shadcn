import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useContext } from "react";
import { ShopContext } from "@/Context/ShopContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const showToast = () =>
    toast("✅ Item Added!", {
      description: "Check your cart for details.",
      action: {
        label: "View Cart",
        onClick: () => navigate("/cart"),
      },
    });

  return (
    <div className="grid md:grid-cols-2 gap-8 px-4 md:px-6 py-8 mb-10 max-w-6xl mx-auto">
      <div className="grid gap-4">
        <img
          src={product.image}
          width={350}
          alt="Product Image"
          className="object-cover aspect-[3/4]"
        />
      </div>
      <div className="grid gap-4 justify-items-start items-start">
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="grid gap-1 mt-2">
            <div className="text-4xl font-bold">${product.new_price}</div>
            <div className="text-lg font-semibold text-gray-500 line-through">
              ${product.old_price}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-gray-100 stroke-gray-600" />
              <Star className="w-5 h-5 fill-gray-100 stroke-gray-600" />
            </div>
            <span className="text-sm text-gray-600">(4.3)</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="bg-gray-100/40 px-2 py-1 rounded-md text-xs font-medium text-gray-600">
              T-Shirts
            </div>
            <div className="bg-gray-100/40 px-2 py-1 rounded-md text-xs font-medium text-gray-600">
              Organic
            </div>
            <div className="bg-gray-100/40 px-2 py-1 rounded-md text-xs font-medium text-gray-600">
              Cotton
            </div>
          </div>
        </div>
        <div className="prose text-muted-foreground">
          <p>
            This organic cotton t-shirt is soft, breathable, and perfect for
            everyday wear. The classic design and high-quality materials ensure
            a comfortable and stylish look.
          </p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="size" className="text-base">
            Size
          </Label>
          <ToggleGroup
            type="single"
            defaultValue="m"
            className="flex items-center gap-4"
          >
            <ToggleGroupItem
              value="s"
              className="border cursor-pointer rounded-md p-4 flex items-center gap-2"
            >
              S
            </ToggleGroupItem>
            <ToggleGroupItem
              value="m"
              className="border cursor-pointer rounded-md p-4 flex items-center gap-2"
            >
              M
            </ToggleGroupItem>
            <ToggleGroupItem
              value="l"
              className="border cursor-pointer rounded-md p-4 flex items-center gap-2"
            >
              L
            </ToggleGroupItem>
            <ToggleGroupItem
              value="xl"
              className="border cursor-pointer rounded-md p-4 flex items-center gap-2"
            >
              XL
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <Button
          size="lg"
          className="w-full"
          onClick={() => {
            addToCart(product.id);
            showToast();
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDisplay;
