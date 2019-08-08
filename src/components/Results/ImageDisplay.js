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
      <div>
        <img className="imageDisplay" src={this.state.url || 'https://via.placeholder.com/739x842'} alt="Uploaded Images"/>
      </div>
    );
  }
}

export default ImageDisplay;
