import React, {Component} from 'react';
import Header from './Header';
import QuestionInputSelected from './QuestionInputSelected';
import TimeConstraintSelected from './TimeConstraintSelected';
import Observations from './Observations';
import Impressions from './Impressions';
import ImageDisplay from './ImageDisplay';
import ToggleAnnotation from './ToggleAnnotation';
import PriorImages from './PriorImages';


class Results extends Component {
  constructor(props){
    super(props);
    this.state={
      imageurl: this.props.dataFromImage,
      timeConstraint: this.props.dataFromSlider,
      questionInput: this.props.dataFromQuestion,
      observations: ["Large right sided pleural effusion","Small left sided pleural effusion"], //to be passed here by backend
      impressions: ["Pneumonia", "Pulmonary Edema", "Pulmonary Infarction"]
    }
  }

  callbackFromQuestion = (dataFromChild) => {
    this.setState({
      questionInput: dataFromChild
    });
  }

  callbackFromTime = (dataFromChild) => {
    this.setState({
      timeConstraint: dataFromChild
    });
  }

  render(){
    return (
      <div>
        <Header/>
        <div className="results">
          <QuestionInputSelected dataFromQuestion={this.state.questionInput} callbackFromParent={this.callbackFromQuestion}/>
          <br/>
          <TimeConstraintSelected dataFromTime={this.state.timeConstraint} callbackFromParent={this.callbackFromTime}/>
          <br/>
          <Observations observations={this.state.observations}/>
          <br/>
          <Impressions impressions={this.state.impressions}/>
        </div>
        <ImageDisplay url={this.state.imageurl}/>
        <ToggleAnnotation display={this.state.questionInput}/>
        <PriorImages/>
      </div>
    );
  }
}
// <ResultsColumns currentValue={this.props.dataFromSlider}/>
// <PriorImages/>
// <Annotations display={this.props.dataFromQuestion}/>
export default Results;
