import React, {Component} from 'react';

class ToggleAnnotation extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            show: true,
            showAll: false,
            inherited: [...this.props.display],
            args: [false, false, false, false, true, false], //pleural effusion, airway, breathing, cardiac, unclear, abnormal
            pressedResults:["Hom Opac"]
        }
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
    }


    render(){
        let group1 = ( //pleural effusion
          <div>
            <textarea className= { `${"a4"} ${"Breathing"}`} rows="4" cols="12" disabled> Minor blunting of the left costophrenic angle</textarea>
            <textarea className= { `${"a5"} ${"Breathing"}`} rows="3" cols="7" disabled> Meniscus present</textarea>
            <textarea className= { `${"a6"} ${"Breathing"}`} rows="3" cols="12" disabled> Homogenous opacity </textarea>
            <div className="c1p11s11"/>
            <div className="c2p11s11"/>
            <div className="c3p11s11"/>
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
          <div><button className = {showAll} onClick = {() => this.handleClick("showAll")}> Show All </button></div>
        );
        let toggle = this.state.args[5]?"pressed_t":"toggle";
        return(
            <div className = "Annotations">
              <button className = {toggle} onClick = {() => this.handleClick("onlyAbnormal")}> Only Abnormal </button>
              {
                this.state.show && showAllButton
              }
              {
                this.state.show && this.state.showAll &&
                  all
              }
              {
                this.state.show && (this.props.display.includes("Chest Pain")||this.props.display.includes("Pleural Effusion")) &&
                  group1
              }
              {
                this.state.show && this.props.display.includes("Airway") &&
                  group2
              }
              {
                this.state.show && this.props.display.includes("Breathing") &&
                  group3
              }
              {
                this.state.show && this.props.display.includes("Cardiac") &&
                  group4
              }
              {
                this.state.show && this.state.args[5] &&
                  group6
              }
            </div>
        );
    }


}
export default ToggleAnnotation;
