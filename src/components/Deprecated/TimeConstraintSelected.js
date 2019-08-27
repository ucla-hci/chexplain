import React, {Component} from 'react';
import Dialog from '../Dialog';
import TimeConstraint from '../Inputs/TimeConstraint';

class TimeConstraintSelected extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputsSelected: this.props.dataFromTime
    };
  }

  myCallBack = (dataFromChild) => {
    this.setState({
      inputsSelected: dataFromChild
    });
    this.props.callbackFromParent(this.state.inputsSelected);
  }

  render(){
    return (
      <div>
      <div className="TimeConstraintSelected">
        <TimeConstraint type={false} original={this.state.inputsSelected} callbackFromParent={this.myCallBack}/>
      </div>
      </div>
    );
  }
}

export default TimeConstraintSelected;
