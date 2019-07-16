import React, {Component} from 'react';

class ToggleAnnotation extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            show: false,
            inherited: [...this.props.display],
            args: [false, false, false, false, true] //pleural effusion, airway, breathing, cardiac, unclear
        }
    }

    handleClick(){
        if(this.state.show === false){
            this.setState({show: true});
            console.log("true");
        } else {
            this.setState({show: false});
            console.log("false");
        }
    }

    componentWillReceiveProps(){
      let copy = [...this.state.args];
      copy[0] = this.props.display.includes("Pleural Effusion")?true:false;
      copy[1] = this.props.display.includes("Airway")?true:false;
      copy[2] = this.props.display.includes("Breathing")?true:false;
      copy[3] = this.props.display.includes("Cardiac")?true:false;
      this.setState({
        args: copy
      });
    }

    render(){
        var pleuralEffusion = (this.state.args[0] === true) ? "PleuralEffusion" : "false";
        var airway = (this.state.args[1] === true) ? "Airway" : "false";
        var breathing = (this.state.args[2] === true) ? "Breathing" : "false";
        var cardiac = (this.state.args[3] === true) ? "Cardiac" : "false";
        var unclear = (this.state.args[4] === true) ? "Unclear" : "false";
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
        let group5 = (
          <div>
            <textarea className= { `${"a7"} ${"Unclear"}`} rows="4" cols="18" disabled> The right hemidiaphragm and cardiac contour are not visible</textarea>
            <textarea className= { `${"a8"} ${"Unclear"}`} rows="4" cols="10" disabled> Obliteration of the right costophrenic angle </textarea>
          </div>
        );
        let toggle = this.state.show?"pressed":"toggle";
        return(
            <div className = "Annotations">
              <button className = {toggle} onClick = {() => this.handleClick()}> Toggle Annotation </button>
              <div>
              {
                this.state.show && this.state.args[0] &&
                  group1
              }
              {
                this.state.show && this.state.args[1] &&
                  group2
              }
              {
                this.state.show && this.state.args[2] &&
                  group3
              }
              {
                this.state.show && this.state.args[3] &&
                  group4
              }
              {
                this.state.show && this.state.args[4] &&
                  group5
              }
              </div>
            </div>
        );
    }


}
export default ToggleAnnotation;
