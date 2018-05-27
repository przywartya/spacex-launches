import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { configure } from 'mobx';

import App from './App';
import './assets/favicon.ico';
import mainStore from './stores/mainStore';

configure({ enforceActions: true });

ReactDOM.render(
    <Provider mainStore={mainStore}>
        <App />
    </Provider> , 
    document.getElementById('root')
);
