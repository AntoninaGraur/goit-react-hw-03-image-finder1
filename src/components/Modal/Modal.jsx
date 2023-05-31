import  { Component } from 'react';


import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <div>
        <div>dfhdhd</div>
      </div>, modalRoot
    );
  }
}
  


export default Modal;





//     const { showModal, selectedImage } = this.props;

//     if (!showModal) {
//       return null;
//     }

//     const instance = basicLightbox.create(`
//       <img src="${selectedImage}" />
//     `);

//     instance.show();

//     return (
//       <div>
//         <div>dfhdhd</div>
//       </div>
//     );
//   }
// }