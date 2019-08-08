import React, {Component} from 'react';
import Dialog from '../Dialog';
import QuestionInput from '../Inputs/QuestionInput';

class QuestionInputSelected extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputsSelected: this.props.dataFromQuestion,
      isOpen: false,
      questionHeight: -1,
      initial: 25
    };
  }

  myCallBack = (dataFromChild) => {
    this.setState({
      inputsSelected: dataFromChild
    });
    this.props.callbackFromParent(this.state.inputsSelected);
  }


  componentDidMount(){
    //mark size of flex box
    const bound = this.getBound("qselected");
    this.setState({
      questionHeight: bound.height
    });
  }

  // componentDidUpdate(){
  //   //Shifts time constraint down, when question input begins to expand
  //   const bound = this.getBound("qselected");
  //   var amount = 25;
  //   if(bound.height > this.state.questionHeight){
  //     console.log("change observed");
  //     this.setState({
  //       questionHeight: bound.height,
  //       initial: (bound.height - this.state.questionHeight)*2
  //     });
  //     document.getElementById("tcs").style.transform = "translateY("+this.state.initial+"%)";
  //     document.getElementById("tcs").style.webkitTransform = "translateY("+this.state.initial+"%)";
  //     document.getElementById("ob").style.transform = "translateY("+this.state.initial+"%)";
  //     document.getElementById("ob").style.webkitTransform = "translateY("+this.state.initial+"%)";
  //   }else if(bound.height < this.state.questionHeight){
  //     console.log("change observed");
  //     this.setState({
  //       questionHeight: bound.height,
  //       initial: this.state.initial+amount
  //     });
  //     document.getElementById("tcs").style.transform = "translateY(-"+amount+"%)";
  //     document.getElementById("tcs").style.webkitTransform = "translateY(-"+amount+"%)";
  //     document.getElementById("ob").style.transform = "translateY(-"+amount+"%)";
  //     document.getElementById("ob").style.webkitTransform = "translateY(-"+amount+"%)";
  //   }
  // }

  getBound(id) {
    const component = document.getElementById(id);
    if (!component) {
      return {};
    }
    const rect = component.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top + window.scrollY,
      width: rect.width || rect.right - rect.left,
      height: rect.height || rect.bottom - rect.top
    };
  }

  render(){
    return (
      <div>
      <div className="QuestionInputSelected" id="qselected" onClick={(e)=>(
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
                big={true}
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
