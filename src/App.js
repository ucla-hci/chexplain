import React, {Component} from 'react';
import './Assets/css/default.min.css';
import ImageUpload from './components/ImageUpload';
import PatientInfo from './components/PatientInfo';
import Inputs from './components/Inputs/Inputs';
import SendToRadiologist from './components/SendToRadiologist'


class App extends Component {
  render(){
    return (
      <div className="App">
        <ImageUpload/>
        <PatientInfo/>
        <Inputs/>
        <SendToRadiologist/>
      </div>
    );
  }
}

export default App;
