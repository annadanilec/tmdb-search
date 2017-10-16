import React from 'react';
import ReactDOM from 'react-dom';
import MockAdapter from 'axios-mock-adapter';
import 'jest-enzyme';
import sinon from 'sinon';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBox from './searchbox';

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBox />, div);
});

it('renders input icon', () => {
  const wrapper = shallow(<SearchBox />);
  const icon = <i className="fa fa-search" aria-hidden="true"></i>;
  expect(wrapper.contains(icon)).toEqual(true);
});

if ('renders input params', () => {
  const wrapper = mount((
    <input
      type="text"
      placeholder="Search for your favourite movie..."
      onChange={onChange}
    />
  ));
  
  wrapper.find({ type: "text" });
  wrapper.find({ placeholder: "Search for your favourite movie..." });
  wrapper.find({ onChange: true });
  
});