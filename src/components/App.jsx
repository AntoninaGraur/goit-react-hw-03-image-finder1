import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import * as basicLightbox from 'basiclightbox';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    showModal: false,
    selectedImage: '',
    hideButton: false,
    totalHits: 0
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;
    const API_KEY = '36223855-9729aa23392660264fa235b58';
    const PER_PAGE = 12;

    this.setState({ loading: true });

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
      );
      const { hits, totalHits } = response.data;
      if (hits.length === 0) {
        return toast.error('Something went wrong:) Please try again.')
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        page: prevState.page + 1,
        hideButton: hits.length < PER_PAGE,
        totalHits: totalHits
        
      }));
    } catch (error)
    {
      throw new Error(toast.error('Something went wrong:) Please try again.'));

    }
    finally {
      this.setState({ loading: false });
    }
  };

  handleSearchSubmit = query => {   
    
      this.setState({ images: [], query: query, page: 1 });
  
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleImageClick = largeImageURL => {
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600"/>
  `);
    instance.show()
    this.setState({ showModal: true, selectedImage: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, loading, showModal, selectedImage, hideButton, totalHits } =
      this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />

        <ImageGallery
          images={images}
          handleImageClick={this.handleImageClick}
        />

        {loading && <Loader />}

        {images.length > 0 && !loading && images.length !== totalHits && (
          <Button onClick={this.handleLoadMore} hideButton={hideButton} />
        )}

        {showModal && (
          <Modal
            largeImageURL={selectedImage}
            onClose={this.handleCloseModal}
            onClick={this.handleImageClick}
          />
        )}
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    );
  }
}

export default App;
