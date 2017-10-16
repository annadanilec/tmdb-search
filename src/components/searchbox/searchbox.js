import React, { Component } from 'react';
import './searchbox.css';

class SearchBox extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="searchBox">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          type="text"
          placeholder="Search for your favourite movie..."
          onChange={onChange}
        />
      </div>
    );
  }
}

export default SearchBox;
