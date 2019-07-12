import React, {Component} from 'react';
import './Assets/css/default.min.css';
import ImageUpload from './components/ImageUpload';
import PatientInfo from './components/PatientInfo';
import PriorImages from './components/PriorImages';
import Header from './components/Header'
import QuestionInputMinimized from './components/QuestionInputMinimized';
import ButtonListProto from './components/ButtonListProto'

class App extends Component {
  render(){
    return (
      <div className="App">
        <ImageUpload/>
        <PatientInfo/>
        <ButtonListProto/>
        <Header/>
        <PriorImages/>
        <QuestionInputMinimized/>
      </div>
    );
  }
}

export default App;
