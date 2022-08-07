import { useSelector } from "react-redux";
import { priceFormatter } from "../../auxFunctions";

const DetailedView = ({ id }) => {
  const product = useSelector((state) => state.products.list).find((prod) => {
    return prod._id === id;
  });
  return (
    <div>
      <img src={product.image_url} alt={product.name} />
      <h5 className="mx-4 my-4">{product.name}</h5>
      <p className="mx-4 my-4">{product.description}</p>
      <h6 className="mx-4 my-4">{priceFormatter(product.price)}</h6>
    </div>
  );
};

export default DetailedView;
