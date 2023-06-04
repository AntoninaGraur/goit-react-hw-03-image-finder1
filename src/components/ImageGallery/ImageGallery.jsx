import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImgItem } from './ImageGallery.styled';
import * as basicLightbox from 'basiclightbox';

class ImageGallery extends Component {
  handleOpenModal = largeImageURL => {
    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" width="750" height="650"/>
    `);
    instance.show();
  };

  render() {
    const { images } = this.props;

    return (
      <ImgItem>
        {images.map(el => (
          <ImageGalleryItem
            key={el.id}
            image={el.webformatURL}
            largeImageURL={el.largeImageURL}
            type={el.type}
            handleOpenModal={this.handleOpenModal}
          />
        ))}
      </ImgItem>
    );
  }
}

export default ImageGallery;
