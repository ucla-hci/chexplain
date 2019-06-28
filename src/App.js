import React, {Component} from 'react';
import './Assets/css/default.min.css';
import ImageUpload from './components/ImageUpload';
import PatientInfo from './components/PatientInfo';
import QuestionInput from './components/QuestionInput';
import DiffDiag from './components/DiffDiag';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ImageUpload/>
        <PatientInfo/>
        <QuestionInput/>
        <DiffDiag/>
      </div>
    );
  }
}

export default App;
