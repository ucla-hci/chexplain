import React, {Component} from 'react';
import Dialog from '../Dialog';
import QuestionInput from '../Inputs/QuestionInput';

class QuestionInputSelected extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputsSelected: this.props.dataFromQuestion,
      isOpen: false
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
      <div className="QuestionInputSelected" onClick={(e)=>(
        this.setState({
          isOpen: true
        })
      )}>
        <div className="title">Question Input</div>
        <div className="buttonGroup1">
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
          <QuestionInput type={false} currentSet={this.state.inputsSelected} callbackFromParent={this.myCallBack}/>          
        </Dialog>
      </div>
      </div>
    );
  }
}

export default QuestionInputSelected;
