import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './context/context';
import './index.css';
import {SpeechProvider} from '@speechly/react-client';

ReactDOM.render(
    <SpeechProvider appId='ac72636d-c615-44d8-8c58-10df897c5aa9' language='en-US'>
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);