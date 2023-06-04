import { Component } from 'react';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';

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

    return (
      <Overlay onClick={this.handleClick}>
        <ModalContainer>
          <ModalImage src={largeImageURL} alt="Large" />
        </ModalContainer>
      </Overlay>
    );
  }
}

export default Modal;
