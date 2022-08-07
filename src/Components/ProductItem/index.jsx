import styles from "./productItem.module.css";
import { priceFormatter } from "../../auxFunctions";

const ProductItem = ({ id, name, image, price, openDetailed }) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <img src={image} alt={name} className={styles.productImg} />
        <h5 className="mx-4 my-4 card-title">{name}</h5>
        <h6 className="mx-4 mb-4">{priceFormatter(price)}</h6>
      </div>
      <button
        onClick={() => openDetailed(id)}
        className="btn btn-dark mx-4 mb-4"
      >
        SEE MORE
      </button>
    </div>
  );
};

export default ProductItem;
