import React, { useState } from "react";
import styles from "./Images.module.css";
import ImageCard from "../ImageCard/ImageCard";
import Modal from "../Modal/Modal";


const Images = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className={styles.wrapper}>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            image={image.webformatURL}
            title={image.tags}
            views={image.views}
            likes={image.likes}
            comments={image.comments}
            onClick={() => setSelectedImage(image)} 
          />
        ))}
      </div>

      <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
};

export default Images;
