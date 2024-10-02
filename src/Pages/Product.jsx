import { ShopContext } from "@/Context/ShopContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import ProductDisplay from "@/components/ProductDisplay/ProductDisplay";
import Breadcrumbs from "@/components/Breadcrumb/Breadcrumbs";
import ProductDescription from "@/components/ProductDescription/ProductDescription";
import Section from "@/components/Section/Section";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <ProductDescription />
      <div className="mb-16">
        <Section
          data={all_product}
          title={"Related Products"}
          category={product.category}
          limit={5}
          excludeId={product.id}
          className="mb-40"
        />
      </div>
    </div>
  );
}

export default Product;
