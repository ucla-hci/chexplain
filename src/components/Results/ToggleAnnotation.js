import React, {Component} from 'react';

const caseList = ["c1p11s12","c2p11s12","c3p11s12","c4p11s12","c5p11s12",
              "c6p11s12", "c7p11s12", "c8p11s12"];

class ToggleAnnotation extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickAnnotation = this.handleClickAnnotation.bind(this);
        this.state = {
            show: true, //controls show of everything related to annotation
            showAll: true,
            customizeMode: false,
            inherited: [...this.props.display],
            args: [false, false, false, false, true, false], //pleural effusion, airway, breathing, cardiac, unclear, abnormal
            pressedResults:["Hom Opac"],
            clicked: [],
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

    handleClickAnnotation(clickedElement){
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


    render(){
        const {casePressed} = this.state;
        let allCircle = (
          <div className="annotations">
            {
              casePressed.map((currElement, index) => {
                return <div className={currElement} onMouseEnter={() => this.handleClickAnnotation(currElement)} onClick={() => this.handleClickAnnotation(currElement)} id={currElement}/>
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
        let group2 = ( //airway
          <div>
            <textarea className= { `${"a1"} ${"Airway"}`} rows="2" cols="6" disabled> Central Trachea </textarea>
          </div>
        );
        let group3 = ( //breathing
          <div>
            <textarea className= { `${"a4"} ${"Breathing"}`} rows="4" cols="12" disabled> Minor blunting of the left costophrenic angle</textarea>
            <textarea className= { `${"a5"} ${"Breathing"}`} rows="3" cols="7" disabled> Meniscus present</textarea>
            <textarea className= { `${"a6"} ${"Breathing"}`} rows="3" cols="12" disabled> Homogenous opacity </textarea>
            <textarea className= { `${"a2"} ${"Breathing"}`} rows="2" cols="7" disabled> Clear left lung </textarea>
            <textarea className= { `${"a9"} ${"Breathing"}`} rows="3" cols="10" disabled> Evaluable right lung clear </textarea>
          </div>
        );
        let group4 = ( //cardiac
          <div>
            <textarea className= { `${"a3"} ${"Cardiac"}`} rows="4" cols="13" disabled> Normal position of the left mediastinal and cardiac contours </textarea>
          </div>
        );
        let group5 = ( //unclear
          <div>
            <textarea className= { `${"a7"} ${"Unclear"}`} rows="4" cols="18" disabled> The right hemidiaphragm and cardiac contour are not visible</textarea>
            <textarea className= { `${"a8"} ${"Unclear"}`} rows="4" cols="10" disabled> Obliteration of the right costophrenic angle </textarea>
          </div>
        );
        let group6 = ( //abnormal
          <div>
            <textarea className= { `${"a4"} ${"Breathing"}`} rows="4" cols="12" disabled> Minor blunting of the left costophrenic angle</textarea>
            <textarea className= { `${"a5"} ${"Breathing"}`} rows="3" cols="7" disabled> Meniscus present</textarea>
            <textarea className= { `${"a6"} ${"Breathing"}`} rows="3" cols="12" disabled> Homogenous opacity </textarea>
            <textarea className= { `${"a7"} ${"Unclear"}`} rows="4" cols="18" disabled> The right hemidiaphragm and cardiac contour are not visible</textarea>
            <textarea className= { `${"a8"} ${"Unclear"}`} rows="4" cols="10" disabled> Obliteration of the right costophrenic angle </textarea>
          </div>
        );
        let all = (
          <div>{group1}{group2}{group3}{group4}{group5}</div>
        );
        let showAll = this.state.showAll?"pressed_s":"showAll";
        let showAllButton = (
          <div className = {showAll} onClick = {() => this.handleClick("showAll")}><div className="text"> Show All </div></div>
        );
        let toggle = this.state.args[5]?"pressed_t":"toggle";
        let customize = this.state.customizeMode?"pressed_c":"customize"; //for now, will have two div modes later when design is decided
        console.log(this.props.clickedObservation);
        return(
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
        );
    }


}
export default ToggleAnnotation;
