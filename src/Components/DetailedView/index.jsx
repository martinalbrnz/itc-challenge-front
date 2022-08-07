import { useSelector } from "react-redux";
import { priceFormatter } from "../../auxFunctions";

const DetailedView = ({ id }) => {
  const product = useSelector((state) => state.products.list).find((prod) => {
    return prod._id === id;
  });
  return (
    <div>
      <img src={product.image_url} alt={product.name} />
      <div>{product.name}</div>
      <div>{product.description}</div>
      <div>{priceFormatter(product.price)}</div>
    </div>
  );
};

export default DetailedView;
