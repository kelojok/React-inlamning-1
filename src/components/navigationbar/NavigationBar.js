import React, {useContext} from 'react';
import './NavigationStylesheet.css';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../../shared/global/provider/UserProvider';
import {Profile} from '../navigationbar/profile/Profile';

export const NavigationBar = () => {

    const history = useHistory();
    const[authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const displayUserIfAuth = () => {
        return (authenticatedUser) ? <Profile /> : <h2 className="loginText" onClick={ () => history.push('/login') }>Log in</h2>
    }

    return ( <div className="navContainer">
        <h2 className="mainText" onClick={ () => history.push('/') }>Home</h2>
        
        {displayUserIfAuth()}

    </div>
    
    )
}