import React from 'react';
import ReactDOM from 'react-dom';
import {Routing} from './routes/Routing';
import {NavigationBar} from './components/navigationbar/NavigationBar';
import {UserProvider} from './shared/global/provider/UserProvider';

const App = () => {
    return ( <UserProvider>
        <Routing>
        <NavigationBar />
    </Routing>
    </UserProvider>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))