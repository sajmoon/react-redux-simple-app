'use strict'

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'

import App from './components/App'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import questions from './reducers'
import { reducer as formReducer } from 'redux-form';
import * as actions from './actions'

const reducers = combineReducers(Object.assign({}, {
  form: formReducer,
  questions: questions
}))

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("mount")
)

actions.initalData(store)
