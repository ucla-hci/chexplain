import React, {Component} from 'react'
import Magnifier from "../Magnifier.es";
import { GoX } from "react-icons/go";
import { IconContext } from "react-icons";

const images = [
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest1.jpg?alt=media&token=8b20e1dc-6641-4a85-9a74-a5135bc0275e',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Fview1_frontal.jpg?alt=media&token=dea45d71-dcd1-49bd-83d9-41dd2bce2378',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest3.jpg?alt=media&token=ffd7b1be-43a5-4cc0-bf74-baeeac1e535f',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest4.jpg?alt=media&token=ab7aa1e4-b43c-4bf9-bbbc-f7155e30cbad',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest5.jpg?alt=media&token=3b318c41-b2a1-44a8-a8d2-fccd84731041',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2Ftest6.jpg?alt=media&token=a7e46bbd-6917-4957-be30-0985173d062e',
];

const case11images = [
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fc11s1_view1_frontal.jpg?alt=media&token=1a215ff2-bc35-448c-8e4f-9c7c56661c71',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fc11s9_view1_frontal.jpg?alt=media&token=df7f4348-88bd-4ee3-b0ed-8ec1cd951b79',
  'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fc11s11_view1_frontal.jpg?alt=media&token=411551be-0228-45ba-9261-cf485637c022'
];
const case11CrossPatient = [
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fcardiomegaly.jpeg?alt=media&token=bc6e62ce-5fb8-4e8c-9ccb-4c36406c017a', "Cardiomegaly"], //2Fcardiomegaly
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2FEdema.png?alt=media&token=0b5545a1-f8fc-4aad-9aa6-efca0e3e06ad', "Edema"], //Edema
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fpleural%20effusion.jpg?alt=media&token=292eaa7b-9dd7-49b9-8424-084f1b1463bb', "Pleural Effusion"], //pleural effusion
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fround-atelectasis.jpg?alt=media&token=9e9328a1-9045-4e42-8224-85a925e7edc7', "Round Atelectasis"]
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
  }

// NOTE: handles switiching to prior image mode
  async handleClickPriorImage(num){
    await this.setState({
      isOpen: true,
      photoIndex: num
    });
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


  render(){
    // NOTE: Below is rendered in result mode, not prior image mode
    let priorImage = this.state.isOpen?"PriorImagesOpened":"PriorImages";
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
        <div className="c1p11s12"/>
        <div className="c2p11s12"/>
        <div className="c3p11s12"/>
        <div className="c4p11s12"/>
        <div className="c5p11s12"/>
        <div className="c6p11s12"/>
        <div className="c7p11s12"/>
        <div className="c8p11s12"/>
      </div>
    );
    let priorStudy1Annotation = (
      <div className="annotations">
        <div className="c1p11s1"/>
        <div className="c2p11s1"/>
      </div>
    );
    let priorStudy11Annotation = (
      <div className="annotations">
        <div className="c1p11s11"/>
        <div className="c2p11s11"/>
        <div className="c3p11s11"/>
        <div className="c4p11s11"/>
        <div className="c5p11s11"/>
        <div className="c6p11s11"/>
        <div className="c7p11s11"/>
        <div className="c8p11s11"/>
      </div>
    );
    let priorStudy9Annotation = (
      <div className="annotations">
        <div className="c1p11s9"/>
        <div className="c2p11s9"/>
        <div className="c3p11s9"/>
        <div className="c4p11s9"/>
        <div className="c5p11s9"/>
        <div className="c6p11s9"/>
      </div>
    );

    // NOTE: select which prior study annotation to render
    let priorAnnotation = priorStudy1Annotation;
    if(this.state.photoIndex===1){
      priorAnnotation = priorStudy9Annotation;
    }else if(this.state.photoIndex===2){
      priorAnnotation = priorStudy11Annotation;
    }

    if(!this.state.priorImageMode){
      priorAnnotation = null;
    }

    // NOTE: below is rendered when you enter prior image mode
    let caption = this.state.priorImageMode?"Prior CXR Image ":"Similar patient with ";
    let bookmarkRegion = this.state.bookmarkRegionOn?"BookmarkRegions_p":"BookmarkRegions",
        showAnnotationButton = this.state.showAnnotation?"ShowAnnotation_p":"ShowAnnotation";
    let display = (
      <div>
      <div className="display">
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
        <div className="text">{caption} {this.state.priorImageMode?dates[this.state.photoIndex]:case11CrossPatient[this.state.photoIndex][1]}</div>
      </div>
      <div className="headerPriorImage">
        <div className="PatientInfo">Patient Information: {this.state.gender}. {this.state.age}</div>
        <div className="ReturnButton" onClick={() => this.handleClose()}><div className="text">Return</div></div>
        <div className={showAnnotationButton} onClick={() => this.setState({
          showAnnotation: !this.state.showAnnotation,
          bookmarkRegionOn: !this.state.bookmarkRegionOn
        })}><div className="text">Show Annotations</div></div>
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
