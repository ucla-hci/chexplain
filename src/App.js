import React, {Component} from 'react';
import './Assets/css/default.min.css';
import ImageUpload from './components/ImageUpload';
import PatientInfo from './components/PatientInfo';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ImageUpload/>
        <PatientInfo/>
      </div>
    );
  }
}

export default App;
