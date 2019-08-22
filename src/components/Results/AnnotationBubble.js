import React, {Component} from 'react';

class AnnotationBubble extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={this.props.label}>
        <div className="circle" id={this.props.label}/>
        <div className="caption">
          {this.props.caption}
        </div>
      </div>
    );
  }
}

export default AnnotationBubble;
