import styles from "./modal.module.css";

const Modal = ({ showModal, closeModal, children }) => {
  if (showModal) {
    return (
      <div className={styles.modalBg}>
        <div className={styles.modalContainer}>
          <button
            type="button"
            onClick={() => closeModal()}
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
