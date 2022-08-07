import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/thunks";
import ProductItem from "../ProductItem";
import Modal from "../Shared/Modal";
import DetailedView from "../DetailedView";

const Home = () => {
  const [showDetailedModal, setShowDetailedModal] = useState(false);
  const [modalId, setModalId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const products = useSelector((state) => state.products.list);
  const isFetching = useSelector((state) => state.products.isFetching);

  const openDetailed = (id) => {
    setModalId(id);
    setShowDetailedModal(true);
  };
  const closeModal = () => {
    setModalId("");
    setShowDetailedModal(false);
  };

  if (isFetching) {
    return <div>LOADING...</div>;
  }
  return (
    <div className="d-flex p-4 flex-row justify-content-around flex-wrap">
      {products.map((product) => {
        return (
          <ProductItem
            key={product._id}
            id={product._id}
            name={product.name}
            image={product.image_url}
            price={product.price}
            openDetailed={openDetailed}
          />
        );
      })}
      <Modal showModal={showDetailedModal} closeModal={closeModal}>
        <DetailedView id={modalId} />
      </Modal>
    </div>
  );
};

export default Home;
