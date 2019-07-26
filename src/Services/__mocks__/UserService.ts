/* eslint-disable require-await */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import IUser from '../../Interfaces/IUser';

export class UserService {
    public async getUsers(): Promise<IUser[]> {
        console.debug('Mock getUsers');

        return Promise.resolve([
            { id: 1, name: 'User 1', email: 'email1' },
            { id: 2, name: 'User 2', email: 'email2' },
        ]);
    }
}