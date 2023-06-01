import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImgItem } from './ImageGallery.styled';

class ImageGallery extends Component {
  render() {
    const { images, handleImageClick } = this.props;

    return (
      <ImgItem>
        {images.map(el => (
          <ImageGalleryItem
            key={el.id}
            image={el.webformatURL}
            largeImageURL={el.largeImageURL}
            type={el.type}
            handleImageClick={handleImageClick}
          />
        ))}
      </ImgItem>
    );
  }
}

export default ImageGallery;

