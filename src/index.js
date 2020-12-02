import React from 'react';
import ReactDOM from 'react-dom';
import {Routing} from './routes/Routing';

const App = () => {
    return ( <Routing>
        <h1>Test123</h1>
    </Routing>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))