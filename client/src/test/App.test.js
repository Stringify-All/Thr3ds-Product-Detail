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
});

describe('App', () => {
  it('has a button with className button-large', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.button-large')).toBeDefined;
  });
});
