import React, { Component } from "react";

class ObsDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="obsDetails">
        <ul>
          <li>
            <div className="imageCaption">
              <img src={this.props.image1} />
            </div>
          </li>
          <li>
            <div className="imageCaption">
              <img src={this.props.image2} />
            </div>
          </li>
        </ul>
        <div className="line">
          <img src={require("../../../images/linearrow.png")} width="500px" />
        </div>
        <div className="squarelikely" />
        <div className="squareverylikely" />
        <div className="squaredefinitely" />
      </div>
    );
  }
}

export default ObsDetails;
