import React, {Component} from 'react';
import Header from './Header';
import QuestionInputSelected from './QuestionInputSelected';
import TimeConstraintSelected from './TimeConstraintSelected';
import Observations from './Observations';
import Impressions from './Impressions';
import ImageDisplay from './ImageDisplay';
import ToggleAnnotation from './ToggleAnnotation';
import PriorImages from './PriorImages';
import AdjustQuery from './AdjustQuery';
import HoverWindow from './HoverWindow';

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
      observations: ["Cardiomegaly","Edema","Atelectasis","Pleural Effusion", "Support Device"], //to be passed here by backend
      observationsPercentage: ["<60%>", "<78%>", "<55%>", "<84%>", "<93%>"],
      impressions: ["Congestive Heart Failure", "Pneumonia", "Lung Cancer"],
      priorImagesOpened: false,
      age: this.props.patientAge,
      gender: this.props.patientGender,
      clickedObservation: [],
      clickedImpression: ""
    }
  }

  highlightObsFromImpression(impression){
    //sets which observation should be highlighted
    let tempList = [];
    switch(impression){
      case this.state.impressions[0]:
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
    //map through observation to highlight them
    this.state.observations.map((currElement) => { //clear all previous highlights
      document.getElementById(currElement).style.color = "#CDCDCD";
    });
    tempList.map((currElement) => {
      document.getElementById(currElement).style.color = "#42C0FC";
    });
    this.setState({ //this call allows related annotation to be highlighted
      clickedObservation: tempList
    });
  }

  highlightObsFromAnnotation(observationList){
    //clear prev obs highlights
    this.state.observations.map((currElement) => { //clear all previous highlights
      document.getElementById(currElement).style.color = "#CDCDCD";
    });
    //highlight related ones
    observationList.map((currElement) => {
      document.getElementById(currElement).style.color = "#42C0FC";
    });
    this.highlightImpression(observationList);
  }

  highlightImpression(observation){
    //clear impression colors
    const {impressions} = this.state;
    this.state.impressions.map((currElement) => {
      document.getElementById(currElement).style.color = "#CDCDCD";
    });
    //link observation and related impression
    observation.map((currElement) => {
      switch(currElement){
        case "Edema":
          document.getElementById(impressions[0]).style.color = "#42C0FC";
          break;
        case "Pleural Effusion":
          document.getElementById(impressions[0]).style.color = "#42C0FC";
          document.getElementById(impressions[1]).style.color = "#42C0FC";
          document.getElementById(impressions[2]).style.color = "#42C0FC";
          break;
        case "Atelectasis":
          document.getElementById(impressions[1]).style.color = "#42C0FC";
      }
    });
  }

  callbackFromQuestion = (dataFromChild) => {
    this.setState({
      questionInput: dataFromChild
    });
  }

  //NOTE: Inputs class does not have updated time constraint, but doesn't concern results for now
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
        <ToggleAnnotation callbackFromParent={this.callbackfromAnnotationsObs} clickedObservation={this.state.clickedObservation} display={this.state.questionInput}/>
        <AdjustQuery dataFromQuestion={this.state.questionInput}
          dataFromTime={this.state.timeConstraint}
          callbackFromParentTime={this.callbackFromTime}
          callbackFromParentQuestion={this.callbackFromQuestion}/>
        <Observations callbackFromParent={this.callbackFromObservations} clickedImpression={this.state.clickedImpression} observations={this.state.observations} percentages={this.state.observationsPercentage}/>
        <Impressions callbackFromParent={this.callbackFromImpressions} impressions={this.state.impressions} observations={this.state.observations}/>
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
