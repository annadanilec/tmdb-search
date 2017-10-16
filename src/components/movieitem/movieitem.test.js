import React from 'react';
import ReactDOM from 'react-dom';
import MockAdapter from 'axios-mock-adapter';
import 'jest-enzyme';
import sinon from 'sinon';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieItem from './movieitem';

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieItem />, div);
});

if ('renders image with params', () => {
  const wrapper = mount((
    <img src={`${url}/w185${data.poster_path}`} alt={data.title} />
  ));
  
  wrapper.find({ src: true });
  wrapper.find({ alt: data.title });
  
});

it('can pass in context', () => {
  const wrapper = shallow(
    <MovieItem />,
    { context: { title: 'Movie' } },
  );

  expect(wrapper.context().title).toEqual('Movie');
  expect(wrapper.context('title')).toEqual('Movie');
});