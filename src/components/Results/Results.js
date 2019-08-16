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

  callbackFromObservations = (dataFromChild) => {
    let tempList = [];
    tempList.push(dataFromChild);
    this.setState({
      clickedObservation: tempList
    });
  }

  // NOTE: callback from impression for clicked impression
  callbackFromImpressions = (dataFromChild) => {
    this.setState({
      clickedImpression: dataFromChild
    });
  }

  // NOTE: callback from impression for observation list related to clicked impression
  callbackfromImpressionsObs = (dataFromChild) => {
    this.setState({
      clickedObservation: dataFromChild
    });
  }


  render(){
    let resultpart1 = (
      <div className="resultpart1">
        <Header patientAge={this.state.age} patientGender={this.state.gender}/>
        <ImageDisplay url={this.state.imageurl}/>
        <ToggleAnnotation clickedObservation={this.state.clickedObservation} display={this.state.questionInput}/>
        <AdjustQuery dataFromQuestion={this.state.questionInput}
          dataFromTime={this.state.timeConstraint}
          callbackFromParentTime={this.callbackFromTime}
          callbackFromParentQuestion={this.callbackFromQuestion}/>
        <Observations callbackFromParent={this.callbackFromObservations} clickedImpression={this.state.clickedImpression} observations={this.state.observations} percentages={this.state.observationsPercentage}/>
        <Impressions callbackFromParent={this.callbackFromImpressions} callbackFromParent2={this.callbackfromImpressionsObs} impressions={this.state.impressions} observations={this.state.observations}/>
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
