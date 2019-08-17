import React, {Component} from 'react';
import Header from './Header';
import TimeConstraint from './TimeConstraint';
import QuestionInput from './QuestionInput';
import Results from '../Results/Results';
import SelectPatient from './SelectPatient';

class Inputs extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataFromSlider: [], //Time Constraint, not most updated after going in output page
      finishedAnalyze: false,
      questionInput: [],
      imageurl: '',
      gender: "Female", //will be obtained when input window is done implemented
      age: "60"
    }
  }

  myCallBackFromSlider = (dataFromChild) => {
    console.log(dataFromChild);
    this.setState({
      dataFromSlider: dataFromChild
    });
  }

  myCallBackFromHeader = (dataFromChild) => {
    console.log(dataFromChild);
    this.setState({
      finishedAnalyze: dataFromChild
    });
  }

  myCallBackFromQuestionInput = (dataFromChild) => {
    console.log(dataFromChild);
    this.setState({
      questionInput: dataFromChild
    });
  }

  myCallBackFromImage = (dataFromChild) => {
    this.setState({
      imageurl: dataFromChild
    });
  }

  render(){
    let results = (
      <Results dataFromImage={this.state.imageurl}
        patientGender={this.state.gender}
        patientAge={this.state.age}
        dataFromSlider={this.state.dataFromSlider}
        dataFromQuestion={this.state.questionInput}/>
    );
    let inputs = (
      <div>
        <TimeConstraint type={true} original={[]} callbackFromParent={this.myCallBackFromSlider}/>
        <SelectPatient callbackFromParent={this.myCallBackFromImage}/>
        <QuestionInput type={true} currentSet={this.state.questionInput}  callbackFromParent={this.myCallBackFromQuestionInput}/>
        <Header callbackFromParentLoading={this.myCallBackFromHeader} callbackFromParentImage={this.myCallBackFromImage}/>
      </div>
    );
    return (
      <div>
        {
          !this.state.finishedAnalyze && inputs
        }
        {
          this.state.finishedAnalyze && results
        }
      </div>
    );
  }
}

export default Inputs;
