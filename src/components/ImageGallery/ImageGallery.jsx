
import  { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <ul>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
