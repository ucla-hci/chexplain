import React, {Component} from 'react';
import Dialog from './Dialog';
import QuestionInput from './QuestionInput'

class QuestionInputMinimized extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      displayInputFromChild: []
    }
  }

  myCallBack = (dataFromChild) => {
    this.setState({
      displayInputFromChild: dataFromChild
    });
  }

  render(){
    return(
      <div>
      <div className="QuestionInputTitle">
        <div className="title">Question Input</div>
        <div className="selectedInputs">Selected Questions:&ensp;{this.state.displayInputFromChild.join(", ")}</div>
          <button onClick={(e)=>(
            this.setState({
              isOpen: true
            })
          )}>Show Questions</button>
          </div>
     <div>
          <Dialog isOpen={this.state.isOpen}
                  onClose={(e) => this.setState({isOpen:false})}>
            <QuestionInput currentSet={this.state.displayInputFromChild} callbackFromParent={this.myCallBack}/>
          </Dialog>
      </div>
      </div>

    );
  }

}

export default QuestionInputMinimized;
