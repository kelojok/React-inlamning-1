import React from 'react';
import ReactDOM from 'react-dom';
import {Routing} from './routes/Routing';
import {NavigationBar} from './components/navigationbar/NavigationBar';

const App = () => {
    return ( <Routing>
        <NavigationBar />
    </Routing>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))