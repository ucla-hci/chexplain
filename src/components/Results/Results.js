import React, { Component } from "react";
import Header from "./Header";
import Observations from "./Observations/Observations";
import Impressions from "./Impressions/Impressions";
import ImageDisplay from "./ImageDisplay";
import ToggleAnnotation from "./Annotation/ToggleAnnotation";
import PriorImages2 from "./PriorImages/PriorImagesCase2";
import PriorImages from "./PriorImages/PriorImages";
import AdjustQuery from "./AdjustQuery";
import HoverWindow from "./HoverWindow";
import TimeConstraint from "../Inputs/TimeConstraint";

const PATIENT_NUMBER = 1;
// change patient number to 2 for your case

//PATIENT OBSERVATION DATA
const observationData = [
  [
    "Cardiomegaly",
    "Edema",
    "Atelectasis",
    "Pleural Effusion",
    "Support Device"
  ], //patient 11
  ["Cardiomegaly", "Pleural Effusion", "Support Device"]
  //TODO: ADD OTHER PATIENT'S OBERVATION HERE
];

//PATIENT OBSERVATION PERCENTAGE DATA
const observationPercentageData = [
  ["<Likely>", "<Likely>", "<Likely>", "<Very Likely>", "<Definitely>"], //patient 11
  ["<Very Likely>", "<Likely>", "<Definitely>"]
  //TODO: ADD OTHER PATIENT'S OBERSVATION CONFIDENCE HERE
];

//PATIENT IMPRESSION DATA
const impressionData = [
  ["Congestive Heart Failure", "Pneumonia"], //patient 11
  ["Pericardial Disease", "Heart Valve Disease", "Congestive Heart Failure"]
  //TODO: ADD OTHER PATIENT'S IMPRESSION HERE
];

//PATIENT IMPRESSION PERCENTAGE DATA
const impressionPercentageData = [
  ["<Likely>", "<Likely>"], //patient 11
  ["<Likely>", "<Likely>", "<Likely>"]
  //TODO: ADD OTHER PATIENT'S IMPRESSION CONFIDENCE HERE
];

class Results extends Component {
  constructor(props) {
    super(props);
    this.highlightObsFromImpression = this.highlightObsFromImpression.bind(
      this
    );
    this.highlightObsFromAnnotation = this.highlightObsFromAnnotation.bind(
      this
    );
    this.highlightImpression = this.highlightImpression.bind(this);
    this.state = {
      imageurl: this.props.dataFromImage,
      timeConstraint: this.props.dataFromSlider,
      questionInput: this.props.dataFromQuestion,
      observations: observationData[this.props.imageIndex], //change later so its different for every patient
      observationsPercentage: observationPercentageData[this.props.imageIndex],
      impressions: impressionData[this.props.imageIndex],
      impressionsPercentage: impressionPercentageData[this.props.imageIndex],
      priorImagesOpened: false,
      age: this.props.patientAge,
      gender: this.props.patientGender,
      clickedObservation: [],
      clickedImpression: "",
      clickedComponent: ""
    };
  }

  // NOTE: this function highlights observation base on an impression that is clicked/interact with
  highlightObsFromImpression(impression) {
    let tempList = [];
    if (this.props.imageIndex === 0) {
      switch (impression) {
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
    } else if (this.props.imageIndex === 1) {
      // TODO: CONNECT GIVEN IMPRESSION TO RELATED OBSERVATION LIKE ABOVE, PUSH RELATED OBERVSATION INTO TEMP LIST
      switch (impression) {
        case this.state.impressions[0]: //if clicked impression is impressions[0], then highlight edema and pleural
          tempList.push("Cardiomegaly");
          tempList.push("Pleural Effusion");
          break;
        case this.state.impressions[1]:
          tempList.push("Cardiomegaly");
          break;
        case this.state.impressions[2]:
          tempList.push("Pleural Effusion");
          tempList.push("Cardiomegaly");
          break; // TODO: CONNECT GIVEN IMPRESSION TO RELATED OBSERVATION LIKE ABOVE, PUSH RELATED OBERVSATION INTO TEMP LIST
      }
    }
    //map through observation to highlight them
    this.state.observations.map(currElement => {
      //clear all previous highlights
      document.getElementById(currElement).style.color = "#B0B0B0";
      document.getElementById(currElement).style.fontWeight = "lighter";
      document.getElementById(
        "triangle" + currElement.replace(/ /g, "")
      ).style.display = "none";
    });
    tempList.map(currElement => {
      document.getElementById(currElement).style.color = "#FFFFFF"; //sets color of clicked currElement to blue
      document.getElementById(currElement).style.fontWeight = "600";
      if (this.props.imageIndex === 0) {
        if (currElement !== "Cardiomegaly" && currElement !== "Support Device")
          document.getElementById(
            "triangle" + currElement.replace(/ /g, "")
          ).style.display = "inline";
      } else {
        if (currElement !== "Support Device")
          document.getElementById(
            "triangle" + currElement.replace(/ /g, "")
          ).style.display = "inline";
      }
    });
    this.setState({
      //this call allows related annotation to be highlighted
      clickedObservation: tempList
    });
  }

  // NOTE: this function highlights observation based on list provided by annotation on what to highlight
  highlightObsFromAnnotation(observationList) {
    //observationList is passed in from annotations
    //clear prev obs highlights
    this.state.observations.map(currElement => {
      //clear all previous highlights
      document.getElementById(currElement).style.color = "#B0B0B0";
      document.getElementById(currElement).style.fontWeight = "lighter";
      document.getElementById(
        "triangle" + currElement.replace(/ /g, "")
      ).style.display = "none";
    });
    //highlight related ones
    observationList.map(currElement => {
      document.getElementById(currElement).style.color = "#FFFFFF"; //sets color of clicked currElement to blue
      document.getElementById(currElement).style.fontWeight = "600";
      if (this.props.imageIndex === 0) {
        if (currElement !== "Cardiomegaly" && currElement !== "Support Device")
          document.getElementById(
            "triangle" + currElement.replace(/ /g, "")
          ).style.display = "inline";
      } else {
        if (currElement !== "Support Device")
          document.getElementById(
            "triangle" + currElement.replace(/ /g, "")
          ).style.display = "inline";
      }
    });
    this.highlightImpression(observationList); //call highlight impression to highlight impression related to each observation
  }

  // NOTE: highlights impression based on given observation
  highlightImpression(observation) {
    //observation is given as a list
    //clear impression colors
    const { impressions } = this.state;
    this.state.impressions.map(currElement => {
      //clears style
      document.getElementById(currElement).style.color = "#B0B0B0";
      document.getElementById(currElement).style.fontWeight = "lighter";
    });
    //link observation and related impression
    observation.map(currElement => {
      if (this.props.imageIndex === 0) {
        switch (currElement) {
          case "Edema":
            document.getElementById(impressions[0]).style.color = "#FFFFFF";
            document.getElementById(impressions[0]).style.fontWeight = "600";
            break;
          case "Pleural Effusion":
            document.getElementById(impressions[0]).style.color = "#FFFFFF";
            document.getElementById(impressions[0]).style.fontWeight = "600";
            document.getElementById(impressions[1]).style.color = "#FFFFFF";
            document.getElementById(impressions[1]).style.fontWeight = "600";
            break;
          case "Atelectasis":
            document.getElementById(impressions[1]).style.color = "#FFFFFF";
            document.getElementById(impressions[1]).style.fontWeight = "600";
        }
      } else if (this.props.imageIndex === 1) {
        switch (currElement) {
          case "Cardiomegaly":
            document.getElementById(impressions[0]).style.color = "#FFFFFF";
            document.getElementById(impressions[0]).style.fontWeight = "600";
            document.getElementById(impressions[1]).style.color = "#FFFFFF";
            document.getElementById(impressions[1]).style.fontWeight = "600";
            document.getElementById(impressions[2]).style.color = "#FFFFFF";
            document.getElementById(impressions[2]).style.fontWeight = "600";
            break;
          case "Pleural Effusion":
            document.getElementById(impressions[0]).style.color = "#FFFFFF";
            document.getElementById(impressions[0]).style.fontWeight = "600";
            document.getElementById(impressions[2]).style.color = "#FFFFFF";
            document.getElementById(impressions[2]).style.fontWeight = "600";
            break;
          // TODO: BASE ON OBSERVATION, HIGHLIGHT RELATED IMPRESSION WITH SWITCH STATEMENT LIKE ABOVE,
          // BUT IT'S FOR YOUR OWN CASE
        }
      }
    });
  }

  callbackClickedComponent = dataFromChild => {
    this.setState({
      clickedComponent: dataFromChild
    });
  };

  callbackFromQuestion = dataFromChild => {
    this.setState({
      questionInput: dataFromChild
    });
  };

  callbackFromTime = dataFromChild => {
    this.setState({
      timeConstraint: dataFromChild
    });
    console.log(dataFromChild);
  };

  callbackFromPriorImages = dataFromChild => {
    this.setState({
      priorImagesOpened: dataFromChild
    });
  };

  // NOTE: callback from observations when an observation is clicked
  callbackFromObservations = dataFromChild => {
    let tempList = [];
    tempList.push(dataFromChild);
    this.setState({
      clickedObservation: tempList
    });
    this.highlightImpression(tempList);
  };

  // NOTE: callback from impression for clicked impression
  callbackFromImpressions = dataFromChild => {
    this.setState({
      clickedImpression: dataFromChild
    });
    this.highlightObsFromImpression(dataFromChild);
  };

  // NOTE: callback from annotation for observation list related to clicked annotation
  callbackfromAnnotationsObs = dataFromChild => {
    this.setState({
      clickedObservation: dataFromChild
    });
    this.highlightObsFromAnnotation(dataFromChild);
  };

  render() {
    let resultpart1 = (
      <div className="resultpart1">
        <Header patientAge={this.state.age} patientGender={this.state.gender} />
        <ImageDisplay url={this.state.imageurl} />
        <ToggleAnnotation
          clickedComponent={this.state.clickedComponent}
          questionInput={this.state.questionInput}
          statMode={this.state.timeConstraint}
          imageIndex={this.props.imageIndex}
          callbackClickedComponent={this.callbackClickedComponent}
          callbackFromParent={this.callbackfromAnnotationsObs}
          clickedObservation={this.state.clickedObservation}
          display={this.state.questionInput}
        />
        {!this.state.timeConstraint && (
          <AdjustQuery
            dataFromQuestion={this.state.questionInput}
            dataFromTime={this.state.timeConstraint}
            callbackFromParentTime={this.callbackFromTime}
            callbackFromParentQuestion={this.callbackFromQuestion}
          />
        )}

        <Observations
          clickedComponent={this.state.clickedComponent}
          callbackClickedComponent={this.callbackClickedComponent}
          callbackFromParent={this.callbackFromObservations}
          clickedImpression={this.state.clickedImpression}
          observations={this.state.observations}
          percentages={this.state.observationsPercentage}
          statMode={this.state.timeConstraint}
          imageIndex={this.props.imageIndex}
        />
        <Impressions
          callbackClickedComponent={this.callbackClickedComponent}
          clickedComponent={this.state.clickedComponent}
          callbackFromParent={this.callbackFromImpressions}
          impressions={this.state.impressions}
          observations={this.state.observations}
          percentages={this.state.impressionsPercentage}
          statMode={this.state.timeConstraint}
        />
        <TimeConstraint
          type={false}
          data={this.state.timeConstraint}
          callbackFromParent={this.callbackFromTime}
        />
        <div className="returnButton1" onClick={() => window.location.reload()}>
          <div className="text"> Return </div>
        </div>
      </div>
    );
    let resultpart2 = ( //prior images
      <div>
        {this.props.imageIndex === 0 ? (
          <PriorImages
            currentImage={this.state.imageurl}
            patientAge={this.state.age}
            patientGender={this.state.gender}
            callbackFromParent={this.callbackFromPriorImages}
          />
        ) : (
          <PriorImages2
            currentImage={this.state.imageurl}
            patientAge={this.state.age}
            patientGender={this.state.gender}
            callbackFromParent={this.callbackFromPriorImages}
          />
        )}
      </div>
    );
    return (
      <div>
        {!this.state.priorImagesOpened && resultpart1}
        {!this.state.timeConstraint && resultpart2}
      </div>
    );
  }
}
// <ResultsColumns currentValue={this.props.dataFromSlider}/>
// <PriorImages/>
// <Annotations display={this.props.dataFromQuestion}/>
export default Results;
