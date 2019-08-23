import React, {Component} from 'react';
import HoverWindow from './HoverWindow';
import ObsDetails from './ObsDetails';
import AnnotationBubble from './AnnotationBubble';

const caseList = ["c1p11s12","c2p11s12","c3p11s12","c4p11s12","c5p11s12",
              "c6p11s12", "c7p11s12", "c8p11s12"];
const relatedImageList = [
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fpleuraleffusionconfident.jpg?alt=media&token=a188b354-afcc-4683-80bd-3a4b0fa3a3a0','https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fright_pleural100%25.png?alt=media&token=ed28e3df-e8ba-4e31-8109-945811e7e102'], //pleuralEffusionImage
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fatelectsmall.jpg?alt=media&token=c0c47ef3-66b3-424f-8bc5-542ff94d3598','https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnoatelect.jpg?alt=media&token=3cf8689e-644c-47a4-880a-5cc5eef17eed'], //atelectasis
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fcardiosmall.jpg?alt=media&token=81e9b209-b02f-469f-8783-2614d1352155','https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnocardio.jpg?alt=media&token=2e0a8a5a-dd09-4116-81e1-67752f8d123c'], //cardio
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fedemasmall.jpg?alt=media&token=88848484-faef-4e93-be5f-25ae0bb725df','https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnoedema.jpg?alt=media&token=78b6338b-d890-45ee-ac34-ad701e8513a1'], //edema
];

const caseNormalCaption = [
  "Central Trachea",
  "Clear Right Lung"
];

const caseAbnormalCaption = [
  "Support Device",
  "Support Device",
  "Support Device",
  "Atelectasis",
  "Edema",
  "Cardiomegaly",
  "Pleural Effusion",
  "Pleural Effusion"
];

class ToggleAnnotation extends Component {
    constructor(props){
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
            casePressed: ["c1p11s12","c2p11s12","c3p11s12","c4p11s12","c5p11s12",
                          "c6p11s12", "c7p11s12", "c8p11s12"],
                          //support, support, suppot, atelect, edema, cardio, pleural, pleural
            caseNormal: ["c9p11s12", "c10p11s12"],
        }
    }

    //calls every time prop changes
    componentWillReceiveProps(nextProps, nextState) {
      //stringify so we can compare arrays easier
      if(JSON.stringify(nextProps.clickedObservation) != JSON.stringify(this.state.clicked)){
        this.setState({clicked: [...nextProps.clickedObservation]});
      }
      let tempList = [...caseList]; //case list is set list of case names
      //map through clicked observation to know which ones to highlight
      nextProps.clickedObservation.map((currElement) => {
        switch(currElement){
          case "Cardiomegaly":
            tempList[5]="c6p11s12_p";
            break;
          case "Edema":
            tempList[4]="c5p11s12_p";
            break;
          case "Atelectasis":
            tempList[3]="c4p11s12_p";
            break;
          case "Pleural Effusion":
            tempList[6]="c7p11s12_p";
            tempList[7]="c8p11s12_p";
            break;
          case "Support Device":
            tempList[0]="c1p11s12_p";
            tempList[1]="c2p11s12_p";
            tempList[2]="c3p11s12_p";
            break;
        }
      });
      this.setState({
        casePressed: tempList
      });
    }

    handleClick(whichButton){
      if(whichButton==="onlyAbnormal"){
        this.setState({
          onlyAbnormal: !this.state.onlyAbnormal,
          showAll: true
        });
      }
      if(whichButton==="showAll"){
        if(this.state.showAll === false){
            this.setState({showAll: true});
            console.log("true");
        } else {
            this.setState({showAll: false});
            console.log("false");
        }
      }
      if(whichButton==="customize"){
        if(this.state.customizeMode === false){
            this.setState({customizeMode: true});
        } else {
            this.setState({customizeMode: false});
        }
      }
    }
    // NOTE: called when annotation is clicked/hovered
    handleClickAnnotation(clickedElement){
      this.setState({
        clickedAnno: clickedElement
      });
      let tempList = [...caseList];
      let callbackList = [];
      //case list listens for when annotation is clicked similar annoation should be highlighted
      switch(clickedElement){
        case caseList[5]: //cardio
          tempList[5]="c6p11s12_p";
          callbackList.push("Cardiomegaly");
          break;
        case caseList[4]: //edema
          tempList[4]="c5p11s12_p";
          callbackList.push("Edema");
          break;
        case caseList[3]: //atelect
          tempList[3]="c4p11s12_p";
          callbackList.push("Atelectasis");
          break;
        case caseList[6]: //pleurl
        case caseList[7]: //pleurl
          tempList[6]="c7p11s12_p";
          tempList[7]="c8p11s12_p";
          callbackList.push("Pleural Effusion");
          break;
        case caseList[0]: //support
        case caseList[1]:
        case caseList[2]:
          tempList[0]="c1p11s12_p";
          tempList[1]="c2p11s12_p";
          tempList[2]="c3p11s12_p";
          callbackList.push("Support Device");
          break;
      }
      if(JSON.stringify(tempList) != JSON.stringify(this.state.casePressed)){
        this.setState({
          casePressed: tempList
        });
      }
      this.props.callbackFromParent(callbackList);
    }

    // NOTE: handle unclick basically resets all values, so it looks like nothing is pressed
    handleUnclick(){
      this.setState({
        clicked: [""],
        clickedAnno: "",
        casePressed: ["c1p11s12","c2p11s12","c3p11s12","c4p11s12","c5p11s12",
                      "c6p11s12", "c7p11s12", "c8p11s12"]
      });
    }

    displayHoverWindow(clickedElement){
      let captionTemplate1 = "Sample region with ";
      let captionTemplate2 = "Sample region without ";
      switch(clickedElement){
        case caseList[5]: //cardio
          return <HoverWindow title="Cardiomegaly (Compare region with abnormal/normal cases)">
                    <ObsDetails image1={relatedImageList[2][0]} image2={relatedImageList[2][1]}
                      caption1={captionTemplate1+"Cardiomegaly"}
                      caption2={captionTemplate2+"Cardiomegaly"}/>
                 </HoverWindow>;
        case caseList[4]: //edema
          return <HoverWindow title="Edema (Compare region with abnormal/normal cases)">
                  <ObsDetails image1={relatedImageList[3][0]} image2={relatedImageList[3][1]}
                    caption1={captionTemplate1+"Edema"}
                    caption2={captionTemplate2+"Edema"}/>
                 </HoverWindow>;
        case caseList[3]: //atelect
          return <HoverWindow title="Atelectasis (Compare region with abnormal/normal cases)">
                  <ObsDetails image1={relatedImageList[1][0]} image2={relatedImageList[1][1]}
                  caption1={captionTemplate1+"Atelectasis"}
                  caption2={captionTemplate2+"Atelectasis"}/>
                 </HoverWindow>;
        case caseList[6]: //pleurl
        case caseList[7]: //pleurl //pleurl
          return <HoverWindow title="Pleural Effusion (Compare region with abnormal/normal cases)">
                  <ObsDetails image1={relatedImageList[0][0]} image2={relatedImageList[0][1]}
                    caption1={captionTemplate1+"Pleural Effusion"}
                    caption2={captionTemplate2+"Pleural Effusion"}/>
                 </HoverWindow>;
        case caseList[0]: //support
        case caseList[1]:
        case caseList[2]:
          return <HoverWindow title="Support Device (Compare region with abnormal/normal cases)">
                  <ObsDetails image1={relatedImageList[0][0]} image2={relatedImageList[0][1]}
                    caption1={captionTemplate1+"Support Device"}
                    caption2={captionTemplate2+"Support Device"}/>
                 </HoverWindow>;
        default:
          return null;
      }
    }


    render(){
        const {casePressed, caseNormal} = this.state;
        let group1 = ( //pleural effusion
          <div>
            <textarea className="a1" rows="2" cols="6" disabled>Central Trachea</textarea>
            <textarea className="a2" rows="3" cols="7" disabled>Evaulable right lung clear</textarea>
          </div>
        );
        let allCircle = (
          <div className="annotations">
            {
              !this.state.onlyAbnormal && caseNormal.map((currElement, index) => {
                return <AnnotationBubble caption={caseNormalCaption[index]} label={currElement}/>
              })
            }
            {
              casePressed.map((currElement, index) => {
                return <div onMouseLeave={() => this.handleUnclick()} onMouseEnter={() => this.handleClickAnnotation(currElement)}>
                        <AnnotationBubble caption={caseAbnormalCaption[index]} label={currElement} id={currElement} />
                       </div>
              })
            }
          </div>
        );
        let showAll = this.state.showAll?"pressed_s":"showAll";
        let buttonWord = this.state.showAll?"Hide All":"Show All";
        let showAllButton = (
          <div className = {showAll} onClick = {() => this.handleClick("showAll")}><div className="text"> {buttonWord} </div></div>
        );
        let toggle = this.state.onlyAbnormal?"pressed_t":"toggle";
        let customize = this.state.customizeMode?"pressed_c":"customize"; //for now, will have two div modes later when design is decided

        return(
          <div>
            <div className = "Annotations" key={this.props.clickedObservation}>
              <div className = {toggle} onClick = {() => this.handleClick("onlyAbnormal")}><div className="text"> Only Abnormal </div></div>
              {
                this.state.show && showAllButton
              }
              {
                this.state.show && this.state.showAll && allCircle
              }
            </div>
            <div>
            {
              (() =>
                this.displayHoverWindow(this.state.clickedAnno)
              )()
            }
            </div>
          </div>
        );
    }


}

//              <div className = {customize} onClick = {() => this.handleClick("customize")}><div className="text"> Customize Labels </div></div>

export default ToggleAnnotation;
