import React, { Component } from 'react';
import './movieitem.css';

class MovieItem extends Component {
  render() {
    const { data } = this.props;
    const url = 'http://image.tmdb.org/t/p/';

    if (data) {
      return (
        <div className="MovieItem">
          <div className="MovieHeader">
            <h3>{data.title}</h3>
          </div>
          <div className="MovieImage">
            <img src={`${url}/w185${data.poster_path}`} alt={data.title} />
          </div>
          <div className="MovieDetails">
            <p>{data.overview}</p>
          </div>
        </div>
      ); 
    }
    return null;
  }
}

export default MovieItem;
