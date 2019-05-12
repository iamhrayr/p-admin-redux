import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('<Header /> component', () => {
  it('exists', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('match snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
