import React, {Component} from 'react';

class ObsDetails extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <ul>
        <li><div className="imageCaption"><img src={this.props.image1}/>0%</div></li>
        <li><div className="imageCaption"><img src={this.props.image2}/>100%</div></li>
      </ul>
      </div>
    );
  }
}

export default ObsDetails;
