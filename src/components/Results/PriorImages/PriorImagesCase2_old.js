// TODO: CHANGE THIS FILE TO MATCH YOUR CASE
import React, { Component } from "react";
import Magnifier from "../../Magnifier.es";
import { GoX } from "react-icons/go";
import { IconContext } from "react-icons";
import AnnotationBubble from "../Annotation/AnnotationBubble";

//below are case 11 prior images, change it to your prior images
const case21653images = [
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2Fcase%2021653%2Fstudy7.jpg?alt=media&token=173ba65f-b12b-4d7c-b642-b3eeecef7c00",
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2Fcase%2021653%2Fstudy6.jpg?alt=media&token=e9e2d8f3-2ee0-4e31-a921-d6382d30df5b",
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2Fcase%2021653%2Fstudy5.jpg?alt=media&token=9fd44398-0872-426c-bfce-066d03b285fa",
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2Fcase%2021653%2Fstudy1.jpg?alt=media&token=98ee4454-fa0d-47b1-8d9d-c95aa6170f05"
];

//below are all the classnames for the current image, including normal and abnormal, change it to your classnames
const caseCurrentList = [
  "c1p21653s8",
  "c2p21653s8",
  "c3p21653s8",
  "c4p21653s8",
  "c5p21653s8",
  "c6p21653s8",
  "c7p21653s8"
];

//below is caption for current case in the order of c1 to c10, change it to match your captions for your annotations
const caseCurrentCaption = [
  "Support Device",
  "Support Device",
  "Support Device",
  "Cardiomegaly",
  "Pleural Effusion",
  "Clear Right Lung",
  "Clear Left Lung"
];

//below are the classnames for the annotation for previous patient images
const prevCaseLists = [
  [
    "c1p21653s7",
    "c2p21653s7",
    "c3p21653s7",
    "c4p21653s7",
    "c5p21653s7",
    "c6p21653s7",
    "c7p21653s7",
    "c8p21653s7"
  ],
  [
    "c1p21653s6",
    "c2p21653s6",
    "c3p21653s6",
    "c4p21653s6",
    "c5p21653s6",
    "c6p21653s6",
    "c7p21653s6"
  ],
  ["c1p21653s5", "c2p21653s5", "c3p21653s5"],
  ["c1p21653s1", "c2p21653s1", "c3p21653s1", "c4p21653s1", "c5p21653s1"]
];

//below are the captions for the annotation for previous patient images should match order above
const prevCaseCaptions = [
  [
    "Pleural Effusion",
    "Pleural Effusion",
    "Support Device",
    "Pneumonia",
    "Pneumonia",
    "Cardiomegaly",
    "Lung Opacity",
    "Central Trachea",
    "Clear Right Lung"
  ],
  [
    "Support Device",
    "Lung Opacity",
    "Pleural Effusion",
    "Pleural Effusion",
    "Lung Opacity",
    "Central Trachea",
    "Clear Right Lung"
  ],
  ["Lung Opacity", "Lung Opacity", "Support Device"],
  [
    "Pleural Effusion",
    "Pleural Effusion",
    "Lung Opacity",
    "Clear Right Lung",
    "Central Trachea"
  ] //study 1
];

//below are the classnames for the different annotations
const prevCaseListsDiff = [
  ["c4p21653s7", "c5p21653s7", "c6p21653s7"],
  ["c2p21653s6", "c5p21653s6"],
  ["c1p21653s5", "c2p21653s5"],
  ["c3p21653s1"]
];
//captions for above cases
const prevCaseListsDiffCaptions = [
  ["Pneumonia", "Pneumonia", "Lung Opacity"],
  ["Lung Opacity", "Lung Opacity"],
  ["Lung Opacity", "Lung Opacity"],
  ["Lung Opacity"]
];

//below are the classnames for different annotations for currentimage
const caseCurrentListDiff = [
  [],
  ["c4p21653s8"],
  ["c4p21653s8", "c5p21653s8"],
  ["c4p21653s8"]
];
const caseCurrentListDiffCaption = [
  [],
  ["Cardiomegaly"],
  ["Cardiomegaly", "Pleural Effusion"],
  ["Cardiomegaly"]
];

//below are the cross patient comparison images for case 11
const case11CrossPatient = [
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fcardiomegaly.jpeg?alt=media&token=bc6e62ce-5fb8-4e8c-9ccb-4c36406c017a",
    "Cardiomegaly",
    "Female",
    "60"
  ], //cardiomegaly
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp11_view1_frontal.jpg?alt=media&token=fe4a268d-8e4d-4c84-8392-78e54631c646",
    "Pleural Effusion",
    "Male",
    "80"
  ] //pleural effusion
];

const dates = [
  "2018/5/10",
  "2017/7/4",
  "2016/10/5",
  "2015/4/3",
  "2014/3/2",
  "2013/11/14"
];

class PriorImages2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      dateIndex: 0,
      priorImageMode: true,
      gender: this.props.patientGender,
      age: this.props.patientAge,
      bookmarkRegionOn: true,
      showAnnotation: false
    };
    //functions need to be binded to class before they can be used
    this.handleClickPriorImage = this.handleClickPriorImage.bind(this);
    this.handleClickCrossPatient = this.handleClickCrossPatient.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.colorBorder = this.colorBorder.bind(this);
  }

  colorBorder() {
    if (this.state.showAnnotation) {
      //need to highlight region
      caseCurrentList.map(currElement => {
        document.getElementById(currElement).style.borderStyle = "dotted";
      });
      switch (this.state.photoIndex) {
        case 3:
        case 1:
          document.getElementById("c4p21653s8").style.border = "3px solid red"; //cardio
          document.getElementById("c4p21653s8").style.border = "3px solid red"; //cardio
          break;
        case 2:
          document.getElementById("c4p21653s8").style.border = "3px solid red"; //cardio
          document.getElementById("c4p21653s8").style.border = "3px solid red"; //cardio
          document.getElementById("c5p21653s8").style.border = "3px solid red"; //plerual
          document.getElementById("c5p21653s8").style.border = "3px solid red"; //plerual
      }
    }
  }

  // NOTE: handles switiching to prior image mode
  async handleClickPriorImage(num) {
    await this.setState({
      isOpen: true,
      photoIndex: num
    });
    this.colorBorder();
    this.props.callbackFromParent(this.state.isOpen);
  }

  // NOTE: handles switching to cross patient mode
  async handleClickCrossPatient(num) {
    await this.setState({
      isOpen: true,
      photoIndex: num
    });
    this.props.callbackFromParent(this.state.isOpen);
  }

  // NOTE: Handles exit of prior image mode
  async handleClose() {
    await this.setState({
      isOpen: false
    });
    this.props.callbackFromParent(this.state.isOpen);
  }

  // NOTE: Handles click of show annotation button
  async handleClick() {
    await this.setState({
      showAnnotation: !this.state.showAnnotation,
      bookmarkRegionOn: !this.state.bookmarkRegionOn
    });
    this.colorBorder();
  }

  render() {
    // NOTE: Below is rendered in result mode, not prior image mode
    let priorImage = this.state.isOpen ? "PriorImagesOpened" : "PriorImages";
    // TODO: Alter code below to match your number of prior images with corresponding dates
    let priorImageSelectWindow = (
      <div className={priorImage}>
        <div className="title">Prior Images</div>
        <div
          className="hiddenTitle"
          onClick={() =>
            this.setState({
              priorImageMode: false,
              photoIndex: 0
            })
          }
        >
          Across Patient
        </div>
        <div className="underline" />
        <div className="ImageGroup">
          <ul>
            <li>
              <div className="imageCaption">
                <img
                  src={case21653images[0]}
                  alt="Image_0"
                  onClick={() => this.handleClickPriorImage(0)}
                />
                {dates[0]}
              </div>
            </li>
            <li>
              <div className="imageCaption">
                <img
                  src={case21653images[1]}
                  alt="Image_1"
                  onClick={() => this.handleClickPriorImage(1)}
                />
                {dates[1]}
              </div>
            </li>
            <li>
              <div className="imageCaption">
                <img
                  src={case21653images[2]}
                  alt="Image_2"
                  onClick={() => this.handleClickPriorImage(2)}
                />
                {dates[2]}
              </div>
            </li>
            <li>
              <div className="imageCaption">
                <img
                  src={case21653images[3]}
                  alt="Image_2"
                  onClick={() => this.handleClickPriorImage(3)}
                />
                {dates[3]}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
    let acrossPatient = this.state.isOpen
      ? "AcrossPatientOpened"
      : "AcrossPatient";
    let acrossPatientSelectWindow = (
      <div className={acrossPatient}>
        <div className="title">Across Patient</div>
        <div
          className="hiddenTitle"
          onClick={() =>
            this.setState({
              priorImageMode: true
            })
          }
        >
          Prior Images
        </div>
        <div className="underline" />
        <div className="ImageGroup">
          <ul>
            <li>
              <div className="imageCaption">
                <img
                  src={case11CrossPatient[0][0]}
                  alt="Image_0"
                  onClick={() => this.handleClickCrossPatient(0)}
                />
                {case11CrossPatient[0][1]}
              </div>
            </li>
            <li>
              <div className="imageCaption">
                <img
                  src={case11CrossPatient[1][0]}
                  alt="Image_1"
                  onClick={() => this.handleClickCrossPatient(1)}
                />
                {case11CrossPatient[1][1]}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );

    // NOTE: Below is rendering of annotation for case 11 main image and prior images
    let currentImageAnnotation = (
      <div className="annotations">
        {caseCurrentList.map((currElement, index) => {
          return (
            <AnnotationBubble
              caption={caseCurrentCaption[index]}
              label={currElement}
            />
          );
        })}
      </div>
    );

    // TODO: change the 3 prior case annotation below to match your case
    let priorStudy7Annotation = (
      <div className="annotations">
        {prevCaseLists[0].map((currElement, index) => {
          return (
            <AnnotationBubble
              caption={prevCaseCaptions[0][index]}
              label={currElement}
            />
          );
        })}
      </div>
    );
    let priorStudy6Annotation = (
      <div className="annotations">
        {prevCaseLists[1].map((currElement, index) => {
          return (
            <AnnotationBubble
              caption={prevCaseCaptions[1][index]}
              label={currElement}
            />
          );
        })}
      </div>
    );
    let priorStudy5Annotation = (
      <div className="annotations">
        {prevCaseLists[2].map((currElement, index) => {
          return (
            <AnnotationBubble
              caption={prevCaseCaptions[2][index]}
              label={currElement}
            />
          );
        })}
      </div>
    );
    let priorStudy1Annotation = (
      <div className="annotations">
        {prevCaseLists[3].map((currElement, index) => {
          return (
            <AnnotationBubble
              caption={prevCaseCaptions[3][index]}
              label={currElement}
            />
          );
        })}
      </div>
    );

    // TODO: alter code below to match your number of prior images and which photo index corresponds to which study
    // NOTE: select which prior study annotation to render
    let priorAnnotation = priorStudy7Annotation; //default study 11 because it is first image
    if (this.state.photoIndex === 1) {
      //if photo index is 1, then show study 9, since 2nd image is study 9
      priorAnnotation = priorStudy6Annotation;
    } else if (this.state.photoIndex === 2) {
      priorAnnotation = priorStudy5Annotation;
    } else if (this.state.photoIndex === 3) {
      priorAnnotation = priorStudy1Annotation;
    }
    //will not render annotation for cross patient comparison
    if (!this.state.priorImageMode) {
      priorAnnotation = null;
    }

    // NOTE: below is rendered when you enter prior image mode
    let caption = this.state.priorImageMode
      ? "Prior CXR Image "
      : "Similar patient with ";
    let bookmarkRegion = this.state.bookmarkRegionOn
        ? "BookmarkRegions_p"
        : "BookmarkRegions",
      showAnnotationButton = this.state.showAnnotation
        ? "ShowAnnotation_p"
        : "ShowAnnotation";
    var obslistcurrent_s = new Set(caseCurrentCaption); //convert caption to set so we don't repeat observation
    var obslistcurrent = [...obslistcurrent_s]; //convert back to array so we can map through it
    var obslistprior_s = new Set(prevCaseCaptions[this.state.photoIndex]);
    var obslistprior = [...obslistprior_s];
    let display = (
      <div>
        <div className="display">
          <div className="PriorImageObservation1">
            <div className="title">
              <div className="text">Observations</div>
            </div>
            <div className="obList2">
              <ul>
                {obslistprior.map((currElement, index) => {
                  return <li>{currElement}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="PriorImageObservation2">
            <div className="title">
              <div className="text">Observations</div>
            </div>
            <div className="obList2">
              <ul>
                {obslistcurrent.map((currElement, index) => {
                  return <li>{currElement}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="currentImage">
            {this.state.bookmarkRegionOn && (
              <Magnifier
                src={this.props.currentImage}
                mgShape="square"
                mgShowOverflow="false"
              />
            )}
            {!this.state.bookmarkRegionOn && (
              <img src={this.props.currentImage} alt="prior image" />
            )}
            {!this.state.bookmarkRegionOn && currentImageAnnotation}
            <div className="text">Current CXR Image 2019/7/10</div>
          </div>
          <div className="divider2" />
          <div className="divider2" />
          <div className="divider2" />
          <div className="divider" />
          <div className="priorImage">
            {this.state.bookmarkRegionOn && (
              <div className="image">
                <Magnifier
                  src={
                    this.state.priorImageMode
                      ? case21653images[this.state.photoIndex]
                      : case11CrossPatient[this.state.photoIndex]
                  }
                  mgShape="square"
                  mgShowOverflow="false"
                />
              </div>
            )}
            {!this.state.bookmarkRegionOn && (
              <img
                src={
                  this.state.priorImageMode
                    ? case21653images[this.state.photoIndex]
                    : case11CrossPatient[this.state.photoIndex]
                }
                alt="prior image"
              />
            )}
            {!this.state.bookmarkRegionOn && priorAnnotation}
            <div className="text">
              {caption}
              {this.state.priorImageMode
                ? dates[this.state.photoIndex]
                : case11CrossPatient[this.state.photoIndex][1]}
              {!this.state.priorImageMode &&
                "(" +
                  case11CrossPatient[this.state.photoIndex][2] +
                  ". " +
                  case11CrossPatient[this.state.photoIndex][3] +
                  ")"}
            </div>
          </div>
          <div className="headerPriorImage">
            <div className="PatientInfo">
              Patient Information: {this.state.gender}. {this.state.age}
            </div>
            <div className="ReturnButton" onClick={() => this.handleClose()}>
              <div className="text">Return</div>
            </div>
            <div
              className={showAnnotationButton}
              onClick={() => this.handleClick()}
            >
              <div className="text">Show Annotations</div>
            </div>
            <div
              className={bookmarkRegion}
              onClick={() =>
                this.setState({
                  bookmarkRegionOn: !this.state.bookmarkRegionOn,
                  showAnnotation: !this.state.showAnnotation
                })
              }
            >
              <div className="text">Bookmark Regions</div>
            </div>
          </div>
        </div>
        <div className="ImageSelectionWindow">
          {!this.state.priorImageMode && acrossPatientSelectWindow}
          {this.state.priorImageMode && priorImageSelectWindow}
        </div>
      </div>
    );

    return (
      <div>
        {!this.state.isOpen &&
          !this.state.priorImageMode &&
          acrossPatientSelectWindow}
        {!this.state.isOpen &&
          this.state.priorImageMode &&
          priorImageSelectWindow}
        {this.state.isOpen && display}
      </div>
    );
  }
}

export default PriorImages2;
