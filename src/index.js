import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RickMortyShow from './RickMortyShow';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <RickMortyShow />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
