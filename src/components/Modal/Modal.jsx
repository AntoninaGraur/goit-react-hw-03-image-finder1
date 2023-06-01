import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';
// import * as basicLightbox from 'basiclightbox';

const modalRoot =  document.getElementById('modal-root')
 
class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return createPortal(
      <Overlay onClick={this.handleClick}>
        <ModalContainer>
          <ModalImage src={largeImageURL} alt="Large" />
        </ModalContainer>
      </Overlay>, modalRoot);
  }
}

export default Modal;
