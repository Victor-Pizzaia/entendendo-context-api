import React from 'react';

import { Departaments } from './components/Departaments';
import { Users } from './components/User';
import { Loading } from './components/Loading';

import './styles/index.scss'

export const LoadingContext = React.createContext({
    loading: false,
    message: null,
    showLoading: message => {},
    hideLoading: () => {}
})

function App() {
  const [{loading, message}, setLoading] = React.useState({
    loading: false,
    message: null
  });

  const showLoading = message => setLoading({
    loading: true,
    message
  });

  const hideLoading = () => setLoading({loading: false});

  return (
    <LoadingContext.Provider value={{showLoading, hideLoading, loading, message}}>
      <Users />
      <Departaments />
      <Loading loading={loading} message={message} />
    </LoadingContext.Provider>
  )
}

export default App;
