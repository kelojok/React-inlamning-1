import React, {useContext} from 'react';
import {UserContext} from '../../../shared/global/provider/UserProvider';

export const Profile = () => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    return (<div>
        <span>Welcome: </span><h2>{authenticatedUser}</h2>
    </div>

    )
}