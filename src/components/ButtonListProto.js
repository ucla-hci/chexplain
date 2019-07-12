import React, { Component } from "react";

class Exam extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          inputsSelected: [],
          inputsSet: new Set(),
          buttonPressed: [["QT1",false], ["QT2",false], ["QT3",false], ["QT4",false], ["QT5",false], ["QT6",false], 
            ["QT7", false], ["QT8", false], ["QT9", false], ["QT10", false], ["QT11", false], ["QT12", false], ["QT13", false],
            ["QT14",false], ["QT15",false], ["QT16",false], ["QT17",false], ["QT18",false], ["QT19",false], 
            ["QT20", false], ["QT21", false], ["QT22", false], ["QT23", false], ["QT24", false], ["QT25", false]]
        };
        var showObs = "off";
        var showExam = "off";
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
            QT13_c = this.state.buttonPressed[12][1]? "pressed":"QT13",
            QT14_c = this.state.buttonPressed[13][1]? "pressed":"QT14",
            QT15_c = this.state.buttonPressed[14][1]? "pressed":"QT15",
            QT16_c = this.state.buttonPressed[15][1]? "pressed":"QT16",
            QT17_c = this.state.buttonPressed[16][1]? "pressed":"QT17",
            QT18_c = this.state.buttonPressed[17][1]? "pressed":"QT18",
            QT19_c = this.state.buttonPressed[18][1]? "pressed":"QT19",
            QT20_c = this.state.buttonPressed[19][1]? "pressed":"QT20",
            QT21_c = this.state.buttonPressed[20][1]? "pressed":"QT21",
            QT22_c = this.state.buttonPressed[21][1]? "pressed":"QT22",
            QT23_c = this.state.buttonPressed[22][1]? "pressed":"QT23",
            QT24_c = this.state.buttonPressed[23][1]? "pressed":"QT24",
            QT25_c = this.state.buttonPressed[24][1]? "pressed":"QT25";
        var QT1 = "QT1", QT2 = "QT2", QT3 = "QT3", QT4 = "QT4", QT5 = "QT5", QT6 = "QT6";
        var QT7 = "QT7", QT8 = "QT8", QT9 = "QT9", QT10 = "QT10", QT11 = "QT11", QT12 = "QT12", QT13 = "QT13";
        var QT14 = "QT14", QT15 = "QT15", QT16 = "QT16", QT17 = "QT17", QT18 = "QT18", QT19 = "QT19", QT20 = "QT20";
        var QT21 = "QT21", QT22 = "QT22", QT23 = "QT23", QT24 = "QT24", QT25 = "QT25";
        if(QT1_c == "pressed" || QT2_c == "pressed" ||QT3_c == "pressed" ||QT4_c == "pressed" ||QT5_c == "pressed" ||QT6_c == "pressed") {
            this.showObs = "buttonGroup2";
            console.log(this.showObs + "observation")
        } else {
            this.showObs = "off";
        };
        if((QT7_c == "pressed" || QT8_c == "pressed" ||QT9_c == "pressed" ||QT10_c == "pressed" ||QT11_c == "pressed" ||QT12_c == "pressed") && this.showObs != "off") {
            this.showExam = "scroll"
            console.log(this.showExam + "examination")
        } else {
            this.showExam = "off";
        };
        return(
            <div className="Exam">
                <div className="buttonGroup1">
                    <ul>
                        <li>
                            <button className={QT1_c} onClick = {() => this.handleClick(QT1)}>Lung Cancer</button>
                            <div class="divider"/>
                        </li>
                        <li>
                            <button className={QT2_c} onClick = {() => this.handleClick(QT2)}>Pleural Thickening</button>
                            <div class="divider"/>
                        </li>
                        <li>
                            <button className={QT3_c} onClick = {() => this.handleClick(QT3)}>Hilar Nodules</button>
                            <div class="divider"/>
                        </li>
                        <li>
                            <button className={QT4_c} onClick = {() => this.handleClick(QT4)}>More Lung Cancer</button>
                            <div class="divider"/>
                        </li>
                        <li>
                            <button className={QT5_c} onClick = {() => this.handleClick(QT5)}>Impression 6</button>
                            <div class="divider"/>
                        </li>
                        <li>
                            <button className={QT6_c} onClick = {() => this.handleClick(QT6)}>Monkey Brain</button>
                        </li>
                    </ul>
                </div>
                <div className= {this.showObs}>
                    <ul>
                        <li>
                            <button className={QT7_c} onClick = {() => this.handleClick(QT7)}>Strange nodes</button>
                            <div class="divider"/>
                        </li>
                        <li>
                            <button className={QT8_c} onClick = {() => this.handleClick(QT8)}>Wide Eyes</button>
                            <div class="divider"/>
                        </li>
                        <li>
                            <button className={QT9_c} onClick = {() => this.handleClick(QT9)}>RunTimeError</button>
                            <div class="divider"/>
                        </li>
                        <li>
                            <button className={QT10_c} onClick = {() => this.handleClick(QT10)}>More Nodes</button>
                            <div class="divider"/>
                        </li>
                        <li>
                            <button className={QT11_c} onClick = {() => this.handleClick(QT11)}>Other finding</button>
                            <div class="divider"/>
                        </li>
                        <li>
                            <button className={QT12_c} onClick = {() => this.handleClick(QT12)}>Errno 2: Lung not found</button>
                        </li>
                    </ul>
                </div>
                <div className = {this.showExam}>
                     <button className={QT13_c} onClick = {() => this.handleClick(QT13)}>Lung Cancer</button>
                     <button className={QT14_c} onClick = {() => this.handleClick(QT14)}>Lung Cancer</button>
                     <button className={QT15_c} onClick = {() => this.handleClick(QT15)}>Lung Cancer</button>
                     <button className={QT16_c} onClick = {() => this.handleClick(QT16)}>Lung Cancer</button>
                     <button className={QT17_c} onClick = {() => this.handleClick(QT17)}>Lung Cancer</button>
                     <button className={QT18_c} onClick = {() => this.handleClick(QT18)}>Lung Cancer</button>
                     <button className={QT19_c} onClick = {() => this.handleClick(QT19)}>Lung Cancer</button>
                     <button className={QT20_c} onClick = {() => this.handleClick(QT20)}>Lung Cancer</button>
                     <button className={QT21_c} onClick = {() => this.handleClick(QT21)}>Lung Cancer</button>
                     <button className={QT22_c} onClick = {() => this.handleClick(QT22)}>Lung Cancer</button>
                     <button className={QT23_c} onClick = {() => this.handleClick(QT23)}>Lung Cancer</button>
                     <button className={QT24_c} onClick = {() => this.handleClick(QT24)}>Lung Cancer</button>
                     <button className={QT25_c} onClick = {() => this.handleClick(QT25)}>Lung Cancer</button>
                </div>
            </div>
        );
    }
}

export default Exam;