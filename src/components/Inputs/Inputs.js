import React, {Component} from 'react';
import Header from './Header';
import TimeConstraint from './TimeConstraint';
import QuestionInput from './QuestionInput';
import Results from '../Results/Results';

class Inputs extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataFromSlider: [true, true, true],
      finishedAnalyze: false,
      questionInput: []
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

  render(){
    let results = (
      <Results dataFromSlider={this.state.dataFromSlider} dataFromQuestion={this.state.questionInput}/>
    );
    return (
      <div>
        <TimeConstraint callbackFromParent={this.myCallBackFromSlider}/>
        <QuestionInput currentSet={this.state.questionInput}  callbackFromParent={this.myCallBackFromQuestionInput}/>
        <Header callbackFromParent={this.myCallBackFromHeader}/>
        {
          this.state.finishedAnalyze && results
        }
      </div>
    );
  }
}

export default Inputs;
