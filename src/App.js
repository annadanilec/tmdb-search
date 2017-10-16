import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import config from './api/config';
import MovieItem from './components/movieitem/movieitem';
import SearchBox from './components/searchbox/searchbox';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      movies: [],
      moviesResults: []
    };
  }

  componentDidMount() {
    axios.get(config.moviesUrl)
      .then(res => {
      const movies = res.data.results;
      this.setState({ movies });
    });
  }

  onChange(evt) {
    this.setState({ query: evt.target.value });
    if (this.state.query) {
      this.searchForMovies(); 
    }
  }

  searchForMovies() {
    axios.get(`${config.searchUrl}&query=${this.state.query}`)
      .then(res => {
      const moviesResults = res.data.results;
      this.setState({ moviesResults });
    });
  }

  renderMoviesList() {
    const { movies } = this.state;
    if (movies) {
      return (
        <div>
          {movies.map(movie =>
            <MovieItem
              key={movie.id}
              data={movie}
            />
          )}
        </div>
      ) 
    }
  }

  renderSearchResultsList() {
    const { moviesResults } = this.state;
    if (moviesResults) {
      return (
        <div>
          {moviesResults.map(movie =>
            <MovieItem
              key={movie.id}
              data={movie}
            />
          )}
        </div>
      )      
    }
  }

  render() {
    const { query } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h3>
            <i className="fa fa-film" aria-hidden="true"></i> Movies Database
          </h3>
          <SearchBox
            onChange={this.onChange.bind(this)}
          />
        </div>
        {query &&
          <div className="container">  
            <h3 className="subtitle">Search results</h3>
            {this.renderSearchResultsList()}
          </div>
        }
        <div className="container">
          <h3 className="subtitle">Popular movies</h3>
          {this.renderMoviesList()}
        </div>  
      </div>
    );
  }
}

export default App;
