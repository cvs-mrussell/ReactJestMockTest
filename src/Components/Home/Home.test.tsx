/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/first */
/* eslint-disable require-await */
import React from 'react';
import { shallow } from 'enzyme';
import { UserService } from '../../Services/UserService';
import Home from './Home';
import IUser from '../../Interfaces/IUser';

const mockedGetUserFunction = async (): Promise<IUser[]> => {
    console.debug('Mock getUsers');

    return Promise.resolve([
        { id: 1, name: 'User 1', email: 'email1' },
        { id: 2, name: 'User 2', email: 'email2' },
    ]);
};

jest.mock('../../Services/UserService');

mockedGetUserFunction.bind(UserService);

it('renders without crashing', (): void => {
    const wrapper = shallow(<Home />);

    expect(wrapper.exists()).toBe(true);
});