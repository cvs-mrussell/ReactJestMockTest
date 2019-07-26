/* eslint-disable no-console */
import axios from 'axios';
import IUser from '../Interfaces/IUser';

export default class UserService {
    private readonly uri = 'https://jsonplaceholder.typicode.com/users';

    public async getUsers(): Promise<IUser[]> {
        console.debug('Real getUsers');

        const response = await axios.get(this.uri);

        return response.data;
    }
}