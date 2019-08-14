import React, {Component} from 'react'

class TimeConstraint extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      inputsSelected: [],
      displayInput: [],
      inputsSet: new Set([]),
      buttonPressed: [["I1",false,"STAT"], ["I2",false, "Urgent"], ["I3",false, "Routine"]]
    };
  }

  componentWillMount(){
    let tempCopy = this.state.buttonPressed;
    if(this.props.original.length === 0)
      return;
    tempCopy.map((currElement) => {
      if(currElement[2]===this.props.original[0]){
        console.log("match found");
        currElement[1] = true;
      }
    });
    this.setState({
      buttonPressed: tempCopy
    });
  }


  async handleClick(whichbutton){
    this.state.buttonPressed.map((buttons) => {
      if(whichbutton===buttons[0]&&!buttons[1]){
        buttons[1] = true;
        this.state.inputsSet.add(buttons[2]);
      }else if(whichbutton===buttons[0]&&buttons[1]){
        buttons[1] = false;
        this.state.inputsSet.delete(buttons[2]);
      }else{ //allows only one input to be selected
        buttons[1] = false;
        this.state.inputsSet.delete(buttons[2]);
      }
    });

    await this.setState({
      inputsSelected:[...this.state.inputsSelected, whichbutton],
      displayInput:Array.from(this.state.inputsSet),
    });
    this.props.callbackFromParent(this.state.displayInput);
  }

  render(){
    var I1_c = this.state.buttonPressed[0][1]? "pressed":"I1",
        I2_c = this.state.buttonPressed[1][1]? "pressed":"I2",
        I3_c = this.state.buttonPressed[2][1]? "pressed":"I3";
    var I1 = "I1", I2 = "I2", I3 = "I3";
    var divName = this.props.type?"TimeConstraint":"TimeConstraintResult";
    return (
      <div className={divName}>
        <div className="title">Time Constraint</div>
        <div className="buttonGroup1">
          <ul>
            <li>
            <button className={I1_c} onClick = {() => this.handleClick(I1)}>{this.state.buttonPressed[0][2]}</button>
            </li>
            <li>
            <button className={I2_c} onClick = {() => this.handleClick(I2)}>{this.state.buttonPressed[1][2]}</button>
            </li>
            <li><button className={I3_c} onClick = {() => this.handleClick(I3)}>{this.state.buttonPressed[2][2]}</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TimeConstraint;