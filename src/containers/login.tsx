import React from 'react';

import { useAuth0 } from "@auth0/auth0-react";

export default () => {
    const { loginWithRedirect, logout } = useAuth0();
    return (
        <section style={{background: '#00baff', width: '100vw', height: '100vh'}}>
            <div style={{width: '500px', position: 'absolute', textAlign: 'center', transform: 'translate(-50%, -50%)', top: '50%', left: '50%'}}>
                <video style={{width: '300px'}} autoPlay muted>
                    <source src="trustdriver.mp4" type="video/mp4" />
                </video>
                <span style={{display: 'block', cursor: 'pointer'}}>
                    <button
                        onClick={loginWithRedirect}
                        style={{
                        border: 0,
                        background: '#fbfbfc',
                        color: '#00baff',
                        fontWeight: 'bold',
                        padding: ".5rem 1rem"
                    }}>Login</button>
                </span>
            </div>
        </section>

    );
}