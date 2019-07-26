import React, { useEffect, useState } from 'react';
import { UserService } from '../../Services/UserService';
import IHomeState from './IHomeState';
import IUser from '../../Interfaces/IUser';

const Home = (): JSX.Element => {
    const [state, setState] = useState({
        users: [],
    } as IHomeState);

    async function loadData(): Promise<void> {
        const service = new UserService();
        const users = await service.getUsers();

        setState({ users });
    }

    useEffect((): void => { loadData(); }, []);

    const userList = state.users.map((el: IUser): JSX.Element => (
        <li key={el.id}>
            {el.name}
        </li>
    ));

    return (
        <ul>
            {userList}
        </ul>
    );
}

export default Home;