import React, { Component } from "react";
import Header from "./Header";
import TimeConstraint from "./TimeConstraint";
import QuestionInput from "./QuestionInput";
import Results from "../Results/Results";
import SelectPatient from "./SelectPatient";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromSlider: false, //Time Constraint, not most updated after going in output page
      finishedAnalyze: false,
      questionInput: [],
      imageurl:
        "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp11_view1_frontal.jpg?alt=media&token=fe4a268d-8e4d-4c84-8392-78e54631c646",
      gender: "Female",
      age: "19",
      imageIndex: 0
    };
  }

  myCallBackFromSlider = dataFromChild => {
    console.log(dataFromChild);
    this.setState({
      dataFromSlider: dataFromChild
    });
  };

  myCallBackFromHeader = dataFromChild => {
    console.log(dataFromChild);
    this.setState({
      finishedAnalyze: dataFromChild
    });
  };

  myCallBackFromQuestionInput = dataFromChild => {
    console.log(dataFromChild);
    this.setState({
      questionInput: dataFromChild
    });
  };

  myCallBackFromImage = (urlFromChild, patientDataFromChild, index) => {
    this.setState({
      imageurl: urlFromChild,
      gender: patientDataFromChild[0],
      age: patientDataFromChild[1],
      imageIndex: index
    });
    console.log(this.state.gender + " " + this.state.age);
    // //I8(Shortness of breath), I9(Cough), I17(Cardiac), I7(Chest Pain), I26(Pneumonia)
    // //focus on chest pain for case 1, and cough, short of breath for case 2
    // //uncolor all labels that might be highlighted
    // document.getElementById("I7").style.color = "white";
    // document.getElementById("I8").style.color = "white";
    // document.getElementById("I9").style.color = "white";
    // if (index === 0) {
    //   document.getElementById("I7").style.color = "yellow";
    // } else if (index === 1) {
    //   document.getElementById("I8").style.color = "yellow";
    //   document.getElementById("I9").style.color = "yellow";
    // }
  };

  render() {
    let results = (
      <Results
        dataFromImage={this.state.imageurl}
        patientGender={this.state.gender}
        patientAge={this.state.age}
        dataFromSlider={this.state.dataFromSlider}
        imageIndex={this.state.imageIndex}
        dataFromQuestion={this.state.questionInput}
      />
    );
    let inputs = (
      <div>
        <TimeConstraint
          type={true}
          data={false}
          callbackFromParent={this.myCallBackFromSlider}
        />
        <SelectPatient callbackFromParent={this.myCallBackFromImage} />
        <QuestionInput
          type={true}
          imageIndex={this.state.imageIndex}
          currentSet={this.state.questionInput}
          callbackFromParent={this.myCallBackFromQuestionInput}
        />
        <Header
          gender={this.state.gender}
          age={this.state.age}
          callbackFromParentLoading={this.myCallBackFromHeader}
          callbackFromParentImage={this.myCallBackFromImage}
        />
      </div>
    );
    return (
      <div>
        {!this.state.finishedAnalyze && inputs}
        {this.state.finishedAnalyze && results}
      </div>
    );
  }
}

export default Inputs;
