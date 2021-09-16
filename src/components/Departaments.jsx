import React from 'react';

import { getDepartaments } from '../services/api';
import { LoadingContext } from '../App';

export function Departaments() {
    const { hideLoading, showLoading } = React.useContext(LoadingContext);

    const searchDepartaments = async () => {
        showLoading("Buscando departamentos...");

        const response = await getDepartaments().then(resp => {
            hideLoading();
            return resp;
        })
        console.log({ response })
    }

    return (
        <>
            <button onClick={searchDepartaments}>Buscar departamentos</button>
        </>
    )
}
