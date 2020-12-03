import React, { useState } from 'react';

export const LoginView = () => {

    // First value is a reference and the 2nd one is a function that updates the state
    const[username, setUsername] = useState()
    const [password, setPassword] = useState()

    return ( <div>
    <span>Username: </span><input onChange={event => setUsername(event.target.value)} />
    <br />
    <span>Password: </span><input type="password" onChange={event => setPassword(event.target.value)} />
    <button></button>

    </div>

    )
}