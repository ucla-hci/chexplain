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
                      ["I19", false, "Diaphragm"], ["I20", false, "Delicates"],["I21", false, "Enlarged Cardiomediastinum"],
                      ["I22", false, "Cardiomegaly"],["I23", false, "Lung Lession"],["I24", false, "Edema"],
                      ["I25", false, "Consolidation"],["I26", false, "Pneumonia"],["I27", false, "Atelectasis"],
                      ["I28", false, "Swelling"],["I29", false, "Stretched or shiny skin"],["I30", false, "Rapid breathing"],
                      ["I31", false, "Fever"],["I32", false, "Fatigue"],["I33", false, "Loss of appetite"],
                      ["I34", false, "Nausea"],["I35", false, "Wheezing"],["I36", false, "Increased heart rate"],
                      ["I37", false, "Confusion or dizziness"],["I38", false, "Smoking History"],["I39", false, "Cancer History"],
                      ["I40", false, "Acute"],["I41", false, "Chronic"],
                      ["I42", false, "Congestive Heart Failure"],["I43", false, "Cirrhosis"],["I44", false, "Tuberculosis"],["I45", false, "Pneumonia"],
                      ["I46", false, "Lung cancer"],["I47", false, "Breast Cancer"],["I48", false, "Infection"],
                      ["I50", false, "Asthma"],["I49", false, "Pulmonary Disease"],[]]
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
    //Group 1, Suspected Observations:
    var I1_c = this.state.buttonPressed[0][1]? "pressed":"I1",
        I2_c = this.state.buttonPressed[1][1]? "pressed":"I2",
        I3_c = this.state.buttonPressed[2][1]? "pressed":"I3",
        I4_c = this.state.buttonPressed[3][1]? "pressed":"I4",
        I5_c = this.state.buttonPressed[4][1]? "pressed":"I5",
        I6_c = this.state.buttonPressed[5][1]? "pressed":"I6",
        I21_c = this.state.buttonPressed[20][1]? "pressed":"I21",
        I22_c = this.state.buttonPressed[21][1]? "pressed":"I22",
        I23_c = this.state.buttonPressed[22][1]? "pressed":"I23",
        I24_c = this.state.buttonPressed[23][1]? "pressed":"I24",
        I25_c = this.state.buttonPressed[24][1]? "pressed":"I25",
        I26_c = this.state.buttonPressed[25][1]? "pressed":"I26",
        I27_c = this.state.buttonPressed[26][1]? "pressed":"I27";
    var I1 = "I1", I2 = "I2", I3 = "I3", I4 = "I4", I5 = "I5", I6 = "I6",I21 = "I21",I22 = "I22",
    I23 = "I23",I24 = "I24",I25 = "I25",I26 = "I26",I27 = "I27";
    // Group 4, Suspected Impression:
    var I50_c = this.state.buttonPressed[49][1]? "pressed":"I50",
        I42_c = this.state.buttonPressed[41][1]? "pressed":"I42",
        I43_c = this.state.buttonPressed[42][1]? "pressed":"I43",
        I44_c = this.state.buttonPressed[43][1]? "pressed":"I44",
        I45_c = this.state.buttonPressed[44][1]? "pressed":"I45",
        I46_c = this.state.buttonPressed[45][1]? "pressed":"I46",
        I47_c = this.state.buttonPressed[46][1]? "pressed":"I47",
        I48_c = this.state.buttonPressed[47][1]? "pressed":"I48",
        I49_c = this.state.buttonPressed[48][1]? "pressed":"I49";
    var I50 = "I50", I42 = "I42", I43 = "I43", I44 = "I44", I45 = "I45", I46 = "I46",I47 = "I47",I48 = "I48",
    I49 = "I49";
    //Group 2 Symptoms
    var I7_c = this.state.buttonPressed[6][1]? "pressed":"I7",
        I8_c = this.state.buttonPressed[7][1]? "pressed":"I8",
        I9_c = this.state.buttonPressed[8][1]? "pressed":"I9",
        I10_c = this.state.buttonPressed[9][1]? "pressed":"I10",
        I11_c = this.state.buttonPressed[10][1]? "pressed":"I11",
        I12_c = this.state.buttonPressed[11][1]? "pressed":"I12",
        I13_c = this.state.buttonPressed[12][1]? "pressed":"I13",
        I28_c = this.state.buttonPressed[27][1]? "pressed":"I28",
        I29_c = this.state.buttonPressed[28][1]? "pressed":"I29",
        I30_c = this.state.buttonPressed[29][1]? "pressed":"I30",
        I31_c = this.state.buttonPressed[30][1]? "pressed":"I31",
        I32_c = this.state.buttonPressed[31][1]? "pressed":"I32",
        I33_c = this.state.buttonPressed[32][1]? "pressed":"I33",
        I34_c = this.state.buttonPressed[33][1]? "pressed":"I34",
        I35_c = this.state.buttonPressed[34][1]? "pressed":"I35",
        I36_c = this.state.buttonPressed[35][1]? "pressed":"I36",
        I37_c = this.state.buttonPressed[36][1]? "pressed":"I37";
    var I7 = "I7", I8 = "I8", I9 = "I9", I10 = "I10", I11 = "I11", I12 = "I12", I13 = "I13",
    I28 = "I28",I29 = "I29",I30 = "I30",I31 = "I31",I32 = "I32",I33 = "I33",I34 = "I34",I35 = "I35",
    I36 = "I36", I37 = "I37";
    // Group 5 Acute or Chronic:
    var I41_c = this.state.buttonPressed[40][1]? "pressed":"I41",
        I40_c = this.state.buttonPressed[39][1]? "pressed":"I40";
    var I41 = "I41", I40 = "I40";
    //Group 3 Regions
    var I14_c = this.state.buttonPressed[13][1]? "pressed":"I14",
        I15_c = this.state.buttonPressed[14][1]? "pressed":"I15",
        I16_c = this.state.buttonPressed[15][1]? "pressed":"I16",
        I17_c = this.state.buttonPressed[16][1]? "pressed":"I17",
        I18_c = this.state.buttonPressed[17][1]? "pressed":"I18",
        I19_c = this.state.buttonPressed[18][1]? "pressed":"I19",
        I20_c = this.state.buttonPressed[19][1]? "pressed":"I20";
    var I14 = "I14", I15 = "I15", I16 = "I16", I17 = "I17", I18 = "I18", I19 = "I19", I20 = "I20";
        // Group 6 History:
    var I39_c = this.state.buttonPressed[38][1]? "pressed":"I39",
        I38_c = this.state.buttonPressed[37][1]? "pressed":"I38";
    var I39 = "I39", I38 = "I38";
    var divName = this.props.type?"QuestionInput":"QuestionInputDialog";
    // <div className="selectedInputs">Selected Questions:&ensp;{this.state.displayInput.join(", ")}</div>
    return (
      <div className={divName}>
        <div className="title"><div className="text">Question Input (Optional)</div></div>
        <button className="clear" onClick = {() => this.handleClear()}>Clear</button>
        <div className="buttonGroup">
        <div className="buttonGroup1">
          <ul>
            <li>Suspected Observations: </li>
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
            <li><button className={I21_c} onClick = {() => this.handleClick(I21)}>{this.state.buttonPressed[20][2]}</button></li>
            <li><button className={I22_c} onClick = {() => this.handleClick(I22)}>{this.state.buttonPressed[21][2]}</button></li>
            <li><button className={I23_c} onClick = {() => this.handleClick(I23)}>{this.state.buttonPressed[22][2]}</button></li>
            <li><button className={I24_c} onClick = {() => this.handleClick(I24)}>{this.state.buttonPressed[23][2]}</button></li>
            <li><button className={I25_c} onClick = {() => this.handleClick(I25)}>{this.state.buttonPressed[24][2]}</button></li>
            <li><button className={I26_c} onClick = {() => this.handleClick(I26)}>{this.state.buttonPressed[25][2]}</button></li>
            <li><button className={I27_c} onClick = {() => this.handleClick(I27)}>{this.state.buttonPressed[26][2]}</button></li>
          </ul>
        </div>
        <div className="buttonGroup4">
          <ul>
            <li>Suspected Impressions: </li>
            <li>
            <button className={I50_c} onClick = {() => this.handleClick(I50)}>{this.state.buttonPressed[49][2]}</button>
            </li>
            <li>
            <button className={I42_c} onClick = {() => this.handleClick(I42)}>{this.state.buttonPressed[41][2]}</button>
            </li>
            <li><button className={I43_c} onClick = {() => this.handleClick(I43)}>{this.state.buttonPressed[42][2]}</button></li>
            <li><button className={I44_c} onClick = {() => this.handleClick(I44)}>{this.state.buttonPressed[43][2]}</button></li>
            <li><button className={I45_c} onClick = {() => this.handleClick(I45)}>{this.state.buttonPressed[44][2]}</button></li>
            <li><button className={I46_c} onClick = {() => this.handleClick(I46)}>{this.state.buttonPressed[45][2]}</button></li>
            <li><button className={I47_c} onClick = {() => this.handleClick(I47)}>{this.state.buttonPressed[46][2]}</button></li>
            <li><button className={I48_c} onClick = {() => this.handleClick(I48)}>{this.state.buttonPressed[47][2]}</button></li>
            <li><button className={I49_c} onClick = {() => this.handleClick(I49)}>{this.state.buttonPressed[48][2]}</button></li>
          </ul>
        </div>
        <div className="buttonGroup2">
          <ul>
            <li>Symptoms: </li>
            <li><button className={I7_c} onClick = {() => this.handleClick(I7)}>{this.state.buttonPressed[6][2]}</button></li>
            <li><button className={I8_c} onClick = {() => this.handleClick(I8)}>{this.state.buttonPressed[7][2]}</button></li>
            <li><button className={I9_c} onClick = {() => this.handleClick(I9)}>{this.state.buttonPressed[8][2]}</button></li>
            <li><button className={I10_c} onClick = {() => this.handleClick(I10)}>{this.state.buttonPressed[9][2]}</button></li>
            <li><button className={I11_c} onClick = {() => this.handleClick(I11)}>{this.state.buttonPressed[10][2]}</button></li>
            <li><button className={I12_c} onClick = {() => this.handleClick(I12)}>{this.state.buttonPressed[11][2]}</button></li>
            <li><button className={I13_c} onClick = {() => this.handleClick(I13)}>{this.state.buttonPressed[12][2]}</button></li>
            <li><button className={I28_c} onClick = {() => this.handleClick(I28)}>{this.state.buttonPressed[27][2]}</button></li>
            <li><button className={I29_c} onClick = {() => this.handleClick(I29)}>{this.state.buttonPressed[28][2]}</button></li>
            <li><button className={I30_c} onClick = {() => this.handleClick(I30)}>{this.state.buttonPressed[29][2]}</button></li>
            <li><button className={I31_c} onClick = {() => this.handleClick(I31)}>{this.state.buttonPressed[30][2]}</button></li>
            <li><button className={I32_c} onClick = {() => this.handleClick(I32)}>{this.state.buttonPressed[31][2]}</button></li>
            <li><button className={I33_c} onClick = {() => this.handleClick(I33)}>{this.state.buttonPressed[32][2]}</button></li>
            <li><button className={I34_c} onClick = {() => this.handleClick(I34)}>{this.state.buttonPressed[33][2]}</button></li>
            <li><button className={I35_c} onClick = {() => this.handleClick(I35)}>{this.state.buttonPressed[34][2]}</button></li>
            <li><button className={I36_c} onClick = {() => this.handleClick(I36)}>{this.state.buttonPressed[35][2]}</button></li>
            <li><button className={I37_c} onClick = {() => this.handleClick(I37)}>{this.state.buttonPressed[36][2]}</button></li>
          </ul>
        </div>
        <div className="buttonGroup5">
          <ul>
            <li>Acute or Chronic: </li>
            <li>
            <button className={I41_c} onClick = {() => this.handleClick(I41)}>{this.state.buttonPressed[40][2]}</button>
            </li>
            <li>
            <button className={I40_c} onClick = {() => this.handleClick(I40)}>{this.state.buttonPressed[39][2]}</button>
            </li>
           </ul>
        </div>
        <div className="buttonGroup3">
          <ul>
            <li>Region: </li>
            <li><button className={I14_c} onClick = {() => this.handleClick(I14)}>{this.state.buttonPressed[13][2]}</button></li>
            <li><button className={I15_c} onClick = {() => this.handleClick(I15)}>{this.state.buttonPressed[14][2]}</button></li>
            <li><button className={I16_c} onClick = {() => this.handleClick(I16)}>{this.state.buttonPressed[15][2]}</button></li>
            <li><button className={I17_c} onClick = {() => this.handleClick(I17)}>{this.state.buttonPressed[16][2]}</button></li>
            <li><button className={I18_c} onClick = {() => this.handleClick(I18)}>{this.state.buttonPressed[17][2]}</button></li>
            <li><button className={I19_c} onClick = {() => this.handleClick(I19)}>{this.state.buttonPressed[18][2]}</button></li>
            <li><button className={I20_c} onClick = {() => this.handleClick(I20)}>{this.state.buttonPressed[19][2]}</button></li>
          </ul>
        </div>
        <div className="buttonGroup6">
          <ul>
            <li>History: </li>
            <li>
            <button className={I39_c} onClick = {() => this.handleClick(I39)}>{this.state.buttonPressed[38][2]}</button>
            </li>
            <li>
            <button className={I38_c} onClick = {() => this.handleClick(I38)}>{this.state.buttonPressed[37][2]}</button>
            </li>
           </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default QuestionInput;
