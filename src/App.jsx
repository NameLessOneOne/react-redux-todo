import React, { Component } from 'react';
import './App.css';
import Main from './components/main/main';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from './reducers/index.js';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
	    <Provider store={store}>
		    <div className="App">
			    <Main/>
		    </div>
	    </Provider>
    );
  }
}

export default App;
