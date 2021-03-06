// NOTE: DON'T CHANGE THIS FILE, CHANGE PriorImagesCase2 FILE
import React, { Component } from "react";
import Magnifier from "../../Magnifier.es";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { IconContext } from "react-icons";
import AnnotationBubble from "../Annotation/AnnotationBubble";

//below are case 11 prior images
const case11images = [
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fc11s11_view1_frontal.jpg?alt=media&token=411551be-0228-45ba-9261-cf485637c022",
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fc11s9_view1_frontal.jpg?alt=media&token=df7f4348-88bd-4ee3-b0ed-8ec1cd951b79",
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fc11s1_view1_frontal.jpg?alt=media&token=1a215ff2-bc35-448c-8e4f-9c7c56661c71"
];

//below are all the classnames for the current image, including normal and abnormal
const caseCurrentList = [
  "c1p11s12",
  "c2p11s12",
  "c3p11s12",
  "c4p11s12",
  "c5p11s12",
  "c6p11s12",
  "c7p11s12",
  "c8p11s12",
  "c9p11s12",
  "c10p11s12"
];

//below is caption for current case in the order of c1 to c10
const caseCurrentCaption = [
  "Support Device",
  "Support Device",
  "Support Device",
  "Atelectasis",
  "Edema",
  "Cardiomegaly",
  "Pleural Effusion",
  "Pleural Effusion",
  "Central Trachea",
  "Clear Right Lung"
];

//below are the classnames for the annotation for previous patient images
const prevCaseLists = [
  [
    "c1p11s11",
    "c2p11s11",
    "c3p11s11",
    "c4p11s11",
    "c5p11s11",
    "c6p11s11",
    "c7p11s11",
    "c8p11s11",
    "c9p11s11",
    "c10p11s11"
  ],
  ["c1p11s9", "c2p11s9", "c3p11s9", "c4p11s9", "c5p11s9", "c6p11s9", "c7p11s9"],
  ["c1p11s1", "c2p11s1", "c3p11s1"]
];

//below are the captions for the annotation for previous patient images should match order above
const prevCaseCaptions = [
  [
    "Edema",
    "Support Device",
    "Support Device",
    "Support Device",
    "Lung Opacity",
    "Pleural Effusion",
    "Pleural Effusion",
    "Edema",
    "Central Trachea",
    "Clear Right Lung"
  ],
  [
    "Support Device",
    "Support Device",
    "Support Device",
    "Enlarged Cardiomediastinum",
    "Pleural Effusion",
    "Pleural Effusion",
    "Clear Right Lung"
  ],
  ["Lung Opacity", "Support Device", "Clear Right Lung"]
];

//below are the classnames for the different annotations
const prevCaseListsDiff = [["c5p11s11"], ["c4p11s9"], ["c1p11s1"]];
//captions for above cases
const prevCaseListsDiffCaptions = [
  ["Lung Opacity"],
  ["Enlarged Cardiomediastinum"],
  ["Lung Opacity"]
];

//below are the classnames for different annotations for currentimage
const caseCurrentListDiff = [
  ["c4p11s12", "c6p11s12", "c5p11s12"],
  ["c4p11s12", "c6p11s12", "c5p11s12"],
  ["c4p11s12", "c6p11s12", "c5p11s12", "c7p11s12", "c8p11s12"]
];
const caseCurrentListDiffCaption = [
  ["Atelectasis", "Cardiomegaly", "Edema"],
  ["Atelectasis", "Cardiomegaly", "Edema"],
  [
    "Atelectasis",
    "Cardiomegaly",
    "Edema",
    "Pleural Effusion",
    "Pleural Effusion"
  ]
];

const cardioCrossPatient = [
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fcardiomegaly.jpeg?alt=media&token=bc6e62ce-5fb8-4e8c-9ccb-4c36406c017a",
    "Cardiomegaly",
    "Female",
    "60",
    ["c1cardio1"]
  ], //cardiomegaly
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYCardioNew.png?alt=media&token=50ae3066-5341-4b92-9d29-40b54de78824",
    "Cardiomegaly",
    "Female",
    "64",
    ["c1cardio2"]
  ], //cardiomegaly
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYCardioP111S1.jpg?alt=media&token=c17654f8-7685-4f23-8604-1bbf7ef9e6bf",
    "Cardiomegaly",
    "Male",
    "55",
    ["c1cardio3"]
  ] //cardiomegaly
];

const edemaCrossPatient = [
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYEdemap146s5.jpg?alt=media&token=df36e741-7465-4da2-a89b-00ea76436ee7",
    "Edema",
    "Male",
    "45",
    ["c1edema1"]
  ], //Edema
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYEdemaNew.png?alt=media&token=9d2b12a4-5da5-4b61-92ac-60df4af61775",
    "Edema",
    "Female",
    "33",
    ["c1edema2", "c2edema2"]
  ], //Edema
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYEdemap171s7.jpg?alt=media&token=fb79f8d0-6e80-43af-aed1-c7cde29b0c96",
    "Edema",
    "Male",
    "23",
    ["c1edema3"]
  ] //Edema
];

const pleuralCrossPatient = [
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYPleuralNew.png?alt=media&token=67bd1079-3145-4459-8d4f-aee309ea1a1a",
    "Pleural Effusion",
    "Male",
    "80",
    ["c1pleural1"]
  ], //pleural effusion
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYpleuralFull.jpg?alt=media&token=a1059104-db34-44eb-8b41-119c0a262678",
    "Pleural Effusion",
    "Male",
    "50",
    ["c1pleural2"]
  ], //pleural effusion
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYPleural2Full.jpg?alt=media&token=c3b78003-1edc-4d59-a4b9-95d74553455a",
    "Pleural Effusion",
    "Female",
    "80",
    ["c1pleural3"]
  ] //pleural effusion
];

const atelectCrossPatient = [
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYAtelectp204s13.jpg?alt=media&token=7e78e226-b49b-4abd-892b-3d629f78059f",
    "Atelectasis",
    "Female",
    "73",
    ["c1atelect1"]
  ],
  [
    //atelectasis,
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYAtelectNew.png?alt=media&token=e0db6d88-5404-4154-8a45-8017ce11e527",
    "Atelectasis",
    "Male",
    "53",
    ["c1atelect2"]
  ],
  [
    //atelectasis,
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYAtelectp69s20.jpg?alt=media&token=8ba85db6-4ddc-42fb-b210-690f29cdc72c",
    "Atelectasis",
    "Female",
    "46",
    ["c1atelect3"]
  ] //atelectasis
];

const dates = [
  "2018/5/10",
  "2017/7/4",
  "2016/10/5",
  "2015/4/3",
  "2014/3/2",
  "2013/11/14"
];

class PriorImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      dateIndex: 0,
      priorImageMode: true,
      gender: this.props.patientGender,
      age: this.props.patientAge,
      showAnnotation: false,
      cardioList: false,
      edemaList: false,
      pleuralList: false,
      atelectList: false,
      showDiff: false
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
      if (!this.state.showDiff) {
        caseCurrentList.map(currElement => {
          document.getElementById(currElement).style.borderStyle = "dotted";
        });
      } else {
        document.getElementById("c4p11s12").style.border = "dotted"; //atelect
        document.getElementById("c5p11s12").style.border = "dotted"; //edema
        document.getElementById("c6p11s12").style.border = "dotted"; //cardio
      }
      switch (this.state.photoIndex) {
        case 2:
          document.getElementById("c7p11s12").style.border = "3px solid red"; //pleural
          document.getElementById("c8p11s12").style.border = "3px solid red"; //pleural
        case 0:
        case 1:
          //cardio,atelect, edema
          document.getElementById("c4p11s12").style.border = "3px solid red"; //atelect
          document.getElementById("c5p11s12").style.border = "3px solid red"; //edema
          document.getElementById("c6p11s12").style.border = "3px solid red"; //cardio
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
      showDiff: false
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
              priorImageMode: false
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
                  src={case11images[0]}
                  alt="Image_0"
                  onClick={() => this.handleClickPriorImage(0)}
                />
                {dates[0]}
              </div>
            </li>
            <li>
              <div className="imageCaption">
                <img
                  src={case11images[1]}
                  alt="Image_1"
                  onClick={() => this.handleClickPriorImage(1)}
                />
                {dates[1]}
              </div>
            </li>
            <li>
              <div className="imageCaption">
                <img
                  src={case11images[2]}
                  alt="Image_2"
                  onClick={() => this.handleClickPriorImage(2)}
                />
                {dates[2]}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
    let acrossPatient = this.state.isOpen
      ? "AcrossPatientOpened"
      : "AcrossPatient";
    let case11CrossPatient = cardioCrossPatient;
    if (this.state.atelectList) case11CrossPatient = atelectCrossPatient;
    else if (this.state.pleuralList) case11CrossPatient = pleuralCrossPatient;
    else if (this.state.edemaList) case11CrossPatient = edemaCrossPatient;
    let imageGroup = (
      <div className="ImageGroup">
        <ul>
          <li>
            <div className="imageCaption">
              <img
                src={case11CrossPatient[0][0]}
                alt="Image_0"
                onClick={() => this.handleClickCrossPatient(0)}
              />
            </div>
          </li>
          <li>
            <div className="imageCaption">
              <img
                src={case11CrossPatient[1][0]}
                alt="Image_1"
                onClick={() => this.handleClickCrossPatient(1)}
              />
            </div>
          </li>
          <li>
            <div className="imageCaption">
              <img
                src={case11CrossPatient[2][0]}
                alt="Image_2"
                onClick={() => this.handleClickCrossPatient(2)}
              />
            </div>
          </li>
        </ul>
      </div>
    );
    let triangle = (
      <IconContext.Provider value={{ size: "1em" }}>
        <GoChevronRight />
      </IconContext.Provider>
    );
    let triangleDown = (
      <IconContext.Provider value={{ size: "1em" }}>
        <GoChevronDown />
      </IconContext.Provider>
    );
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
        <div className="categoryList">
          <ul>
            <li
              onClick={() =>
                this.setState({
                  cardioList: !this.state.cardioList,
                  pleuralList: false,
                  edemaList: false,
                  atelectList: false
                })
              }
            >
              {this.state.cardioList ? triangleDown : triangle} Cardiomegaly
            </li>
            {this.state.cardioList && imageGroup}
            <li
              onClick={() =>
                this.setState({
                  cardioList: false,
                  pleuralList: !this.state.pleuralList,
                  edemaList: false,
                  atelectList: false
                })
              }
            >
              {this.state.pleuralList ? triangleDown : triangle} Pleural
              Effusion
            </li>
            {this.state.pleuralList && imageGroup}
            <li
              onClick={() =>
                this.setState({
                  cardioList: false,
                  pleuralList: false,
                  edemaList: !this.state.edemaList,
                  atelectList: false
                })
              }
            >
              {this.state.edemaList ? triangleDown : triangle} Edema
            </li>
            {this.state.edemaList && imageGroup}
            <li
              onClick={() =>
                this.setState({
                  cardioList: false,
                  pleuralList: false,
                  edemaList: false,
                  atelectList: !this.state.atelectList
                })
              }
            >
              {this.state.atelectList ? triangleDown : triangle} Atelectasis
            </li>
            {this.state.atelectList && imageGroup}
          </ul>
        </div>
        <div className="underline" />
      </div>
    );

    // NOTE: Below is rendering of annotation for case 11 main image and prior images

    // this is to control the "Show Diff" function for which annotation is shown
    let tempList = caseCurrentList;
    let tempCaption = caseCurrentCaption;
    if (this.state.showDiff) {
      if (this.state.photoIndex === 0) {
        tempList = caseCurrentListDiff[0];
        tempCaption = caseCurrentListDiffCaption[0];
      } else if (this.state.photoIndex === 1) {
        tempList = caseCurrentListDiff[1];
        tempCaption = caseCurrentListDiffCaption[1];
      } else {
        tempList = caseCurrentListDiff[2];
        tempCaption = caseCurrentListDiffCaption[2];
      }
    }

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

    let currentImageAnnotationDiff = (
      <div className="annotations">
        {tempList.map((currElement, index) => {
          return (
            <AnnotationBubble
              caption={tempCaption[index]}
              label={currElement}
            />
          );
        })}
      </div>
    );

    // TODO: change the 3 prior case annotation below to match your case
    let caseList = prevCaseLists;
    let captionList = prevCaseCaptions;
    if (this.state.showDiff) {
      caseList = prevCaseListsDiff;
      captionList = prevCaseListsDiffCaptions;
    }
    let priorStudy1Annotation = (
      <div className="annotations">
        {caseList[2].map((currElement, index) => {
          return (
            <AnnotationBubble
              caption={captionList[2][index]}
              label={currElement}
            />
          );
        })}
      </div>
    );
    let priorStudy11Annotation = (
      <div className="annotations">
        {caseList[0].map((currElement, index) => {
          return (
            <AnnotationBubble
              caption={captionList[0][index]}
              label={currElement}
            />
          );
        })}
      </div>
    );
    let priorStudy9Annotation = (
      <div className="annotations">
        {caseList[1].map((currElement, index) => {
          return (
            <AnnotationBubble
              caption={captionList[1][index]}
              label={currElement}
            />
          );
        })}
      </div>
    );

    // TODO: alter code below to match your number of prior images and which photo index corresponds to which study
    // NOTE: select which prior study annotation to render
    let priorAnnotation = priorStudy11Annotation; //default study 11 because it is first image
    if (this.state.photoIndex === 1) {
      //if photo index is 1, then show study 9, since 2nd image is study 9
      priorAnnotation = priorStudy9Annotation;
    } else if (this.state.photoIndex === 2) {
      priorAnnotation = priorStudy1Annotation;
    }
    //will not render annotation for cross patient comparison
    if (!this.state.priorImageMode) {
      priorAnnotation = null;
    }

    // annotation for across patient comparison
    let cardioAnno = (
      <div className="annotations">
        {cardioCrossPatient[this.state.photoIndex][4].map(currElement => {
          return (
            <AnnotationBubble caption="Cardiomegaly" label={currElement} />
          );
        })}
      </div>
    );

    let pleuralAnno = (
      <div className="annotations">
        {pleuralCrossPatient[this.state.photoIndex][4].map(currElement => {
          return (
            <AnnotationBubble caption="Pleural Effusion" label={currElement} />
          );
        })}
      </div>
    );

    let edemaAnno = (
      <div className="annotations">
        {edemaCrossPatient[this.state.photoIndex][4].map(currElement => {
          return <AnnotationBubble caption="Edema" label={currElement} />;
        })}
      </div>
    );

    let atelectAnno = (
      <div className="annotations">
        {atelectCrossPatient[this.state.photoIndex][4].map(currElement => {
          return <AnnotationBubble caption="Atelectasis" label={currElement} />;
        })}
      </div>
    );

    let temp = [];
    let name = "";
    if (this.state.cardioList) {
      temp = ["c6p11s12"];
      name = "Cardiomegaly";
    } else if (this.state.edemaList) {
      temp = ["c5p11s12"];
      name = "Edema";
    } else if (this.state.pleuralList) {
      temp = ["c7p11s12", "c8p11s12"];
      name = "Pleural Effusion";
    } else if (this.state.atelectList) {
      temp = ["c4p11s12"];
      name = "Atelectasis";
    }

    let currentAnno = (
      <div className="annotations">
        {temp.map(currElement => {
          return <AnnotationBubble caption={name} label={currElement} />;
        })}
      </div>
    );

    // NOTE: below is rendered when you enter prior image mode
    let caption = this.state.priorImageMode
      ? "Prior CXR Image "
      : "Similar patient with ";
    let showAnnotationButton = this.state.showAnnotation
        ? "ShowAnnotation_p"
        : "ShowAnnotation",
      showDiffButton = this.state.showDiff ? "ShowDiff_p" : "ShowDiff";
    var obslistcurrent_s = new Set(caseCurrentCaption); //convert caption to set so we don't repeat observation
    var obslistcurrent = [...obslistcurrent_s]; //convert back to array so we can map through it
    var obslistprior_s = new Set(prevCaseCaptions[this.state.photoIndex]);
    var obslistprior = [...obslistprior_s];
    let tempbool = false;
    let display = (
      <div>
        <div className="display">
          {this.state.priorImageMode && (
            <div className="PriorImageObservation1">
              <div className="obList2">
                <div>Observations:</div>
                <ul>
                  {obslistprior.map(currElement => {
                    return (
                      <li>
                        {prevCaseListsDiffCaptions[this.state.photoIndex].map(
                          currDiff => {
                            tempbool = false;
                            if (currDiff === currElement) {
                              tempbool = true;
                            }
                          }
                        )}
                        {tempbool ? <em>{currElement}</em> : currElement}.
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
          {this.state.priorImageMode && (
            <div className="PriorImageObservation2">
              <div className="obList2">
                <div>Observations:</div>
                <ul>
                  {obslistcurrent.map(currElement => {
                    tempbool = false;
                    return (
                      <li>
                        {caseCurrentListDiffCaption[this.state.photoIndex].map(
                          currDiff => {
                            if (currDiff === currElement) {
                              tempbool = true;
                            }
                          }
                        )}
                        {tempbool ? <em>{currElement}</em> : currElement}.
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
          <div className="title1">Current CXR Image 2019/7/10</div>
          <div className="currentImage">
            {!this.state.showAnnotation && !this.state.showDiff && (
              <Magnifier
                src={this.props.currentImage}
                mgShape="square"
                mgShowOverflow="false"
              />
            )}
            {this.state.showAnnotation && (
              <img src={this.props.currentImage} alt="prior image" />
            )}
            {this.state.showDiff && (
              <img src={this.props.currentImage} alt="prior image" />
            )}
            {this.state.showAnnotation &&
              this.state.priorImageMode &&
              currentImageAnnotation}
            {this.state.showDiff &&
              this.state.priorImageMode &&
              currentImageAnnotationDiff}
            {!this.state.priorImageMode && currentAnno}
          </div>
          <div className="divider2" />
          <div className="divider2" />
          <div className="divider2" />
          <div className="divider" />
          <div className="title2">
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
          <div className="priorImage">
            {!this.state.showAnnotation && !this.state.showDiff && (
              <div className="image">
                <Magnifier
                  src={
                    this.state.priorImageMode
                      ? case11images[this.state.photoIndex]
                      : case11CrossPatient[this.state.photoIndex]
                  }
                  mgShape="square"
                  mgShowOverflow="false"
                />
              </div>
            )}
            {(this.state.showAnnotation || this.state.showDiff) && (
              <img
                src={
                  this.state.priorImageMode
                    ? case11images[this.state.photoIndex]
                    : case11CrossPatient[this.state.photoIndex]
                }
                alt="prior image"
              />
            )}
            {this.state.showAnnotation && priorAnnotation}
            {this.state.showDiff && priorAnnotation}
            {/* below is show annotation for across patient comparison */}
            {!this.state.priorImageMode && this.state.cardioList && cardioAnno}
            {!this.state.priorImageMode &&
              this.state.pleuralList &&
              pleuralAnno}
            {!this.state.priorImageMode && this.state.edemaList && edemaAnno}
            {!this.state.priorImageMode &&
              this.state.atelectList &&
              atelectAnno}
            {/* END */}
          </div>
          <div className="headerPriorImage">
            <div className="PatientInfo">
              Patient Information: {this.state.gender}. {this.state.age}
            </div>
            <div className="ReturnButton" onClick={() => this.handleClose()}>
              <div className="text">Return</div>
            </div>
            {this.state.priorImageMode && (
              <div>
                <div
                  className={showAnnotationButton}
                  onClick={() => this.handleClick()}
                >
                  <div className="text">Show Annotations</div>
                </div>
              </div>
            )}
            {this.state.priorImageMode && (
              <div
                className={showDiffButton}
                onClick={() => {
                  this.setState({
                    showDiff: !this.state.showDiff,
                    showAnnotation: false
                  });
                  this.colorBorder();
                }}
              >
                <div className="text">Show Change</div>
              </div>
            )}
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

export default PriorImages;
