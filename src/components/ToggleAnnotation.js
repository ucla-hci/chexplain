import React, {Component} from 'react';

class ToggleAnnotation extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            show: "true"
        }
    }
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const context = this.refs.canvas.getContext('2d');
        var canvasSizex = 300;
        var canvasSizey = 300;
        var ann1x = canvasSizex * .48;
        var ann1y = canvasSizey * .03;
        var ann2x = canvasSizex * .65;
        var ann2y = canvasSizey * .15;
        var ann3x = canvasSizex * .53;
        var ann3y = canvasSizey * .35;
        var ann4x = canvasSizex * .73;
        var ann4y = canvasSizey * .57;
        var ann5x = canvasSizex * .04;
        var ann5y = canvasSizey * .12;
        var ann6x = canvasSizex * .1;
        var ann6y = canvasSizey * .37;
        var ann7x = canvasSizex * .15;
        var ann7y = canvasSizey * .55;
        var ann8x = canvasSizex * .2;
        var ann8y = canvasSizey * .75;
        //Central trachea
        context.strokeStyle = "#5acc5a";
        context.lineWidth = .5;
        context.strokeRect(ann1x,ann1y,60,25);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("Central Trachea", ann1x, ann1y*2.5);
        //clear left lung
        context.strokeStyle = "#5acc5a"
        context.lineWidth = .5;
        context.strokeRect(ann2x,ann2y, 55, 25);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("Clear left lung", ann2x, ann2y*1.3);
        //normal position of
        context.strokeStyle = "#5acc5a"
        context.lineWidth = .5;
        context.strokeRect(ann3x,ann3y, 80, 40);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("Normal position of", ann3x, ann3y*1.1);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("the left mediastinal  ", ann3x, ann3y*1.1+8);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("and cardiac contours ", ann3x, ann3y*1.1+16);
        //minor blunting of the left
        context.strokeStyle = "#5acc5a"
        context.lineWidth = .5;
        context.strokeRect(ann4x, ann4y, 75, 45);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("Minor blunting of the", ann4x, ann4y*1.05);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("left costophrenic", ann4x, ann4y*1.05+8);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("angle", ann4x, ann4y*1.05+16);
        //meniscus present
        context.strokeStyle = "#5acc5a"
        context.lineWidth = .5;
        context.strokeRect(ann5x,ann5y, 65, 20);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("Meniscus present", ann5x, ann5y*1.30);
        //homogenous opacity
        context.strokeStyle = "#5acc5a"
        context.lineWidth = .5;
        context.strokeRect(ann6x,ann6y, 75, 20);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("Homogenous opacity", ann6x, ann6y*1.12);
        //the right hemidiaphragm
        context.strokeStyle = "#b0b0b0"
        context.lineWidth = .5;
        context.strokeRect(ann7x,ann7y, 75, 40);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("The right", ann7x, ann7y*1.07);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("hemidiaphragm", ann7x, ann7y*1.07+8);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("and cardiac contour", ann7x, ann7y*1.07+16);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("are not visible", ann7x, ann7y*1.07+24);
        //obliteration
        context.strokeStyle = "#b0b0b0"
        context.lineWidth = .5;
        context.strokeRect(ann8x,ann8y, 70, 40);
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("Obliteration of the", ann8x, ann8y*1.07); 
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("right costophrenic", ann8x, ann8y*1.07+8); 
        context.font = "8px Arial";
        context.textAlign = "left";
        context.fillText("angle", ann8x, ann8y*1.07+16); 
        

        context.strokeStyle = "#d3d3d3"
        context.lineWidth = 2;
        context.strokeRect(0,0, 300, 300);
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
        return(
            <div className = "draw">
                
                <canvas className= {this.state.show} ref="canvas" width="300" height="300"> </canvas>
                <button className = "toggle" onClick = {() => this.handleClick()}> Toggle Annotation </button>
            </div>
        );
    }


}
export default ToggleAnnotation;