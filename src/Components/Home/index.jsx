import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/thunks";
import ProductItem from "../ProductItem";
import Modal from "../Shared/Modal";
import DetailedView from "../DetailedView";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetailedModal, setShowDetailedModal] = useState(false);
  const [modalId, setModalId] = useState("");
  const itemsPerPage = 3;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const products = useSelector((state) => state.products.list);
  const isFetching = useSelector((state) => state.products.isFetching);

  const nextPage = () => {
    if (currentPage < products.length / itemsPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
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
    <div>
      <div className="d-flex p-4 flex-row justify-content-around flex-wrap">
        {products.length > 0 ? (
          products
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((product) => {
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
            })
        ) : (
          <p>No products yet!</p>
        )}
        <Modal showModal={showDetailedModal} closeModal={closeModal}>
          <DetailedView id={modalId} />
        </Modal>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <button className="btn btn-dark mx-4 mb-4" onClick={() => prevPage()}>
          {"< Previous page"}
        </button>
        <h5>{currentPage}</h5>
        <button className="btn btn-dark mx-4 mb-4" onClick={() => nextPage()}>
          {"Next page >"}
        </button>
      </div>
    </div>
  );
};

export default Home;
