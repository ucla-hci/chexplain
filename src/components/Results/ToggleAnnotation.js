import React, { Component } from "react";
import HoverWindow from "./HoverWindow";
import ObsDetails from "./ObsDetails";
import AnnotationBubble from "./AnnotationBubble";

// NOTE: currently this indicated which patient we are doing as I Have not connected different patient to different data
// const this.props.imageIndex = 1;

//this is list of circle names for abnormal annotations
const caseList = [
  [
    "c1p11s12",
    "c2p11s12",
    "c3p11s12",
    "c4p11s12",
    "c5p11s12",
    "c6p11s12",
    "c7p11s12",
    "c8p11s12"
  ], //for case 11
  ["c1p21653s8", "c2p21653s8", "c3p21653s8", "c4p21653s8", "c5p21653s8"]
  //support, support, suppot, atelect, edema, cardio, pleural, pleural
  // TODO: INSERT MORE CIRCLE NAMES FOR OTHER CASES HERE
  //"Support Device",
  // "Support Device",
  // "Support Device",
  // "Cardiomegaly",
  // "Pleural Effusion",
  // "Clear Right Lung",
  // "Clear Left Lung"
];

//this is list of circle names grouped by question input
const caseListSorted = [
  [
    ["c4p11s12", "c5p11s12", "c6p11s12", "c7p11s12", "c8p11s12"],
    ["c4p11s12", "c7p11s12", "c8p11s12"],
    ["c4p11s12", "c5p11s12", "c6p11s12", "c7p11s12", "c8p11s12"]
  ] //for case 11
];

const caseListSortedCaption = [
  [
    [
      "Atelectasis",
      "Edema",
      "Cardiomegaly",
      "Pleural Effusion",
      "Pleural Effusion"
    ],
    ["Atelectasis", "Pleural Effusion", "Pleural Effusion"],
    [
      "Atelectasis",
      "Edema",
      "Cardiomegaly",
      "Pleural Effusion",
      "Pleural Effusion"
    ]
  ]
];

//this is list of circle names for normal annotations
const caseListNormal = [
  ["c9p11s12", "c10p11s12"],
  ["c6p21653s8", "c7p21653s8"]
  //TODO: INSERT MORE CIRCLE NAMES FOR OTHER CASES HERE
];

//this is list of regional comparison for each annotation type
const relatedImageList = [
  //pleural effusion:
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fpleuraleffusionconfident.jpg?alt=media&token=a188b354-afcc-4683-80bd-3a4b0fa3a3a0",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fright_pleural100%25.png?alt=media&token=ed28e3df-e8ba-4e31-8109-945811e7e102"
  ], //pleuralEffusionImage
  //atelectasis
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fatelectsmall.jpg?alt=media&token=c0c47ef3-66b3-424f-8bc5-542ff94d3598",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnoatelect.jpg?alt=media&token=3cf8689e-644c-47a4-880a-5cc5eef17eed"
  ], //atelectasis
  //cardiomegaly
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fcardiosmall.jpg?alt=media&token=81e9b209-b02f-469f-8783-2614d1352155",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnocardio.jpg?alt=media&token=2e0a8a5a-dd09-4116-81e1-67752f8d123c"
  ], //cardio
  //edema
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fedemasmall.jpg?alt=media&token=88848484-faef-4e93-be5f-25ae0bb725df",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnoedema.jpg?alt=media&token=78b6338b-d890-45ee-ac34-ad701e8513a1"
  ] //edema
  //TODO: INSERT MORE REGIONAL COMPARISON FOR OTHER OBSERVATION IF IT IS NOT IN LIST ABOVE
  //FORMAT [ABNORMAL IMAGE URL, NORMAL IMG URL]
];

//list of captions for normal observations
const caseNormalCaption = [
  ["Central Trachea", "Clear Right Lung"], //for case 11
  ["Clear Right Lung", "Clear Left Lung"]
  //TODO: INSERT MORE NORMAL CAPTIONS FOR OTHER CASES, SHOULD BE IN THE ORDER OF YOUR CIRCLE NUMBER
];

//list of captions for abnormal obervations
const caseAbnormalCaption = [
  [
    "Support Device",
    "Support Device",
    "Support Device",
    "Atelectasis",
    "Edema",
    "Cardiomegaly",
    "Pleural Effusion",
    "Pleural Effusion"
  ], //patient 11
  [
    "Support Device",
    "Support Device",
    "Support Device",
    "Cardiomegaly",
    "Pleural Effusion"
  ]
  //TODO: INSERT MORE ABNORMAL CAPTIONS FOR OTHER CASES, SHOULD BE IN THE ORDER OF YOUR CIRCLE NUMBER
];

class ToggleAnnotation extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickAnnotation = this.handleClickAnnotation.bind(this);
    this.displayHoverWindow = this.displayHoverWindow.bind(this);
    this.handleUnclick = this.handleUnclick.bind(this);
    this.state = {
      show: true, //controls show of everything related to annotation
      showAll: true,
      customizeMode: false,
      onlyAbnormal: false,
      clicked: [],
      clickedAnno: "",
      casePressed: caseList[this.props.imageIndex],
      caseNormal: caseListNormal[this.props.imageIndex]
    };
  }

  //calls every time prop changes
  componentWillReceiveProps(nextProps, nextState) {
    //stringify so we can compare arrays easier
    if (
      JSON.stringify(nextProps.clickedObservation) !=
      JSON.stringify(this.state.clicked)
    ) {
      this.setState({ clicked: [...nextProps.clickedObservation] });
    }
    let tempList = [...caseList[this.props.imageIndex]]; //case list is set list of case names
    //map through clicked observation to know which ones to highlight
    //when _p is added at the end of a className it indicated that it becomes highlighted
    nextProps.clickedObservation.map(currElement => {
      if (this.props.imageIndex === 0) {
        switch (currElement) {
          case "Cardiomegaly":
            tempList[5] += "_p";
            break;
          case "Edema":
            tempList[4] += "_p";
            break;
          case "Atelectasis":
            tempList[3] += "_p";
            break;
          case "Pleural Effusion":
            tempList[6] += "_p";
            tempList[7] += "_p";
            break;
          case "Support Device":
            tempList[0] += "_p";
            tempList[1] += "_p";
            tempList[2] += "_p";
            break;
        }
      } else if (this.props.imageIndex === 1) {
        //TODO: CONNECT EACH OBSERVATION FOR YOUR CASE TO ANNOTATION BOXES TO HIGHLIGHT,
        // SIMILAR TO WHAT I DID ABOVE WITH SWITCH STATEMENT, BUT WITH DIFF OBSERVATION
        // LEADING TO DIFFERENT ANNOTATION BEING HIGHLIGHTED
        switch (currElement) {
          case "Cardiomegaly":
            tempList[3] += "_p";
            break;
          case "Pleural Effusion":
            tempList[4] += "_p";
            break;
          case "Support Device":
            tempList[0] += "_p";
            tempList[1] += "_p";
            tempList[2] += "_p";
            break;
        }
      }
    });
    this.setState({
      casePressed: tempList
    });
  }

  handleClick(whichButton) {
    if (whichButton === "onlyAbnormal") {
      this.setState({
        onlyAbnormal: !this.state.onlyAbnormal,
        showAll: true
      });
    }
    if (whichButton === "showAll") {
      if (this.state.showAll === false) {
        this.setState({ showAll: true });
        console.log("true");
      } else {
        this.setState({ showAll: false });
        console.log("false");
      }
    }
    if (whichButton === "customize") {
      if (this.state.customizeMode === false) {
        this.setState({ customizeMode: true });
      } else {
        this.setState({ customizeMode: false });
      }
    }
  }
  // NOTE: called when annotation is clicked/hovered
  handleClickAnnotation(clickedElement, index = -1) {
    this.setState({
      clickedAnno: clickedElement
    });
    let tempList = [...caseList[this.props.imageIndex]];
    let callbackList = [];
    //case list listens for when annotation is clicked similar annoation should be highlighted
    if (this.props.imageIndex === 0) {
      switch (
        clickedElement //here clickedElement is an annotation className (ex. c6p11s12)
      ) {
        case caseList[this.props.imageIndex][5]: //cardio
          tempList[5] += "_p"; //changes clicked annotation to highlighted
          callbackList.push("Cardiomegaly"); //push related observation back to callback list, so we know which observation to highlight
          break;
        case caseList[this.props.imageIndex][4]: //edema
          tempList[4] += "_p";
          callbackList.push("Edema");
          break;
        case caseList[this.props.imageIndex][3]: //atelect
          tempList[3] += "_p";
          callbackList.push("Atelectasis");
          break;
        case caseList[this.props.imageIndex][6]: //pleurl
        case caseList[this.props.imageIndex][7]: //pleurl
          tempList[6] += "_p";
          tempList[7] += "_p";
          callbackList.push("Pleural Effusion");
          break;
        case caseList[this.props.imageIndex][0]: //support 1
        case caseList[this.props.imageIndex][1]: //support 2
        case caseList[this.props.imageIndex][2]: //support 3
          tempList[0] += "_p";
          tempList[1] += "_p";
          tempList[2] += "_p";
          callbackList.push("Support Device");
          break;
      }
    } else if (this.props.imageIndex === 1) {
      //TODO: CONNECT CLICKED ANNOTATION TO OBSERVATION LIKE THE CASE STATEMENT ABOVE
      // AND CHANGE CLASSNAME OF CLICKED ANNOTATION TO NAME + _p
      switch (
        clickedElement //here clickedElement is an annotation className (ex. c6p11s12)
      ) {
        case caseList[this.props.imageIndex][4]: //edema
          tempList[4] += "_p";
          callbackList.push("Pleural Effusion");
          break;
        case caseList[this.props.imageIndex][3]: //atelect
          tempList[3] += "_p";
          callbackList.push("Cardiomegaly");
          break;
        case caseList[this.props.imageIndex][0]: //support 1
        case caseList[this.props.imageIndex][1]: //support 2
        case caseList[this.props.imageIndex][2]: //support 3
          tempList[0] += "_p";
          tempList[1] += "_p";
          tempList[2] += "_p";
          callbackList.push("Support Device");
          break;
      }
    }
    if (JSON.stringify(tempList) != JSON.stringify(this.state.casePressed)) {
      this.setState({
        casePressed: tempList
      });
    }
    this.props.callbackFromParent(callbackList);
    this.props.callbackClickedComponent("annotations");
  }

  // NOTE: handle unclick basically resets all values, so it looks like nothing is pressed
  handleUnclick() {
    this.setState({
      clicked: [""],
      clickedAnno: "",
      casePressed: [
        "c1p11s12",
        "c2p11s12",
        "c3p11s12",
        "c4p11s12",
        "c5p11s12",
        "c6p11s12",
        "c7p11s12",
        "c8p11s12"
      ]
    });
  }

  // NOTE: This function displays hover window when an annotation is clicked, should only be displayed in non-STAT mode
  displayHoverWindow(clickedElement) {
    if (this.props.statMode)
      //will only render hover window in non-STAT mode
      clickedElement = null;
    //clickedElement is a className of the annotation clicked (Ex. c1p11s1)
    let captionTemplate1 = "Sample region with ";
    let captionTemplate2 = "Sample region without ";
    // TODO: ADD YOUR CASE LIST'S ANNOTATION CLASSNAME TO THE CORRESPONDING HOVER WINDOW
    // IF THE ANNOTATION BOX IS RELATED TO CARDIOMEGALY, YOU PUT caseList[x][y] WHICH HAS YOUR ANNOTATION BOXES CLASSNAME
    // AS AN ADDITIONAL CASE ABOVE THE RETURN HOVER WINDOW OF CARDIOMEGALY
    switch (clickedElement) {
      case caseList[0][5]: //cardio
      case caseList[1][3]: //cardio
        //INSERT ANNOTATION BOX CLASSNAME AS "case caseList[x][y]:" RELATED TO CARDIOMEGALY HERE
        return (
          <HoverWindow title="Cardiomegaly (Compare region with abnormal/normal cases)">
            <ObsDetails
              image1={relatedImageList[2][0]}
              image2={relatedImageList[2][1]}
              caption1={captionTemplate1 + "Cardiomegaly"}
              caption2={captionTemplate2 + "Cardiomegaly"}
            />
          </HoverWindow>
        );
      case caseList[0][4]: //edema
        //INSERT ANNOTATION BOX CLASSNAME AS caseList[x][y] RELATED TO EDEMA HERE
        return (
          <HoverWindow title="Edema (Compare region with abnormal/normal cases)">
            <ObsDetails
              image1={relatedImageList[3][0]}
              image2={relatedImageList[3][1]}
              caption1={captionTemplate1 + "Edema"}
              caption2={captionTemplate2 + "Edema"}
            />
          </HoverWindow>
        );
      case caseList[0][3]: //atelect
        return (
          <HoverWindow title="Atelectasis (Compare region with abnormal/normal cases)">
            <ObsDetails
              image1={relatedImageList[1][0]}
              image2={relatedImageList[1][1]}
              caption1={captionTemplate1 + "Atelectasis"}
              caption2={captionTemplate2 + "Atelectasis"}
            />
          </HoverWindow>
        );
      case caseList[0][6]: //pleurl
      case caseList[0][7]: //pleurl
      case caseList[1][4]: //pleurl
        return (
          <HoverWindow title="Pleural Effusion (Compare region with abnormal/normal cases)">
            <ObsDetails
              image1={relatedImageList[0][0]}
              image2={relatedImageList[0][1]}
              caption1={captionTemplate1 + "Pleural Effusion"}
              caption2={captionTemplate2 + "Pleural Effusion"}
            />
          </HoverWindow>
        );
      //IF YOU CANNOT FIND YOUR RELATED OBSERVATION IN LIST ABOVE YOU CAN ADD A SEPARATE CASE
      // OR JUST PUT IT AS DEFAULT AND WE CAN DEAL WITH IT LATER, PLEASE LABEL WHAT OBERVATION YOUR caseList[x][y]
      // IS RELATED TO AS A COMMENT TO THE RIGHT
      default:
        return null;
    }
  }

  render() {
    const { casePressed, caseNormal } = this.state;
    const { questionInput } = this.props;
    let allCircle = (
      <div className="annotations">
        {/* below are the normal annotations rendered in non-STAT mode */}
        {!this.state.onlyAbnormal &&
          !this.props.statMode &&
          caseNormal.map((currElement, index) => {
            return (
              <AnnotationBubble
                caption={caseNormalCaption[this.props.imageIndex][index]}
                label={currElement}
              />
            );
          })}
        {/* below is rendered in non-STAT mode, renders all abnormal annotations
        regardless of question input */}
        {!this.props.statMode &&
          casePressed.map((currElement, index) => {
            return (
              <div onClick={() => this.handleClickAnnotation(currElement)}>
                <AnnotationBubble
                  caption={caseAbnormalCaption[this.props.imageIndex][index]}
                  label={currElement}
                  id={currElement}
                />
              </div>
            );
          })}
        {/* below is rendered in STAT mode, in STAT mode we show annotation
        related to question input */}
        {this.props.statMode &&
          casePressed.map((currElement, index) => {
            if (this.props.imageIndex === 0) {
              if (
                (questionInput.length === 1 &&
                  questionInput[0] === "Pneumonia") ||
                questionInput.length >= 2
              ) {
                if (index >= 3 && index <= 7) {
                  return (
                    <div
                      onMouseEnter={() =>
                        this.handleClickAnnotation(currElement)
                      }
                    >
                      <AnnotationBubble
                        caption={
                          caseAbnormalCaption[this.props.imageIndex][index]
                        }
                        label={currElement}
                        id={currElement}
                      />
                    </div>
                  );
                }
              } else if (
                questionInput.length === 1 &&
                questionInput[0] === "Chest Pain"
              ) {
                if (index === 3 || index === 6 || index === 7) {
                  return (
                    <div
                      onMouseEnter={() =>
                        this.handleClickAnnotation(currElement)
                      }
                    >
                      <AnnotationBubble
                        caption={
                          caseAbnormalCaption[this.props.imageIndex][index]
                        }
                        label={currElement}
                        id={currElement}
                      />
                    </div>
                  );
                }
              } else {
                return (
                  <div
                    onMouseEnter={() => this.handleClickAnnotation(currElement)}
                  >
                    <AnnotationBubble
                      caption={
                        caseAbnormalCaption[this.props.imageIndex][index]
                      }
                      label={currElement}
                      id={currElement}
                    />
                  </div>
                );
              }
            } else {
              if (
                questionInput.length === 2 ||
                (questionInput.length === 1 &&
                  (questionInput[0] === "Cough" ||
                    questionInput[0] === "Shortness of Breath"))
              ) {
                if (index === 3 || index === 4) {
                  return (
                    <div
                      onClick={() => this.handleClickAnnotation(currElement)}
                    >
                      <AnnotationBubble
                        caption={
                          caseAbnormalCaption[this.props.imageIndex][index]
                        }
                        label={currElement}
                        id={currElement}
                      />
                    </div>
                  );
                }
              } else if (
                questionInput.length === 1 &&
                questionInput[0] === "Cardiac"
              ) {
                if (index === 3) {
                  return (
                    <div
                      onClick={() => this.handleClickAnnotation(currElement)}
                    >
                      <AnnotationBubble
                        caption={
                          caseAbnormalCaption[this.props.imageIndex][index]
                        }
                        label={currElement}
                        id={currElement}
                      />
                    </div>
                  );
                }
              } else {
                return (
                  <div onClick={() => this.handleClickAnnotation(currElement)}>
                    <AnnotationBubble
                      caption={
                        caseAbnormalCaption[this.props.imageIndex][index]
                      }
                      label={currElement}
                      id={currElement}
                    />
                  </div>
                );
              }
            }
          })}
      </div>
    );
    let showAll = this.state.showAll ? "pressed_s" : "showAll";
    let buttonWord = this.state.showAll ? "Hide All" : "Show All";
    let showAllButton = (
      <div className={showAll} onClick={() => this.handleClick("showAll")}>
        <div className="text"> {buttonWord} </div>
      </div>
    );
    let toggle = this.state.onlyAbnormal ? "pressed_t" : "toggle";
    let customize = this.state.customizeMode ? "pressed_c" : "customize"; //for now, will have two div modes later when design is decided

    return (
      <div>
        <div className="Annotations" key={this.props.clickedObservation}>
          <div
            className={toggle}
            onClick={() => this.handleClick("onlyAbnormal")}
          >
            <div className="text"> Only Abnormal </div>
          </div>
          {this.state.show && showAllButton}
          {this.state.show && this.state.showAll && allCircle}
        </div>
        <div>
          {this.props.clickedComponent === "annotations" &&
            (() => this.displayHoverWindow(this.state.clickedAnno))()}
        </div>
      </div>
    );
  }
}
export default ToggleAnnotation;
