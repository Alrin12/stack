import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import Reducer from './application/Reducer';
import DashBoard from './application/dashboard/presentation/containers/DashBoard';
import './App.css';

const store = createStore(Reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <DashBoard/>
        </div>
      </Provider>
    );
  }
}

export default App;
