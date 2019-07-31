import React, { Component } from "react";

class Exam extends Component {
    constructor(props) {
        super(props);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.state = {
          inputsSelected1: [],
          inputsSet1: new Set(),
          buttonPressed1: [["QT1",false], ["QT2",false], ["QT3",false], ["QT4",false], ["QT5",false]],
          inputsSelected2: [],
          inputsSet2: new Set(),
          buttonPressed2: [["QT6",false], ["QT7",false]],
          inputsSelected3: [],
          inputsSet3: new Set(),
          buttonPressed3: [["QT8",false], ["QT9",false], ["QT10",false], ["QT11",false], ["QT12",false],
          ["QT13",false], ["QT14", false], ["QT15", false], ["QT16", false]],
          viewControl: this.props.currentValue,
        };
        this.initialPressed2 = this.state.buttonPressed2;
        this.initialPressed3 = this.state.buttonPressed3;
        var showExam = "off";
        var showExamHeader = "off";
      }
    handleClick1(whichbutton){
        console.log(whichbutton);
        this.state.buttonPressed1.map((buttons1) => {
          if(whichbutton===buttons1[0]&&!buttons1[1]){
            buttons1[1] = true;
            this.state.inputsSet1.add(buttons1[0]);
          }else {
            buttons1[1] = false;
            this.state.inputsSet1.delete(buttons1[0]);
          }
        });
        this.state.inputsSelected1.map(item => {
          if(whichbutton===item){
            console.log("Button already pushed");
          }
        });
        this.setState({
          inputsSelected1:[whichbutton]
        });
    }
    handleClick2(whichbutton){
      console.log(whichbutton);
      this.state.buttonPressed2.map((buttons2) => {
        if(whichbutton===buttons2[0]&&!buttons2[1]){
          buttons2[1] = true;
          this.state.inputsSet2.add(buttons2[0]);
        }else if(whichbutton===buttons2[0]&&buttons2[1]){
          buttons2[1] = false;
          this.state.inputsSet2.delete(buttons2[0]);
        }
      });
      this.state.inputsSelected2.map(item => {
        if(whichbutton===item){
          console.log("Button already pushed");
        }
      });
      this.setState({
        inputsSelected2:[...this.state.inputsSelected2, whichbutton]
      });
    }
    handleClick3(whichbutton){
      console.log(whichbutton);
      this.state.buttonPressed3.map((buttons3) => {
        if(whichbutton===buttons3[0]&&!buttons3[1]){
          buttons3[1] = true;
          this.state.inputsSet3.add(buttons3[0]);
        }else {
          buttons3[1] = false;
          this.state.inputsSet3.delete(buttons3[0]);
        }
      });
      this.state.inputsSelected3.map(item => {
        if(whichbutton===item){
          console.log("Button already pushed");
        }
      });
      this.setState({
        inputsSelected3:[whichbutton]
      });
    }
    render(){
        var QT1_1 = this.state.buttonPressed1[0][1]? "pressed":"QT1",
            QT1_2 = this.state.buttonPressed1[1][1]? "pressed":"QT2",
            QT1_3 = this.state.buttonPressed1[2][1]? "pressed":"QT3",
            QT1_4 = this.state.buttonPressed1[3][1]? "pressed":"QT4",
            QT1_5 = this.state.buttonPressed1[4][1]? "pressed":"QT5",
            QT2_1 = this.state.buttonPressed2[0][1]? "pressed":"QT6",
            QT2_2 = this.state.buttonPressed2[1][1]? "pressed":"QT7",
            QT3_1 = this.state.buttonPressed3[0][1]? "pressed":"QT8",
            QT3_2 = this.state.buttonPressed3[1][1]? "pressed":"QT9",
            QT3_3 = this.state.buttonPressed3[2][1]? "pressed":"QT10",
            QT3_4 = this.state.buttonPressed3[3][1]? "pressed":"QT11",
            QT3_5 = this.state.buttonPressed3[4][1]? "pressed":"QT12",
            QT3_6 = this.state.buttonPressed3[5][1]? "pressed":"QT13",
            QT3_7 = this.state.buttonPressed3[6][1]? "pressed":"QT14",
            QT3_8 = this.state.buttonPressed3[7][1]? "pressed":"QT15",
            QT3_9 = this.state.buttonPressed3[8][1]? "pressed":"QT16";
        var QT1 = "QT1", QT2 = "QT2", QT3 = "QT3", QT4 = "QT4", QT5 = "QT5", QT6 = "QT6";
        var QT7 = "QT7", QT8 = "QT8", QT9 = "QT9", QT10 = "QT10", QT11 = "QT11", QT12 = "QT12", QT13 = "QT13";
        var QT14 = "QT14", QT15 = "QT15", QT16 = "QT16";
        var sub3_3 = "off";
        var sub3_8 = "off";
        var b3_3 = "red";
        var b3_8 = "red";
        var select = "false";
        if(QT1_1 == "pressed" || QT1_2 == "pressed" ||QT1_3 == "pressed" ||QT1_4 == "pressed" ||QT1_5 == "pressed") {
            select = "select";
        } else {
            select = "false";
        };
        if((QT2_1 == "pressed" || QT2_2 == "pressed")) {
             this.showExam = "Examination";
             console.log(this.showExam + "examination");
        } else {
             this.showExam = "off";
             sub3_3 = "off";
             sub3_8 = "off";
        };
        b3_3 = (QT2_1 === "pressed") ? "red" : "green";
        b3_8 = (QT2_2 === "pressed") ? "red" : "green";
        if(QT3_3 === "pressed" && QT2_1 === "pressed") {
           sub3_3 = "on";
           sub3_8 = "off";
        } else if (QT3_8 === "pressed" && QT2_2 === "pressed") {
           sub3_3 = "off";
           sub3_8 = "on";
        }
        let DiffDiag = (
          <div className="DiffDiag">
          <div className = "impressionHeader"> Impressions </div>
            <div className="buttonGroup">
                <ul>
                    <li>
                        <button className={QT1_1} onClick = {() => this.handleClick1(QT1)}>Pneumonia</button>
                        <div class="divider"/>
                    </li>
                    <li>
                        <button className={QT1_2} onClick = {() => this.handleClick1(QT2)}>Acute Pancreatitis</button>
                        <div class="divider"/>
                    </li>
                    <li>
                        <button className={QT1_3} onClick = {() => this.handleClick1(QT3)}>Pulmonary infarction</button>
                        <div class="divider"/>
                    </li>
                    <li>
                        <button className={QT1_4} onClick = {() => this.handleClick1(QT4)}>TB</button>
                        <div class="divider"/>
                    </li>
                    <li>
                        <button className={QT1_5} onClick = {() => this.handleClick1(QT5)}>Meigs Syndrome</button>
                    </li>
                </ul>
            </div>
          </div>
        );
        let Observations = (
          <div className= "Observations">
          <div className = "observationHeader"> Observations </div>
              <div className="buttonGroup">
                  <ul>
                      <li>
                          <button className={` ${QT2_1} ${select}`}onClick = {() => this.handleClick2(QT6)}>Large right sided pleural effusion &lt;90%&gt;</button>
                          <div class="divider"/>
                      </li>
                      <li>
                          <button className={` ${QT2_2} ${select}`} onClick = {() => this.handleClick2(QT7)}>Small left sided pleural effusion &lt;80%&gt;</button>
                      </li>
                  </ul>
              </div>
          </div>
        );
        let Exam = (
          <div className={this.showExam}>
          <div className = "examinationHeader"> Examinations </div>
          <div className = "scroll">
          <button className={QT3_1} onClick = {() => this.handleClick3(QT8)}>Projection: PA</button>
             <button className={QT3_2} onClick = {() => this.handleClick3(QT9)}>Technical Aspects</button>
             <button className={ `${b3_3} ${QT3_3} `} onClick = {() => this.handleClick3(QT10)}>Homogenous Opacity</button>
             <div className={sub3_3}>
                <div className = {"dropdown"}> <button class="btn"> > </button></div>
                <button className={"sub3_3"}> Right costophrenic angle </button>
                <div className = {"dropdown"}> <button class="btn"> > </button></div>
                <button className={"sub3_3"}> Right hemidiaphragm </button>
                <div className = {"dropdown"}> <button class="btn"> > </button></div>
                <button className={"sub3_3"}> Right sided cardiac contour </button>
             </div>
             <button className={QT3_4} onClick = {() => this.handleClick3(QT11)}>Right Lung: Clear</button>
             <button className={QT3_5} onClick = {() => this.handleClick3(QT12)}>Pneumothorax: No</button>
             <button className={QT3_6} onClick = {() => this.handleClick3(QT13)}>Trachea, heart: Central</button>
             <button className={QT3_7} onClick = {() => this.handleClick3(QT14)}>Left Lung: Clear</button>
             <button className={ `${b3_8} ${QT3_8} `} onClick = {() => this.handleClick3(QT15)}>Left costophrenic angle</button>
             <div className = {sub3_8}>
                <div className = {"dropdown"}> <button class="btn"> > </button></div>
                <button className={"sub3_8"}> Minor Blunting </button>
             </div>
             <button className={QT3_9} onClick = {() => this.handleClick3(QT16)}>Free diagphragmatic gas: No</button>
          </div>
          </div>
        );

        return(
          <div className="Columns">
            {
              this.state.viewControl[0]?
              DiffDiag:
              null
            }
            {
              this.state.viewControl[1]?
              Observations:
              null
            }
            {
              this.state.viewControl[2]?
              Exam:
              null
            }
            {(this.state.showExam = "Examination") ? Exam: null}
          </div>
        );
    }
}

export default Exam;
