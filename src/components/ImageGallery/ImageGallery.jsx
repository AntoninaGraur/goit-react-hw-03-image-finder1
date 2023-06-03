import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImgItem } from './ImageGallery.styled';
// import * as basicLightbox from 'basiclightbox';

class ImageGallery extends Component {

  // handleImageClick = largeImageURL => {
  // const instance = basicLightbox.create(`
  //   <img src="${largeImageURL}" width="800" height="600"/>
  // `);
    
  //   instance.show()
  //   this.setState({ showModal: true, selectedImage: largeImageURL });
  // };


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
