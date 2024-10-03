import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero/Hero";
import data_product from "@/components/Assets/data";
import new_collections from "@/components/Assets/new_collections";
import Section from "@/components/Section/Section";
import Offer from "@/components/Offer/Offer";
import Newsletter from "@/components/Newsletter/Newsletter";

function Shop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the "Popular" section when the fragment is "#popular-section"
    if (location.hash === "#popular-section") {
      const popularSection = document.getElementById("popular-section");
      if (popularSection) {
        popularSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Section
        data={data_product}
        title={"Popular"}
        limit={5}
        id="popular-section"
      />
      <Offer />
      <Section data={new_collections} title={"New Collections"} limit={5} />
      <Newsletter />
    </>
  );
}

export default Shop;
