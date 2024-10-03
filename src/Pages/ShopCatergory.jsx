import Section from "@/components/Section/Section";
import { ShopContext } from "@/Context/ShopContext";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import capitalizeFirstLetter from "@/Js/captializeWord";
import SortButton from "@/components/SortButton/SortButton";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

function ShopCatergory({ banner, category }) {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product.filter(
    (item) => item.category === category
  );

  const totalProducts = filteredProducts.length;

  // State to track whether to show all products
  const [showAll, setShowAll] = useState(false);

  // Function to toggle show all products
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
    if (showAll) {
      window.scrollTo({ top: 150, behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <div className="banner_img">
          <img src={banner} alt={`${category}_banner`} />
        </div>

        <Section
          data={all_product}
          title={`${capitalizeFirstLetter(category)} Collections`}
          category={category}
          limit={showAll ? totalProducts : 10}
        >
          <div className="flex justify-between items-center pb-10 ">
            <p className="self-end">
              <span className="font-semibold">
                Showing {showAll ? `1-${totalProducts}` : `1-10`}
              </span>{" "}
              out of {totalProducts} products
            </p>

            <div>
              <SortButton />
            </div>
          </div>
        </Section>
        <div className="flex flex-col items-center mt-16 mb-24 ">
          <Button
            size={"lg"}
            className="w-48 h-12 primary rounded-full"
            variant="outline"
            onClick={toggleShowAll}
          >
            {showAll ? "Show Less" : "Show All"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default ShopCatergory;
