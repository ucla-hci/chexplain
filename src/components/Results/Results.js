import React, {Component} from 'react';
import Header from './Header';
import QuestionInputSelected from './QuestionInputSelected';

class Results extends Component {
  constructor(props){
    super(props);
    this.state={
      imageurl: this.props.dataFromImage,
      timeConstraint: this.props.dataFromSlider,
      questionInput: this.props.dataFromQuestion
    }
  }
  render(){
    return (
      <div>
        <Header/>
        <QuestionInputSelected dataFromQuestion={this.state.questionInput}/>
      </div>
    );
  }
}
// <ResultsColumns currentValue={this.props.dataFromSlider}/>
// <PriorImages/>
// <Annotations display={this.props.dataFromQuestion}/>
export default Results;
