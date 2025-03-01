import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
};

export default Modal;
