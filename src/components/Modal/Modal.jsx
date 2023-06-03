import { Component } from 'react';




 
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
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img src={largeImageURL} alt="Large" />
        </div>
      </div>
    );
  }
}
export default Modal;
