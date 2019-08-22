import React, {Component} from 'react';
import HoverWindow from './HoverWindow';
import ImpDetails from './ImpDetails';

const congHeartFailureExplan = [
  [4],
  ["Heart Evaluable"],
  ["Cardiomegaly", "Pleural Effusion", "Coronary Artery Disease", "Hypertension", "Diabetes", "Obesity"]
];

const pneumoniaExplan = [
  [7],
  ["Right lung and visible left lung Evaulable"],
  ["Actelectasis", "Smoking History", "Pleural Effusion"]
];

const lungCancerExplan = [
  ["<1"],
  ["Right lung and visible left lung Evaulable"],
  ["Pleural Effusion", "Smoking History", "History of Lung Cancer", "Radiation Therapy to the chest"]
];

class Impressions extends Component {
  constructor(props){
    super(props);
    this.state = {
      impressions:this.props.impressions,
      clicked: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  async handleClick(impressions){
    await this.setState({
      clicked: impressions
    });
    this.state.impressions.map((currElement) => {
      document.getElementById(currElement).style.color = "#B0B0B0";
      document.getElementById(currElement).style.fontWeight = "lighter";
    });
    document.getElementById(impressions).style.color = "#FFFFFF"; //sets color of clicked impressions to blue
    document.getElementById(impressions).style.fontWeight = "600";
    this.props.callbackFromParent(this.state.clicked);
  }

  handleClose(){
    this.setState({
      clicked:""
    });
  }

  render(){
    let imp1hover = (
      <HoverWindow title={this.state.impressions[0]+"(Factors that influence probability)"}>
        <ImpDetails base="5" pos={congHeartFailureExplan[1]} neg={congHeartFailureExplan[2]}/>
      </HoverWindow>
    );
    let imp2hover = (
      <HoverWindow title={this.state.impressions[1]+"(Factors that influence probability)"}>
        <ImpDetails base={pneumoniaExplan[0]} pos={pneumoniaExplan[1]} neg={pneumoniaExplan[2]}/>
      </HoverWindow>
    );
    let imp3hover = (
      <HoverWindow title={this.state.impressions[2]+"(Factors that influence probability)"}>
        <ImpDetails base={lungCancerExplan[0]} pos={lungCancerExplan[1]} neg={lungCancerExplan[2]}/>
      </HoverWindow>
    );
    return (
      <div>
      <div className="Impressions">
        <div className="title"><div className="text">Impressions</div></div>
        <div className="obList">
          <ul>
            {
              this.state.impressions.map((currElement, index) => {
                return <li id={currElement} onMouseEnter={() => this.handleClick(currElement)} onMouseLeave={() => this.handleClose()} onClick={() => this.handleClick(currElement)}>{currElement} {this.props.percentages[index]}</li>
              })
            }
          </ul>
        </div>
      </div>
      <div>
        {
          (() => {
            switch(this.state.clicked){
              case "Congestive Heart Failure":
                return imp1hover;
              case "Pneumonia":
                return imp2hover;
              case "Lung Cancer":
                return imp3hover;
              default:
                return null;
            }
          })()
        }
      </div>
      </div>
    );
  }
}

export default Impressions;
