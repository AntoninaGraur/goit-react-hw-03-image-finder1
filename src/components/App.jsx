
import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';



class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    showModal: false,
    selectedImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    const API_KEY = '36223855-9729aa23392660264fa235b58';

    this.setState({ loading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleSearchSubmit = query => {
    this.setState({ images: [], query: query, page: 1 });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = largeImageURL => {
    this.setState({ showModal: true, selectedImage: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, loading, showModal, selectedImage } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSearchSubmit} />

        <ImageGallery images={images} />

        {loading && <Loader />}

        {images.length > 0 && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}

        {showModal && (
          <Modal
            largeImageURL={selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
