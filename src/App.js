import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from './reducer';

import PlaceComponent from './components/PlaceComponent';


class App extends Component {
  
  render() {
    return (
      <Provider store ={createStore(reducer, {} , applyMiddleware(ReduxThunk))}>
        <PlaceComponent />
      </Provider>
    );
  }
}

export default App