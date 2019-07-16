import React, {Component} from 'react';
import './Assets/css/default.min.css';
//import './Assets/css/default.css';
import ToggleAnnotation from './components/ToggleAnnotation'
import ImageUpload from './components/ImageUpload';
import PatientInfo from './components/PatientInfo';
import PriorImages from './components/PriorImages';
import Slider from './components/Slider';
import QuestionInputMinimized from './components/QuestionInputMinimized';
import ButtonListProto from './components/ButtonList2';
import SendToRadiologist from './components/SendToRadiologist'

class App extends Component {
  render(){
    return (
      <div className="App">
        <ImageUpload/>
        <PatientInfo/>
        <PriorImages/>
        <QuestionInputMinimized/>
        <Slider/>
        <SendToRadiologist/>
      </div>
    );
  }
}

export default App;
