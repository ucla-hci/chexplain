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

const pericardialExplan = [
  ["5"],
  ["Right lung clear"],
  ['Chest pain','Age > 65','ECG abnormal','Cardiomegaly','Pleural Effusion']
];

const heartvalveExplan = [
  ['10'],
  ['Right and left lung clear'],
  ['Chest pain','Age>60','Cardiomegaly','Short of breath','fever']
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
    this.props.callbackClickedComponent("impressions");
  }

  handleClose(){
    this.setState({
      clicked:""
    });
  }

  render(){
    let congHeartFailure = (
      <HoverWindow title={"Congestive Heart Failure (Factors that influence probability)"}>
        <ImpDetails base="5" pos={congHeartFailureExplan[1]} neg={congHeartFailureExplan[2]}/>
      </HoverWindow>
    );
    let pneumonia = (
      <HoverWindow title={"Pneumonia (Factors that influence probability)"}>
        <ImpDetails base={pneumoniaExplan[0]} pos={pneumoniaExplan[1]} neg={pneumoniaExplan[2]}/>
      </HoverWindow>
    );
    let lungCancer = (
      <HoverWindow title={"Lung Cancer (Factors that influence probability)"}>
        <ImpDetails base={lungCancerExplan[0]} pos={lungCancerExplan[1]} neg={lungCancerExplan[2]}/>
      </HoverWindow>
    );
    let percicardial = (
      <HoverWindow title={"Pericardial Disease (Factors that influence probability)"}>
        <ImpDetails base={pericardialExplan[0]} pos={pericardialExplan[1]} neg={pericardialExplan[2]}/>
      </HoverWindow>
    );
    let heartValve = (
      <HoverWindow title={"Heart Valve Disease (Factors that influence probability)"}>
        <ImpDetails base={heartvalveExplan[0]} pos={heartvalveExplan[1]} neg={heartvalveExplan[2]}/>
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
                return <li id={currElement} onClick={() => this.handleClick(currElement)}>{currElement} {this.props.percentages[index]}</li>
              })
            }
          </ul>
        </div>
      </div>
      <div>
        {
          this.props.clickedComponent === "impressions" && (() => {
            switch(this.state.clicked){
              case "Congestive Heart Failure":
                return congHeartFailure;
              case "Pneumonia":
                return pneumonia;
              case "Lung Cancer":
                return lungCancer;
              case "Pericardial Disease":
                return percicardial;
              case "Heart Valve Disease":
                return heartValve;
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
