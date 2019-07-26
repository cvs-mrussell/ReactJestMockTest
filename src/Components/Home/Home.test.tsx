/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/first */
/* eslint-disable require-await */

import React from 'react';
import { shallow } from 'enzyme';
import UserService from '../../Services/UserService';
import Home from './Home';

jest.mock('../../Services/UserService');

it('renders without crashing', (): void => {
    const wrapper = shallow(<Home />);

    expect(wrapper.exists()).toBe(true);
});