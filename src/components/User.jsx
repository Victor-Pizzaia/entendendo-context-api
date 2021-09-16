import React from 'react';

import { getUsers } from '../services/api'
import { LoadingContext } from '../App';

export function Users() {
    const {showLoading, hideLoading} = React.useContext(LoadingContext);

    const searchUsers = async () => {
        showLoading('Buscando usuários')

        const response = await getUsers().then(resp => {
            hideLoading();
            return resp;
        })
        console.log({ response })
    }

    return (
        <>
            <button onClick={searchUsers}>Buscar usuários</button>
        </>
    )
}
