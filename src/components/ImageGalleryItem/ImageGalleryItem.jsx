
import React from 'react';

const ImageGalleryItem = ({ image, handleImageClick, largeImageURL, type }) => (
  <li>
    <img
      src={image}
      alt={type}
      data-source={largeImageURL}
      onClick={() => handleImageClick(largeImageURL)}
      loading='lazy'
    />
  </li>
);

export default ImageGalleryItem;
