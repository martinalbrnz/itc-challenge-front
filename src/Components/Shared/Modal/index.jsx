import styles from "./modal.module.css";

const Modal = ({ showModal, closeModal, children }) => {
  if (showModal) {
    return (
      <div className={styles.modalBg}>
        <div className={styles.modalContainer}>
          <p onClick={() => closeModal()}>close</p>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
