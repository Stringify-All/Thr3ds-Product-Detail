/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App.jsx';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders the page', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has a button with className button-large', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.button-large')).toBeDefined;
  });

  it('has a main photo carousel component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('PhotoCarousel')).toBeDefined;
  });

  it('has a main jumbotron component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Header')).toBeDefined;
  });

  it('has a style selector component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Styles')).toBeDefined;
  });
});

