// External deps
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Production optimization
import registerServiceWorker from './registerServiceWorker';

// Modules
import { appReducer } from './modules/reducers';
import Storage from './modules/storage';

// Components
import App from './App';

// Styles
import './styles/main.css';

const storage = new Storage('todo-live');

// Create our redux store
const store = createStore(
  appReducer,
  storage.load(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(() => {
  storage.save(store.getState())
})

// babel-loader
// const ReactRefreshWebpackPlugin = isDevelopment ? require('@pmmmwh/react-refresh-webpack-plugin') : null;


// Uses render from react-dom to render the initial application into an element
// with id of 'root'
render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// Calls the registerServiceWorker to optimnize the appliction for production
registerServiceWorker();
