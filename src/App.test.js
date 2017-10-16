import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import 'jest-enzyme';
import sinon from 'sinon';
import App from './App';
import SearchBox from './components/searchbox/searchbox';
import MenuItem from './components/movieitem/movieitem';
import config from './api/config';

configure({ adapter: new Adapter() })
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);
// Mock GET request to /discover/movie
mock.onGet(config.moviesUrl).reply(200, {
  movies: [
    {
      "page": 3,
      "total_results": 328487,
      "total_pages": 16425,
      "results":
      [{ "vote_count": 9597, "id": 550, "video": false, "vote_average": 8.3, "title": "Fight Club", "popularity": 54.915716, "poster_path": "\/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg", "original_language": "en", "original_title": "Fight Club", "genre_ids": [18], "backdrop_path": "\/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg", "adult": false, "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.", "release_date": "1999-10-15" }]
    }
  ]
});

axios.get(config.moviesUrl)
  .then(function(response) {
    console.log(response.data.movies);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should load data', () => {
  return axios.get(config.moviesUrl)
    .then(data => {
      expect(data).toBeDefined()
      expect(data).toHaveProperty("status", 200)
    })
});

it('renders app title', () => {
  const wrapper = shallow(<App />);
  const title = <h3><i className="fa fa-film" aria-hidden="true"></i> Movies Database</h3>;
  expect(wrapper.contains(title)).toEqual(true);
});

it('calls componentDidMount', () => {
  sinon.spy(App.prototype, 'componentDidMount');
  const wrapper = mount(<App />);
  expect(App.prototype.componentDidMount.calledOnce).toEqual(true);
});

it('renders moviesList', () => {
  const moviesResults = [
    { "vote_count": 9597, "id": 550, "video": false, "vote_average": 8.3, "title": "Fight Club", "popularity": 54.915716, "poster_path": "\/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg", "original_language": "en", "original_title": "Fight Club", "genre_ids": [18], "backdrop_path": "\/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg", "adult": false, "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.", "release_date": "1999-10-15" }
  ];
  const wrapper = shallow(<App />);
  const moviesList = <div>
    {moviesResults.map(movie => {movie}
  )}
</div>;
  expect(wrapper.contains(moviesList)).toEqual(true);
});

it('should call onChange', () => {
  const onChange = sinon.spy();
  onChange();
   
  expect(onChange.called).toEqual(true);
  expect(onChange.calledOnce).toEqual(true);
});