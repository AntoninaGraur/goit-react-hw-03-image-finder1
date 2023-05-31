

import { FaSearch } from 'react-icons/fa';

import { Component } from 'react';

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
      <header>
        <form  onSubmit={this.handleSubmit}>
          <button type="submit">
            <FaSearch />{' '}
          </button>

          <input
            
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
