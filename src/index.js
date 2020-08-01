import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import * as reducers from './ducks';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

ReactDOM.render((
      <Provider store={store}>
        <App />
      </Provider>
  ), document.getElementById('root')
);
