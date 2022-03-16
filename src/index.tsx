import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import './index.css';
import App from './App';

ReactDOM.render(
    <Auth0Provider
        domain="dev-rd356b7i.eu.auth0.com"
        clientId="VMUC0smnsSTYnIj67cFbQDA783dceo9T"
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);
