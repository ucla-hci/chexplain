import React, {Component} from 'react';

class ToggleAnnotation extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            show: true,
            showAll: false,
            inherited: [...this.props.display],
            args: [false, false, false, false, true], //pleural effusion, airway, breathing, cardiac, unclear
            pressedResults:["Hom Opac"]
        }
    }

    handleClick(whichButton){
      if(whichButton==="toggle"){
        if(this.state.show === false){
            this.setState({show: true});
            console.log("true");
        } else {
            this.setState({show: false});
            console.log("false");
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
        let all = (
          <div>{group1}{group2}{group3}{group4}</div>
        );
        let showAll = this.state.showAll?"pressed_s":"showAll";
        let showAllButton = (
          <div><button className = {showAll} onClick = {() => this.handleClick("showAll")}> Show All </button></div>
        );
        let toggle = this.state.show?"pressed_t":"toggle";
        return(
            <div className = "Annotations">
              <button className = {toggle} onClick = {() => this.handleClick("toggle")}> Toggle Annotation </button>
              <div>
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
                this.state.show && true &&
                  group5
              }
              </div>
            </div>
        );
    }


}
export default ToggleAnnotation;
