import { useEffect, useState } from "react";
import Item from "../Item/Item";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

const Section = ({ data, title, category, limit, excludeId, children, id }) => {
  const [shuffledData, setShuffledData] = useState([]);

  // Shuffle data only once when the component mounts
  useEffect(() => {
    const filteredData = data.filter(
      (item) => item.category === category && item.id !== excludeId
    );
    setShuffledData(shuffleArray(filteredData)); // Shuffle the filtered data
  }, [data, category, excludeId]); // Run when these dependencies change

  // Limit the displayed data based on the limit prop
  const limitedData = limit ? shuffledData.slice(0, limit) : shuffledData;

  return (
    <section id={id} className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center gap-2 pb-20">
        <div className="h-2 w-16 bg-gray-900" />
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl pt-2">
          {title}
        </h2>
      </div>
      {children}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {limitedData.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Section;
