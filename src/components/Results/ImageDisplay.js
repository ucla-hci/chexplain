import React, {Component} from 'react';

class ImageDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      url:this.props.url,
      //add onclick on the rectangles later
    };
  }

  render(){
    return (
      <div className="imageDisplayWindow">
        <img className="imageDisplay" src={this.state.url || 'https://via.placeholder.com/390x320'} alt="Uploaded Images"/>
      </div>
    );
  }
}

export default ImageDisplay;
