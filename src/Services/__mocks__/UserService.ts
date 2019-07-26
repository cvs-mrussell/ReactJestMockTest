/* eslint-disable require-await */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import IUser from '../../Interfaces/IUser';

export default class UserService {
    public async getUsers(): Promise<IUser[]> {
        console.debug('Mock getUsers');

        return Promise.resolve([
            { id: 1, name: 'User 1', email: 'email1' },
            { id: 2, name: 'User 2', email: 'email2' },
        ]);
    }
}