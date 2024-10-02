import { Link } from "react-router-dom";

const Item = ({ item }) => {
  // console.log(item.id);

  return (
    <div className="rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          alt={item.name}
          width={400}
          height={400}
          className="w-full object-cover rounded-t-lg"
          style={{ aspectRatio: "1", objectFit: "cover" }}
        />
        <div className="p-4">
          <h3 className="text-base font-semibold">{item.name}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-primary line-through text-sm">
              ${item.old_price}
            </span>
            <span className="text-lg font-bold">${item.new_price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
