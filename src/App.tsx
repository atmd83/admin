import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

import './App.css';

import LoginContainer from './containers/login';
import HomeContainer from './containers/home';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if(isLoading) {
    return (<p>Loading...</p>);
  }

  if(!isAuthenticated) {
    return (<LoginContainer />);
  }

  return (<HomeContainer user={user} />);

}

export default App;
