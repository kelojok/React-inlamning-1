import React from 'react';
import './NavigationStylesheet.css';
import {useHistory} from 'react-router-dom';

export const NavigationBar = () => {

    const history = useHistory();

    return ( <div className="navContainer">
        <h2 className="mainText" onClick={ () => history.push('/') }>Home</h2>
        
        <h2 className="loginText" onClick={ () => history.push('/login') }>Log in</h2>
    </div>
    )
}