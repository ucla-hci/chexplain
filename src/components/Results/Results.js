import React, {Component} from 'react';
import Header from './Header';
import Observations from './Observations';
import Impressions from './Impressions';
import ImageDisplay from './ImageDisplay';
import ToggleAnnotation from './ToggleAnnotation';
import PriorImages from './PriorImagesCase2';
import AdjustQuery from './AdjustQuery';
import HoverWindow from './HoverWindow';

const PATIENT_NUMBER = 0;
// change patient number to 1 for your case

//PATIENT OBSERVATION DATA
const observationData = [
  ["Cardiomegaly","Edema","Atelectasis","Pleural Effusion", "Support Device"], //patient 11
  //TODO: ADD OTHER PATIENT'S OBERVATION HERE
];

//PATIENT OBSERVATION PERCENTAGE DATA
const observationPercentageData = [
  ["<60%>", "<78%>", "<55%>", "<84%>", "<93%>"], //patient 11
  //TODO: ADD OTHER PATIENT'S OBERSVATION CONFIDENCE HERE
];

//PATIENT IMPRESSION DATA
const impressionData = [
  ["Congestive Heart Failure", "Pneumonia", "Lung Cancer"], //patient 11
  //TODO: ADD OTHER PATIENT'S IMPRESSION HERE
];

//PATIENT IMPRESSION PERCENTAGE DATA
const impressionPercentageData = [
  ["<60%>", "<30%>", "<5%>"], //patient 11
  //TODO: ADD OTHER PATIENT'S IMPRESSION CONFIDENCE HERE
];

class Results extends Component {
  constructor(props){
    super(props);
    this.highlightObsFromImpression = this.highlightObsFromImpression.bind(this);
    this.highlightObsFromAnnotation = this.highlightObsFromAnnotation.bind(this);
    this.highlightImpression = this.highlightImpression.bind(this);
    this.state={
      imageurl: this.props.dataFromImage,
      timeConstraint: this.props.dataFromSlider,
      questionInput: this.props.dataFromQuestion,
      observations: observationData[PATIENT_NUMBER], //change later so its different for every patient
      observationsPercentage: observationPercentageData[PATIENT_NUMBER],
      impressions: impressionData[PATIENT_NUMBER],
      impressionsPercentage: observationPercentageData[PATIENT_NUMBER],
      priorImagesOpened: false,
      age: this.props.patientAge,
      gender: this.props.patientGender,
      clickedObservation: [],
      clickedImpression: "",
      clickedComponent: ""
    }
  }

  // NOTE: this function highlights observation base on an impression that is clicked/interact with
  highlightObsFromImpression(impression){
    let tempList = [];
    if(PATIENT_NUMBER===0){
      switch(impression){
        case this.state.impressions[0]: //if clicked impression is impressions[0], then highlight edema and pleural
          tempList.push("Edema");
          tempList.push("Pleural Effusion");
          break;
        case this.state.impressions[1]:
          tempList.push("Atelectasis");
          tempList.push("Pleural Effusion");
          break;
        case this.state.impressions[2]:
          tempList.push("Pleural Effusion");
          break;
      }
    }else if(PATIENT_NUMBER===1){
      // TODO: CONNECT GIVEN IMPRESSION TO RELATED OBSERVATION LIKE ABOVE, PUSH RELATED OBERVSATION INTO TEMP LIST
    }
    //map through observation to highlight them
    this.state.observations.map((currElement) => { //clear all previous highlights
      document.getElementById(currElement).style.color = "#B0B0B0";
      document.getElementById(currElement).style.fontWeight = "lighter";
    });
    tempList.map((currElement) => {
      document.getElementById(currElement).style.color = "#FFFFFF"; //sets color of clicked currElement to blue
      document.getElementById(currElement).style.fontWeight = "600";
    });
    this.setState({ //this call allows related annotation to be highlighted
      clickedObservation: tempList
    });
  }

  // NOTE: this function highlights observation based on list provided by annotation on what to highlight
  highlightObsFromAnnotation(observationList){ //observationList is passed in from annotations
    //clear prev obs highlights
    this.state.observations.map((currElement) => { //clear all previous highlights
      document.getElementById(currElement).style.color = "#B0B0B0";
      document.getElementById(currElement).style.fontWeight = "lighter";
    });
    //highlight related ones
    observationList.map((currElement) => {
      document.getElementById(currElement).style.color = "#FFFFFF"; //sets color of clicked currElement to blue
      document.getElementById(currElement).style.fontWeight = "600";
    });
    this.highlightImpression(observationList); //call highlight impression to highlight impression related to each observation
  }

  // NOTE: highlights impression based on given observation
  highlightImpression(observation){ //observation is given as a list
    //clear impression colors
    const {impressions} = this.state;
    this.state.impressions.map((currElement) => { //clears style
      document.getElementById(currElement).style.color = "#B0B0B0";
      document.getElementById(currElement).style.fontWeight = "lighter";
    });
    //link observation and related impression
    observation.map((currElement) => {
      if(PATIENT_NUMBER===0){
        switch(currElement){
          case "Edema":
            document.getElementById(impressions[0]).style.color = "#FFFFFF";
            document.getElementById(impressions[0]).style.fontWeight = "600";
            break;
          case "Pleural Effusion":
            document.getElementById(impressions[0]).style.color = "#FFFFFF";
            document.getElementById(impressions[0]).style.fontWeight = "600";
            document.getElementById(impressions[1]).style.color = "#FFFFFF";
            document.getElementById(impressions[1]).style.fontWeight = "600";
            document.getElementById(impressions[2]).style.color = "#FFFFFF";
            document.getElementById(impressions[2]).style.fontWeight = "600";
            break;
          case "Atelectasis":
            document.getElementById(impressions[1]).style.color = "#FFFFFF";
            document.getElementById(impressions[1]).style.fontWeight = "600";
        }
      }else if(PATIENT_NUMBER===1){
        // TODO: BASE ON OBSERVATION, HIGHLIGHT RELATED IMPRESSION WITH SWITCH STATEMENT LIKE ABOVE,
        // BUT IT'S FOR YOUR OWN CASE
      }
    });
  }

  callbackClickedComponent = (dataFromChild) => {
    this.setState({
      clickedComponent: dataFromChild
    });
  }

  callbackFromQuestion = (dataFromChild) => {
    this.setState({
      questionInput: dataFromChild
    });
  }

  callbackFromTime = (dataFromChild) => {
    this.setState({
      timeConstraint: dataFromChild
    });
  }

  callbackFromPriorImages = (dataFromChild) => {
    this.setState({
      priorImagesOpened: dataFromChild
    });
  }

  // NOTE: callback from observations when an observation is clicked
  callbackFromObservations = (dataFromChild) => {
    let tempList = [];
    tempList.push(dataFromChild);
    this.setState({
      clickedObservation: tempList
    });
    this.highlightImpression(tempList);
  }

  // NOTE: callback from impression for clicked impression
  callbackFromImpressions = (dataFromChild) => {
    this.setState({
      clickedImpression: dataFromChild
    });
    this.highlightObsFromImpression(dataFromChild);
  }

  // NOTE: callback from annotation for observation list related to clicked annotation
  callbackfromAnnotationsObs = (dataFromChild) => {
    this.setState({
      clickedObservation: dataFromChild
    });
    this.highlightObsFromAnnotation(dataFromChild);
  }


  render(){
    let resultpart1 = (
      <div className="resultpart1">
        <Header patientAge={this.state.age} patientGender={this.state.gender}/>
        <ImageDisplay url={this.state.imageurl}/>
        <ToggleAnnotation clickedComponent={this.state.clickedComponent}
          callbackClickedComponent={this.callbackClickedComponent}
          callbackFromParent={this.callbackfromAnnotationsObs}
          clickedObservation={this.state.clickedObservation} display={this.state.questionInput}/>
        <AdjustQuery dataFromQuestion={this.state.questionInput}
          dataFromTime={this.state.timeConstraint}
          callbackFromParentTime={this.callbackFromTime}
          callbackFromParentQuestion={this.callbackFromQuestion}/>
        <Observations clickedComponent={this.state.clickedComponent}
          callbackClickedComponent={this.callbackClickedComponent}
          callbackFromParent={this.callbackFromObservations}
          clickedImpression={this.state.clickedImpression}
          observations={this.state.observations} percentages={this.state.observationsPercentage}/>
        <Impressions callbackClickedComponent={this.callbackClickedComponent}
          clickedComponent={this.state.clickedComponent}
          callbackFromParent={this.callbackFromImpressions}
          impressions={this.state.impressions} observations={this.state.observations}
          percentages={this.state.observationsPercentage}/>
      </div>
    );
    let resultpart2 = ( //prior images
      <div>
      <PriorImages currentImage={this.state.imageurl} patientAge={this.state.age} patientGender={this.state.gender} callbackFromParent={this.callbackFromPriorImages}/>
      </div>
    );
    return (
      <div>
        {
          !this.state.priorImagesOpened && resultpart1
        }
        {
          resultpart2
        }
      </div>
    );
  }
}
// <ResultsColumns currentValue={this.props.dataFromSlider}/>
// <PriorImages/>
// <Annotations display={this.props.dataFromQuestion}/>
export default Results;
