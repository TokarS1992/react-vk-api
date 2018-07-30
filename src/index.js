import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles.scss'

const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <div className='app'>
            <App />
        </div>
    </Provider>,
    document.getElementById('root'),
    () => {
        console.log('Отрендерился App компонент');
    }
);