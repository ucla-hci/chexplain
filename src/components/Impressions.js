import React, {Component} from 'react';

class Impressions extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          inputsSelected: [],
          inputsSet: new Set(),
          buttonPressed: [["QT1",false], ["QT2",false], ["QT3",false], ["QT4",false], ["QT5",false], ["QT6",false]]
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
            QT6_c = this.state.buttonPressed[5][1]? "pressed":"QT6";
        var QT1 = "QT1", QT2 = "QT2", QT3 = "QT3", QT4 = "QT4", QT5 = "QT5", QT6 = "QT6";
        return (
          <div className="Impressions">
            <h1>Impressions</h1>
            <div className="buttonGroup">
                <ul>
                    <li>
                        <button className={QT1_c} onClick = {() => this.handleClick(QT1)}>Strange nodes</button>
                        <div class="divider"/>
                    </li>
                    <li>
                        <button className={QT2_c} onClick = {() => this.handleClick(QT2)}>Wide Eyes</button>
                        <div class="divider"/>
                    </li>
                    <li>
                        <button className={QT3_c} onClick = {() => this.handleClick(QT3)}>RunTimeError</button>
                        <div class="divider"/>
                    </li>
                    <li>
                        <button className={QT4_c} onClick = {() => this.handleClick(QT4)}>More Nodes</button>
                        <div class="divider"/>
                    </li>
                    <li>
                        <button className={QT5_c} onClick = {() => this.handleClick(QT5)}>Other finding</button>
                        <div class="divider"/>
                    </li>
                    <li>
                        <button className={QT6_c} onClick = {() => this.handleClick(QT6)}>Errno 2: Lung not found</button>
                    </li>
                </ul>
            </div>
          </div>
        );
    }
}
export default Impressions;
