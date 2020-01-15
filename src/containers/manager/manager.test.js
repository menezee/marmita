import React from 'react';
import { shallow } from 'enzyme';
import { MealCard, MealList } from '../../components';
import { Manager, Title } from './';

describe('<Manager />', function () {
  it('should contain a proper title', () => {
    const wrapper = shallow(<Manager />);
    expect(wrapper.find(Title).text()).toBe('Manager');
  });

  it('should include meal', () => {
    const wrapper = shallow(<Manager />);
    expect(wrapper.find(MealList).exists()).toBeTruthy();
    expect(wrapper.find(MealCard).length).toBe(2);

    wrapper
      .find('input')
      .simulate('change',
        {
          target: {
            value: 'potatoes',
          },
        },
      );

    wrapper.find('button').simulate('click');
    expect(wrapper.find(MealCard).length).toBe(3);
  });
});
