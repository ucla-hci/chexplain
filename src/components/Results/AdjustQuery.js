import React, {Component} from 'react';
import Dialog from '../Dialog';
import QuestionInput from '../Inputs/QuestionInput';
import TimeConstraint from '../Inputs/TimeConstraint';

class AdjustQuery extends Component {
  constructor(props){
    super(props);
    this.state={
      adjustOpen: false,
      questionInputsSelected: this.props.dataFromQuestion,
      timeConstraintSelected: this.props.dataFromTime
    }
  }

  myCallBackQuestion = (dataFromChild) => {
    this.setState({
      questionInputsSelected: dataFromChild
    });
    this.props.callbackFromParentQuestion(this.state.questionInputsSelected);
  }
  myCallBackTime = (dataFromChild) => {
    this.setState({
      timeConstraintSelected: dataFromChild
    });
    this.props.callbackFromParentTime(this.state.timeConstraintSelected);
  }

  render(){
    let adjustButton = this.state.adjustOpen?"pressed_a":"adjustButton"; //temporary, will change to two div modes
    return (
      <div>
      <div className="adjustQuery">
        <div className = {adjustButton} onClick={() => this.setState({
          adjustOpen: !this.state.adjustOpen
        })}><div className="text"> Adjust Query </div></div>
      </div>
      <div>
        <Dialog isOpen={this.state.adjustOpen}
                big={true}
                onClose={(e)=>(this.setState({
                  adjustOpen: false
                }))}>
                <div className="queryList">
                  <QuestionInput type={false} currentSet={this.state.questionInputsSelected} callbackFromParent={this.myCallBackQuestion}/>
                </div>
        </Dialog>
      </div>
      </div>
    );
  }
}

export default AdjustQuery;
