
import React from 'react';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => (
  <li>
    <img
      src={webformatURL}
      alt=""
      data-source={largeImageURL}
      onClick={() => onClick(largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;
