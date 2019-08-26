import React, { Component } from "react";

class AnnoDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AnnoDetails">
        <ul>
          <li>
            <div className="imageCaption">
              <img src={this.props.image1} />
              {this.props.caption1}
            </div>
          </li>
          <li>
            <div className="imageCaption">
              <img src={this.props.image2} />
              {this.props.caption2}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default AnnoDetails;
