import { Component } from 'react';
import { ImgSize } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  handleClick = () => {
    const { largeImageURL, handleOpenModal } = this.props;
    handleOpenModal(largeImageURL);
  };

  render() {
    const { image, type } = this.props;
    return <ImgSize src={image} alt={type} onClick={this.handleClick} />;
  }
}

export default ImageGalleryItem;
