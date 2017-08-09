import React from 'react';
import { render } from 'react-dom';
import styles from '../styles/app.css';

class App extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="main-container">
                <h2>DI Sample Chat Bot</h2>
                Eliminates solitary lunchtime akwarness.
                <div className="bot-container">
                    <iframe src='https://webchat.botframework.com/embed/disamplebot?s=Dgp5KVcB-30.cwA.7x0.QpzMgaY-XsahPJJAUJyzSC7WtiadZls0BmJZavpFHnw'></iframe>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));