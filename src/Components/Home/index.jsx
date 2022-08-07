import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/thunks";
import ProductItem from "../ProductItem";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const products = useSelector((state) => state.products.list);
  const isFetching = useSelector((state) => state.products.isFetching);

  if (isFetching) {
    return <div>LOADING...</div>;
  }
  return (
    <div>
      {products.map((product) => {
        return (
          <ProductItem
            name={product.name}
            image={product.image_url}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Home;
