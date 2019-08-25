// NOTE: DON'T CHANGE THIS FILE, CHANGE PriorImagesCase2 FILE
import React, {Component} from 'react'
import Magnifier from "../Magnifier.es";
import { GoX } from "react-icons/go";
import { IconContext } from "react-icons";
import AnnotationBubble from "./AnnotationBubble";

//below are case 11 prior images
const case11images = [
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fc11s11_view1_frontal.jpg?alt=media&token=411551be-0228-45ba-9261-cf485637c022',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fc11s9_view1_frontal.jpg?alt=media&token=df7f4348-88bd-4ee3-b0ed-8ec1cd951b79',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fc11s1_view1_frontal.jpg?alt=media&token=1a215ff2-bc35-448c-8e4f-9c7c56661c71'
];

//below are all the classnames for the current image, including normal and abnormal
const caseCurrentList = ["c1p11s12","c2p11s12","c3p11s12","c4p11s12","c5p11s12",
              "c6p11s12", "c7p11s12", "c8p11s12", "c9p11s12", "c10p11s12"];

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
  ["c1p11s11", "c2p11s11", "c3p11s11", "c4p11s11", "c5p11s11", "c6p11s11", "c7p11s11", "c8p11s11", "c9p11s11", "c10p11s11"],
  ["c1p11s9", "c2p11s9", "c3p11s9", "c4p11s9", "c5p11s9", "c6p11s9", "c7p11s9"],
  ["c1p11s1", "c2p11s1", "c3p11s1"]
];

//below are the captions for the annotation for previous patient images should match order above
const prevCaseCaptions = [
  ["Edema", "Support Device", "Support Device", "Support Device", "Lung Opacity", "Pleural Effusion", "Pleural Effusion", "Edema", "Central Trachea", "Clear Right Lung"],
  ["Support Device", "Support Device", "Support Device", "Enlarged Cardiomediastinum", "Pleural Effusion", "Pleural Effusion", "Clear Right Lung"],
  ["Lung Opacity", "Support Device",  "Clear Right Lung"]
];

//below are thr cross patient comparison images for case 11
const case11CrossPatient = [
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fcardiomegaly.jpeg?alt=media&token=bc6e62ce-5fb8-4e8c-9ccb-4c36406c017a', "Cardiomegaly", "Female", "60"], //cardiomegaly
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2FEdema.png?alt=media&token=0b5545a1-f8fc-4aad-9aa6-efca0e3e06ad', "Edema", "Male", "45"], //Edema
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fpleural%20effusion.jpg?alt=media&token=292eaa7b-9dd7-49b9-8424-084f1b1463bb', "Pleural Effusion", "Male", "80"], //pleural effusion
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fround-atelectasis.jpg?alt=media&token=9e9328a1-9045-4e42-8224-85a925e7edc7', "Atelectasis", "Female", "73"] //atelectasis
];

const dates = [
  '2018/5/10',
  '2017/7/4',
  '2016/10/5',
  '2015/4/3',
  '2014/3/2',
  '2013/11/14'];

class PriorImages extends Component{
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

  colorBorder(){
    if(this.state.showAnnotation){
      //need to highlight region
      caseCurrentList.map((currElement) => {
        document.getElementById(currElement).style.borderStyle = "dotted";
      });
      switch(this.state.photoIndex){
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
  async handleClickPriorImage(num){
    await this.setState({
      isOpen: true,
      photoIndex: num
    });
    this.colorBorder();
    this.props.callbackFromParent(this.state.isOpen);
  }


// NOTE: handles switching to cross patient mode
  async handleClickCrossPatient(num){
    await this.setState({
      isOpen: true,
      photoIndex: num
    });
    this.props.callbackFromParent(this.state.isOpen);
  }

// NOTE: Handles exit of prior image mode
  async handleClose(){
    await this.setState({
      isOpen: false
    });
    this.props.callbackFromParent(this.state.isOpen);
  }

// NOTE: Handles click of show annotation button
  async handleClick(){
    await this.setState({
      showAnnotation: !this.state.showAnnotation,
      bookmarkRegionOn: !this.state.bookmarkRegionOn
    });
    this.colorBorder();
  }


  render(){
    // NOTE: Below is rendered in result mode, not prior image mode
    let priorImage = this.state.isOpen?"PriorImagesOpened":"PriorImages";
    // TODO: Alter code below to match your number of prior images with corresponding dates
    let priorImageSelectWindow = (
      <div className={priorImage}>
        <div className="title">Prior Images</div>
        <div className="hiddenTitle" onClick={() => this.setState({
          priorImageMode: false
        })}>Across Patient</div>
        <div className="underline"/>
        <div className="ImageGroup">
          <ul>
            <li><div className="imageCaption"><img src = {case11images[0]} alt="Image_0" onClick = {() => this.handleClickPriorImage(0)}/>{dates[0]}</div></li>
            <li><div className="imageCaption"><img src = {case11images[1]} alt="Image_1" onClick = {() => this.handleClickPriorImage(1)}/>{dates[1]}</div></li>
            <li><div className="imageCaption"><img src = {case11images[2]} alt="Image_2" onClick = {() => this.handleClickPriorImage(2)}/>{dates[2]}</div></li>
          </ul>
        </div>
      </div>
    );
    let acrossPatient = this.state.isOpen?"AcrossPatientOpened":"AcrossPatient";
    let acrossPatientSelectWindow = (
      <div className={acrossPatient}>
        <div className="title">Across Patient</div>
        <div className="hiddenTitle" onClick={() => this.setState({
          priorImageMode: true
        })}>Prior Images</div>
        <div className="underline"/>
        <div className="ImageGroup">
          <ul>
            <li><div className="imageCaption"><img src = {case11CrossPatient[0][0]} alt="Image_0" onClick = {() => this.handleClickCrossPatient(0)}/>{case11CrossPatient[0][1]}</div></li>
            <li><div className="imageCaption"><img src = {case11CrossPatient[1][0]} alt="Image_1" onClick = {() => this.handleClickCrossPatient(1)}/>{case11CrossPatient[1][1]}</div></li>
            <li><div className="imageCaption"><img src = {case11CrossPatient[2][0]} alt="Image_2" onClick = {() => this.handleClickCrossPatient(2)}/>{case11CrossPatient[2][1]}</div></li>
            <li><div className="imageCaption"><img src = {case11CrossPatient[3][0]} alt="Image_3" onClick = {() => this.handleClickCrossPatient(3)}/>{case11CrossPatient[3][1]}</div></li>
          </ul>
        </div>
      </div>
    );

    // NOTE: Below is rendering of annotation for case 11 main image and prior images
    let currentImageAnnotation = (
      <div className="annotations">
        {
          caseCurrentList.map((currElement, index) => {
            return <AnnotationBubble caption={caseCurrentCaption[index]} label={currElement}/>
          })
        }
      </div>
    );

    // TODO: change the 3 prior case annotation below to match your case
    let priorStudy1Annotation = (
      <div className="annotations">
      {
        prevCaseLists[2].map((currElement, index) => {
          return <AnnotationBubble caption={prevCaseCaptions[2][index]} label={currElement}/>
        })
      }
      </div>
    );
    let priorStudy11Annotation = (
      <div className="annotations">
      {
        prevCaseLists[0].map((currElement, index) => {
          return <AnnotationBubble caption={prevCaseCaptions[0][index]} label={currElement}/>
        })
      }
      </div>
    );
    let priorStudy9Annotation = (
      <div className="annotations">
      {
        prevCaseLists[1].map((currElement, index) => {
          return <AnnotationBubble caption={prevCaseCaptions[1][index]} label={currElement}/>
        })
      }
      </div>
    );

    // TODO: alter code below to match your number of prior images and which photo index corresponds to which study
    // NOTE: select which prior study annotation to render
    let priorAnnotation = priorStudy11Annotation; //default study 11 because it is first image
    if(this.state.photoIndex===1){ //if photo index is 1, then show study 9, since 2nd image is study 9
      priorAnnotation = priorStudy9Annotation;
    }else if(this.state.photoIndex===2){
      priorAnnotation = priorStudy1Annotation;
    }
    //will not render annotation for cross patient comparison
    if(!this.state.priorImageMode){
      priorAnnotation = null;
    }

    // NOTE: below is rendered when you enter prior image mode
    let caption = this.state.priorImageMode?"Prior CXR Image ":"Similar patient with ";
    let bookmarkRegion = this.state.bookmarkRegionOn?"BookmarkRegions_p":"BookmarkRegions",
        showAnnotationButton = this.state.showAnnotation?"ShowAnnotation_p":"ShowAnnotation";
    var obslistcurrent_s = new Set(caseCurrentCaption); //convert caption to set so we don't repeat observation
    var obslistcurrent = [...obslistcurrent_s]; //convert back to array so we can map through it
    var obslistprior_s = new Set(prevCaseCaptions[this.state.photoIndex]);
    var obslistprior = [...obslistprior_s];
    let display = (
      <div>
      <div className="display">

      {
        this.state.priorImageMode && (
          <div className="PriorImageObservation1">
            <div className="title"><div className="text">Observations</div></div>
            <div className="obList2">
            <ul>
              {
                obslistprior.map((currElement, index) => {
                  return <li>{currElement}</li>
                })
              }
            </ul>
            </div>
          </div>
        )
      }
      <div className="PriorImageObservation2">
        <div className="title"><div className="text">Observations</div></div>
        <div className="obList2">
        <ul>
          {
            obslistcurrent.map((currElement, index) => {
              return <li>{currElement}</li>
            })
          }
        </ul>
        </div>
      </div>
      <div className="currentImage">
        {
          this.state.bookmarkRegionOn && (
            <Magnifier src={this.props.currentImage} mgShape='square' mgShowOverflow='false' />
          )
        }
        {
          !this.state.bookmarkRegionOn && (
            <img src={this.props.currentImage} alt="prior image"/>
          )
        }
        {
          !this.state.bookmarkRegionOn && currentImageAnnotation
        }
        <div className="text">Current CXR Image 2019/7/10</div>
      </div>
      <div className="divider2"/><div className="divider2"/><div className="divider2"/><div className="divider"/>
      <div className="priorImage">
        {
          this.state.bookmarkRegionOn && (
            <div className="image"><Magnifier src={this.state.priorImageMode?case11images[this.state.photoIndex]:case11CrossPatient[this.state.photoIndex]} mgShape='square' mgShowOverflow='false' /></div>
          )
        }
        {
          !this.state.bookmarkRegionOn && (
            <img src={this.state.priorImageMode?case11images[this.state.photoIndex]:case11CrossPatient[this.state.photoIndex]} alt="prior image"/>
          )
        }
        {
          !this.state.bookmarkRegionOn && priorAnnotation
        }
        <div className="text">
          {caption}
          {
            this.state.priorImageMode?
            dates[this.state.photoIndex]:
            case11CrossPatient[this.state.photoIndex][1]
          }
          {
            !this.state.priorImageMode &&
            "("+case11CrossPatient[this.state.photoIndex][2]+". "+case11CrossPatient[this.state.photoIndex][3]+")"
          }
        </div>
      </div>
      <div className="headerPriorImage">
        <div className="PatientInfo">Patient Information: {this.state.gender}. {this.state.age}</div>
        <div className="ReturnButton" onClick={() => this.handleClose()}><div className="text">Return</div></div>
        <div className={showAnnotationButton} onClick={() => this.handleClick()}><div className="text">Show Annotations</div></div>
        <div className={bookmarkRegion} onClick={() => this.setState({
          bookmarkRegionOn: !this.state.bookmarkRegionOn,
          showAnnotation: !this.state.showAnnotation
        })}><div className="text">Bookmark Regions</div></div>
      </div>
      </div>
      <div className="ImageSelectionWindow">
        {
          !this.state.priorImageMode && acrossPatientSelectWindow
        }
        {
          this.state.priorImageMode && priorImageSelectWindow
        }
      </div>
      </div>
    );

    return (
      <div>
      {
        !this.state.isOpen && !this.state.priorImageMode && acrossPatientSelectWindow
      }
      {
        !this.state.isOpen && this.state.priorImageMode && priorImageSelectWindow
      }
      {
        this.state.isOpen && display
      }
      </div>
    );
  }
}

export default PriorImages;
