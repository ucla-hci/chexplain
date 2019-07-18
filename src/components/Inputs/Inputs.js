import React, {Component} from 'react';
import StartAnalysis from './StartAnalysis';
import Slider from './Slider';
import QuestionInputMinimized from './QuestionInputMinimized';
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

  myCallBackFromStartAnalysis = (dataFromChild) => {
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
        <Slider callbackFromParent={this.myCallBackFromSlider}/>
        <QuestionInputMinimized callbackFromParent={this.myCallBackFromQuestionInput}/>
        <StartAnalysis callbackFromParent={this.myCallBackFromStartAnalysis}/>
        {
          this.state.finishedAnalyze && results
        }
      </div>
    );
  }
}

export default Inputs;
