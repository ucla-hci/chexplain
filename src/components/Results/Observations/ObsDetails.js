import React, { Component } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { IconContext } from "react-icons";

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
            <IconContext.Provider
              value={{
                color: "white",
                size: "2.6em",
                className: "squarelikely"
              }}
            >
              <TiArrowSortedDown />
            </IconContext.Provider>
            <div className="currentlikely">Current</div>
          </div>
        )}
        {this.props.likelyhood === 2 && (
          <div>
            <IconContext.Provider
              value={{
                color: "white",
                size: "2.6em",
                className: "squareverylikely"
              }}
            >
              <TiArrowSortedDown />
            </IconContext.Provider>
            <div className="currentverylikely">Current</div>
          </div>
        )}
        {this.props.likelyhood === 3 && (
          <div>
            <IconContext.Provider
              value={{
                color: "white",
                size: "2.6em",
                className: "squaredefinitely"
              }}
            >
              <TiArrowSortedDown />
            </IconContext.Provider>
            <div className="currentdefinitely">Current</div>
          </div>
        )}
      </div>
    );
  }
}

export default ObsDetails;
