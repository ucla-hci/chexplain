import React, {Component} from 'react'

class QuestionInput extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = {
      more: [false, false, false],
      inputsSelected: [],
      displayInput: this.props.currentSet,
      inputsSet: new Set(this.props.currentSet),
      buttonPressed: [["I1",false,"Pleural Effusion"], ["I2",false, "Pleural Thickening"], ["I3",false, "Pneumothorax"],
                      ["I4",false,"Lung Opacity"], ["I5",false,"Support Device"], ["I6",false,"Fracture"],
                      ["I7", false, "Chest Pain"], ["I8", false, "Shortness of Breath"], ["I9", false, "Cough"],
                      ["I10", false, "Haemoptysis"], ["I11", false, "Weight Loss"], ["I12", false, "Swallow an Object"],
                      ["I13", false, "Purulent Cough"], ["I14", false, "Projection"], ["I15", false, "Airway"],
                      ["I16", false, "Breathing"], ["I17", false, "Cardiac"], ["I18", false, "Mediastinum"],
                      ["I19", false, "Diaphragm"], ["I20", false, "Delicates"]]
    };
  }

  componentWillMount(){ //runs before component is re-rendered
    let tempCopy = [...this.state.buttonPressed];
    this.props.currentSet.map((currElement) => {
      tempCopy.map((currButton) => {
        if(currElement===currButton[2])
          currButton[1]=true;
      });
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
      }
    });

    await this.setState({
      inputsSelected:[...this.state.inputsSelected, whichbutton],
      displayInput:Array.from(this.state.inputsSet),
    });
    this.props.callbackFromParent(this.state.displayInput);
  }

  handleMoreButtons(whichbutton){
    const {more} = this.state;
    more[whichbutton]=!more[whichbutton];
    this.setState({
      more
    });
  }

  async handleClear(){
    let tempCopy = [...this.state.buttonPressed];
    tempCopy.map((currElement) => {
      currElement[1]=false;
    });
    await this.setState({
      buttonPressed: tempCopy,
      inputsSet: new Set(),
      displayInput: []
    });
    this.props.callbackFromParent(this.state.displayInput);
  }


  render(){
    //Group 1
    var I1_c = this.state.buttonPressed[0][1]? "pressed":"I1",
        I2_c = this.state.buttonPressed[1][1]? "pressed":"I2",
        I3_c = this.state.buttonPressed[2][1]? "pressed":"I3",
        I4_c = this.state.buttonPressed[3][1]? "pressed":"I4",
        I5_c = this.state.buttonPressed[4][1]? "pressed":"I5",
        I6_c = this.state.buttonPressed[5][1]? "pressed":"I6";
    var I1 = "I1", I2 = "I2", I3 = "I3", I4 = "I4", I5 = "I5", I6 = "I6";
    //Group 2
    var I7_c = this.state.buttonPressed[6][1]? "pressed":"I7",
        I8_c = this.state.buttonPressed[7][1]? "pressed":"I8",
        I9_c = this.state.buttonPressed[8][1]? "pressed":"I9",
        I10_c = this.state.buttonPressed[9][1]? "pressed":"I10",
        I11_c = this.state.buttonPressed[10][1]? "pressed":"I11",
        I12_c = this.state.buttonPressed[11][1]? "pressed":"I12",
        I13_c = this.state.buttonPressed[12][1]? "pressed":"I13";
    var I7 = "I7", I8 = "I8", I9 = "I9", I10 = "I10", I11 = "I11", I12 = "I12", I13 = "I13";
    //Group 3
    var I14_c = this.state.buttonPressed[13][1]? "pressed":"I14",
        I15_c = this.state.buttonPressed[14][1]? "pressed":"I15",
        I16_c = this.state.buttonPressed[15][1]? "pressed":"I16",
        I17_c = this.state.buttonPressed[16][1]? "pressed":"I17",
        I18_c = this.state.buttonPressed[17][1]? "pressed":"I18",
        I19_c = this.state.buttonPressed[18][1]? "pressed":"I19",
        I20_c = this.state.buttonPressed[19][1]? "pressed":"I20";
    var I14 = "I14", I15 = "I15", I16 = "I16", I17 = "I17", I18 = "I18", I19 = "I19", I20 = "I20";
    var divName = this.props.type?"QuestionInput":"QuestionInputDialog";
    return (
      <div className={divName}>
        <div className="title">Question Input</div>
        <button className="clear" onClick = {() => this.handleClear()}>Clear</button>
        <div className="selectedInputs">Selected Questions:&ensp;{this.state.displayInput.join(", ")}</div>
        <div className="buttonGroup1">
          <ul>
            <li>
            <button className={I1_c} onClick = {() => this.handleClick(I1)}>{this.state.buttonPressed[0][2]}</button>
            </li>
            <li>
            <button className={I2_c} onClick = {() => this.handleClick(I2)}>{this.state.buttonPressed[1][2]}</button>
            </li>
            <li><button className={I3_c} onClick = {() => this.handleClick(I3)}>{this.state.buttonPressed[2][2]}</button></li>
            <li><button className={I4_c} onClick = {() => this.handleClick(I4)}>{this.state.buttonPressed[3][2]}</button></li>
            <li><button className={I5_c} onClick = {() => this.handleClick(I5)}>{this.state.buttonPressed[4][2]}</button></li>
            <li><button className={I6_c} onClick = {() => this.handleClick(I6)}>{this.state.buttonPressed[5][2]}</button></li>
          </ul>
        </div>
        <div className="buttonGroup2">
          <ul>
            <li><button className={I7_c} onClick = {() => this.handleClick(I7)}>{this.state.buttonPressed[6][2]}</button></li>
            <li><button className={I8_c} onClick = {() => this.handleClick(I8)}>{this.state.buttonPressed[7][2]}</button></li>
            <li><button className={I9_c} onClick = {() => this.handleClick(I9)}>{this.state.buttonPressed[8][2]}</button></li>
            <li><button className={I10_c} onClick = {() => this.handleClick(I10)}>{this.state.buttonPressed[9][2]}</button></li>
            <li><button className={I11_c} onClick = {() => this.handleClick(I11)}>{this.state.buttonPressed[10][2]}</button></li>
            <li><button className={I12_c} onClick = {() => this.handleClick(I12)}>{this.state.buttonPressed[11][2]}</button></li>
            <li><button className={I13_c} onClick = {() => this.handleClick(I13)}>{this.state.buttonPressed[12][2]}</button></li>
          </ul>
        </div>
        <div className="buttonGroup3">
          <ul>
            <li><button className={I14_c} onClick = {() => this.handleClick(I14)}>{this.state.buttonPressed[13][2]}</button></li>
            <li><button className={I15_c} onClick = {() => this.handleClick(I15)}>{this.state.buttonPressed[14][2]}</button></li>
            <li><button className={I16_c} onClick = {() => this.handleClick(I16)}>{this.state.buttonPressed[15][2]}</button></li>
            <li><button className={I17_c} onClick = {() => this.handleClick(I17)}>{this.state.buttonPressed[16][2]}</button></li>
            <li><button className={I18_c} onClick = {() => this.handleClick(I18)}>{this.state.buttonPressed[17][2]}</button></li>
            <li><button className={I19_c} onClick = {() => this.handleClick(I19)}>{this.state.buttonPressed[18][2]}</button></li>
            <li><button className={I20_c} onClick = {() => this.handleClick(I20)}>{this.state.buttonPressed[19][2]}</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default QuestionInput;
