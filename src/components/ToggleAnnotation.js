import React, {Component} from 'react';

class ToggleAnnotation extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            show: "false",
            args: [true, true, true, true, true],
        }
    }
    
    handleClick(){
        if(this.state.show === "false"){
            this.setState({show: "true"});
            console.log("true");
        } else {
            this.setState({show: "false"});
            console.log("false");
        }
    }
    render(){
        var pleuralEffusion = (this.state.args[0] === true) ? "PleuralEffusion" : "false";
        var airway = (this.state.args[1] === true) ? "Airway" : "false";
        var breathing = (this.state.args[2] === true) ? "Breathing" : "false";
        var cardiac = (this.state.args[3] === true) ? "Cardiac" : "false";
        var unclear = (this.state.args[4] === true) ? "Unclear" : "false";
        return(
            <div className = "draw">
                
                {/*<canvas className= {this.state.show} ref="canvas" width="300" height="300"> </canvas>*/}
                <textarea className= { `${this.state.show} ${"a1"} ${this.airway}`} rows="2" cols="6" disabled> Central Trachea </textarea>
                <textarea className= { `${this.state.show} ${"a2"} ${this.breathing}`} rows="2" cols="7" disabled> Clear left lung </textarea>
                <textarea className= { `${this.state.show} ${"a3"} ${this.cardiac}`} rows="4" cols="13" disabled> Normal position of the left mediastinal and cardiac contours </textarea>
                <textarea className= { `${this.state.show} ${"a4"} ${this.breathing} ${this.pleuralEffusion}`} rows="4" cols="12" disabled> Minor blunting of the left costophrenic angle</textarea>
                <textarea className= { `${this.state.show} ${"a5"} ${this.breathing} ${this.pleuralEffusion}`} rows="2" cols="7" disabled> Meniscus present</textarea>
                <textarea className= { `${this.state.show} ${"a6"} ${this.breathing} ${this.pleuralEffusion}`} rows="2" cols="8" disabled> Homogenous opacity </textarea>
                <textarea className= { `${this.state.show} ${"a7"} ${this.unclear}`} rows="4" cols="14" disabled> The right hemidiaphragm and cardiac contour are not visible</textarea>
                <textarea className= { `${this.state.show} ${"a8"} ${this.unclear}`} rows="4" cols="10" disabled> Obliteration of the right costophrenic angle </textarea>

                <button className = "toggle" onClick = {() => this.handleClick()}> Toggle Annotation </button>
            </div>
        );
    }


}
export default ToggleAnnotation;