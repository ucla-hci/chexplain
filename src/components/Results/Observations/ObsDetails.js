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
          <img src={require("../../../images/linearrow.png")} width="510px" />
        </div>
        {this.props.likelyhood === 1 && (
          <div>
            <div className="squarelikely" />
            <div className="currentlikely">Current</div>
          </div>
        )}
        {this.props.likelyhood === 2 && (
          <div>
            <div className="squareverylikely" />
            <div className="currentverylikely">Current</div>
          </div>
        )}
        {this.props.likelyhood === 3 && (
          <div>
            <div className="squaredefinitely" />
            <div className="currentdefinitely">Current</div>
          </div>
        )}
      </div>
    );
  }
}

export default ObsDetails;
