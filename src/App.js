import React, {Component} from 'react';
import './Assets/css/default.min.css';
import Inputs from './components/Inputs/Inputs';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Inputs/>
      </div>
    );
  }
}

export default App;
