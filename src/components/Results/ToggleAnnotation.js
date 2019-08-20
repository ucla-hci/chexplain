import React, {Component} from 'react';
import HoverWindow from './HoverWindow';
import ObsDetails from './ObsDetails';

const caseList = ["c1p11s12","c2p11s12","c3p11s12","c4p11s12","c5p11s12",
              "c6p11s12", "c7p11s12", "c8p11s12"];
const relatedImageList = [
  ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fright_pleural100%25.png?alt=media&token=ed28e3df-e8ba-4e31-8109-945811e7e102','https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fpleuraleffusionconfident.jpg?alt=media&token=a188b354-afcc-4683-80bd-3a4b0fa3a3a0'],

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
            inherited: [...this.props.display],
            args: [false, false, false, false, true, false], //pleural effusion, airway, breathing, cardiac, unclear, abnormal
            pressedResults:["Hom Opac"],
            clicked: [],
            clickedAnno: "",
            casePressed: ["c1p11s12","c2p11s12","c3p11s12","c4p11s12","c5p11s12",
                          "c6p11s12", "c7p11s12", "c8p11s12"]
                          //support, support, suppot, atelect, edema, cardio, pleural, pleural
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
        var temp = this.state.args;
        if(this.state.args[5] === false){
            temp[5]=true;
            this.setState({args: temp});
        } else {
            temp[5]=false;
            this.setState({args: temp});
        }
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
                    <ObsDetails image1={relatedImageList[0][0]} image2={relatedImageList[0][1]}
                      caption1={captionTemplate1+"Cardiomegaly"}
                      caption2={captionTemplate2+"Cardiomegaly"}/>
                 </HoverWindow>;
        case caseList[4]: //edema
          return <HoverWindow title="Edema (Compare region with abnormal/normal cases)">
                  <ObsDetails image1={relatedImageList[0][0]} image2={relatedImageList[0][1]}
                    caption1={captionTemplate1+"Edema"}
                    caption2={captionTemplate2+"Edema"}/>
                 </HoverWindow>;
        case caseList[3]: //atelect
          return <HoverWindow title="Atelectasis (Compare region with abnormal/normal cases)">
                  <ObsDetails image1={relatedImageList[0][0]} image2={relatedImageList[0][1]}
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
        const {casePressed} = this.state;
        let allCircle = (
          <div className="annotations">
            {
              casePressed.map((currElement, index) => {
                return <div className={currElement} onMouseLeave={() => this.handleUnclick()} onMouseEnter={() => this.handleClickAnnotation(currElement)} id={currElement}/>
              })
            }

          </div>
        );
        let group1 = ( //pleural effusion
          <div>
            <textarea className= { `${"a4"} ${"Breathing"}`} rows="4" cols="12" disabled> Minor blunting of the left costophrenic angle</textarea>
            <textarea className= { `${"a5"} ${"Breathing"}`} rows="3" cols="7" disabled> Meniscus present</textarea>
            <textarea className= { `${"a6"} ${"Breathing"}`} rows="3" cols="12" disabled> Homogenous opacity </textarea>
          </div>
        );
        let showAll = this.state.showAll?"pressed_s":"showAll";
        let showAllButton = (
          <div className = {showAll} onClick = {() => this.handleClick("showAll")}><div className="text"> Show All </div></div>
        );
        let toggle = this.state.args[5]?"pressed_t":"toggle";
        let customize = this.state.customizeMode?"pressed_c":"customize"; //for now, will have two div modes later when design is decided

        return(
          <div>
            <div className = "Annotations" key={this.props.clickedObservation}>
              <div className = {toggle} onClick = {() => this.handleClick("onlyAbnormal")}><div className="text"> Only Abnormal </div></div>
              <div className = {customize} onClick = {() => this.handleClick("customize")}><div className="text"> Customize Labels </div></div>
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
export default ToggleAnnotation;
