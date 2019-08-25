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
      dataFromSlider: false, //Time Constraint, not most updated after going in output page
      finishedAnalyze: false,
      questionInput: [],
      imageurl: "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp11_view1_frontal.jpg?alt=media&token=fe4a268d-8e4d-4c84-8392-78e54631c646",
      gender: "Female", 
      age: "19",
      imageIndex: 0
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

  myCallBackFromImage = (urlFromChild, patientDataFromChild, index) => {
    this.setState({
      imageurl: urlFromChild,
      gender: patientDataFromChild[0],
      age: patientDataFromChild[1],
      imageIndex: index
    });
    console.log(this.state.gender+" "+this.state.age);
  }

  render(){
    let results = (
      <Results dataFromImage={this.state.imageurl}
        patientGender={this.state.gender}
        patientAge={this.state.age}
        dataFromSlider={this.state.dataFromSlider}
        imageIndex={this.state.imageIndex}
        dataFromQuestion={this.state.questionInput}/>
    );
    let inputs = (
      <div>
        <TimeConstraint type={true} data={false} callbackFromParent={this.myCallBackFromSlider}/>
        <SelectPatient callbackFromParent={this.myCallBackFromImage}/>
        <QuestionInput type={true} currentSet={this.state.questionInput}  callbackFromParent={this.myCallBackFromQuestionInput}/>
        <Header gender={this.state.gender} age={this.state.age} callbackFromParentLoading={this.myCallBackFromHeader} callbackFromParentImage={this.myCallBackFromImage}/>
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
