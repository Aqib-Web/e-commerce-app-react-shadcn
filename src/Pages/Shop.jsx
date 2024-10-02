import Hero from "@/components/Hero/Hero";
import data_product from "@/components/Assets/data";
import new_collections from "@/components/Assets/new_collections";
import Section from "@/components/Section/Section";
import Offer from "@/components/Offer/Offer";
import Newsletter from "@/components/Newsletter/Newsletter";

function Shop() {
  return (
    <>
      <Hero />
      <Section data={data_product} title={"Popular"} limit={5} />
      <Offer />
      <Section data={new_collections} title={"New Collections"} limit={5} />
      <Newsletter />
    </>
  );
}

export default Shop;
