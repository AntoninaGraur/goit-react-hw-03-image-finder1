import { Component } from 'react';

import { FaSearch } from 'react-icons/fa';

import { Header, SearchInput, SearchBtn, SearchForm } from './SearchBar.styled';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <Header>
        <SearchForm  onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <FaSearch />
          </SearchBtn>

          <SearchInput
            
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

export default Searchbar;
