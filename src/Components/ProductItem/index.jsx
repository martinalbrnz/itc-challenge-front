import styles from "./productItem.module.css";
import { priceFormatter } from "../../auxFunctions";

const ProductItem = ({ id, name, image, price, openDetailed }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className={styles.productImg} />
      <p className="mx-4 my-4">{name}</p>
      <p className="mx-4 mb-4">{priceFormatter(price)}</p>
      <button onClick={() => openDetailed(id)} className="btn btn-dark mx-4 mb-4">SEE MORE</button>
    </div>
  );
};

export default ProductItem;
