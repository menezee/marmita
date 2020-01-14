import React from 'react';
import { shallow } from 'enzyme';
import { Manager } from './';

describe('<Manager />', function () {
  it('should contain a proper title', () => {
    const wrapper = shallow(<Manager />);
    expect(wrapper.find('h1').text()).toBe('Manager');
  });
});
