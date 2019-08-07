import React, {Component} from 'react';
import Dialog from '../Dialog';
import QuestionInput from '../Inputs/QuestionInput';
import TimeConstraint from '../Inputs/TimeConstraint';

class TimeConstraintSelected extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputsSelected: this.props.dataFromTime,
      isOpen: false,
      questionHeight: -1
    };
  }

  myCallBack = (dataFromChild) => {
    this.setState({
      inputsSelected: dataFromChild
    });
    this.props.callbackFromParent(this.state.inputsSelected);
  }

  render(){
    console.log("rerendered");
    return (
      <div>
      <div className="TimeConstraintSelected" id="tcs" onClick={(e)=>(
        this.setState({
          isOpen: true
        })
      )}>
        <div className="title">Time Constraint</div>
        <div className="buttonGroup1" >
          <ul>
            {
              this.state.inputsSelected.map((currElement) => {
                return <li>{currElement}</li>
              })
            }
          </ul>
        </div>
      </div>
      <div>
        <Dialog isOpen={this.state.isOpen}
                big={false}
                onClose={(e)=>(this.setState({
                  isOpen: false
                }))}>
          <TimeConstraint type={false} callbackFromParent={this.myCallBack}/>
        </Dialog>
      </div>
      </div>
    );
  }
}

export default TimeConstraintSelected;
