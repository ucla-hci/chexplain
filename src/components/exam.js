import React, { Component } from "react";

class Exam extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          inputsSelected: [],
          inputsSet: new Set(),
          buttonPressed: [["QT1",false], ["QT2",false], ["QT3",false], ["QT4",false], ["QT5",false], ["QT6",false],
            ["QT7", false], ["QT8", false], ["QT9", false], ["QT10", false], ["QT11", false], ["QT12", false], ["QT13", false]]
        };
      }
    handleClick(whichbutton){
        console.log(whichbutton);
        this.state.buttonPressed.map((buttons) => {
          if(whichbutton===buttons[0]&&!buttons[1]){
            buttons[1] = true;
            this.state.inputsSet.add(buttons[0]);
          }else if(whichbutton===buttons[0]&&buttons[1]){
            buttons[1] = false;
            this.state.inputsSet.delete(buttons[0]);
          }
        });
        this.state.inputsSelected.map(item => {
          if(whichbutton===item){
            console.log("Button already pushed");
          }
        });
        this.setState({
          inputsSelected:[...this.state.inputsSelected, whichbutton]
        });
      }
    render(){
        var QT1_c = this.state.buttonPressed[0][1]? "pressed":"QT1",
            QT2_c = this.state.buttonPressed[1][1]? "pressed":"QT2",
            QT3_c = this.state.buttonPressed[2][1]? "pressed":"QT3",
            QT4_c = this.state.buttonPressed[3][1]? "pressed":"QT4",
            QT5_c = this.state.buttonPressed[4][1]? "pressed":"QT5",
            QT6_c = this.state.buttonPressed[5][1]? "pressed":"QT6",
            QT7_c = this.state.buttonPressed[6][1]? "pressed":"QT7",
            QT8_c = this.state.buttonPressed[7][1]? "pressed":"QT8",
            QT9_c = this.state.buttonPressed[8][1]? "pressed":"QT9",
            QT10_c = this.state.buttonPressed[9][1]? "pressed":"QT10",
            QT11_c = this.state.buttonPressed[10][1]? "pressed":"QT11",
            QT12_c = this.state.buttonPressed[11][1]? "pressed":"QT12",
            QT13_c = this.state.buttonPressed[12][1]? "pressed":"QT13";
        var QT1 = "QT1", QT2 = "QT2", QT3 = "QT3", QT4 = "QT4", QT5 = "QT5", QT6 = "QT6";
        var QT7 = "QT7", QT8 = "QT8", QT9 = "QT9", QT10 = "QT10", QT11 = "QT11", QT12 = "QT12", QT13 = "QT13";
        return(
            <div className="Exam2">
              <h1>Examination</h1>
                <div className = "scroll">
                     <button className={QT1_c} onClick = {() => this.handleClick(QT1)}>Lung Cancer</button>
                     <button className={QT2_c} onClick = {() => this.handleClick(QT2)}>Lung Cancer</button>
                     <button className={QT3_c} onClick = {() => this.handleClick(QT3)}>Lung Cancer</button>
                     <button className={QT4_c} onClick = {() => this.handleClick(QT4)}>Lung Cancer</button>
                     <button className={QT5_c} onClick = {() => this.handleClick(QT5)}>Lung Cancer</button>
                     <button className={QT6_c} onClick = {() => this.handleClick(QT6)}>Lung Cancer</button>
                     <button className={QT7_c} onClick = {() => this.handleClick(QT7)}>Lung Cancer</button>
                     <button className={QT8_c} onClick = {() => this.handleClick(QT8)}>Lung Cancer</button>
                     <button className={QT9_c} onClick = {() => this.handleClick(QT9)}>Lung Cancer</button>
                     <button className={QT10_c} onClick = {() => this.handleClick(QT10)}>Lung Cancer</button>
                     <button className={QT11_c} onClick = {() => this.handleClick(QT11)}>Lung Cancer</button>
                     <button className={QT12_c} onClick = {() => this.handleClick(QT12)}>Lung Cancer</button>
                     <button className={QT13_c} onClick = {() => this.handleClick(QT13)}>Lung Cancer</button>
                </div>
            </div>
        );
    }
}

export default Exam;
