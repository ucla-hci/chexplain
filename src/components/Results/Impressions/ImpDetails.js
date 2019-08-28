import React, { Component } from "react";
import { MdDone, MdClear, MdRemove } from "react-icons/md";
import { IconContext } from "react-icons";

class ImpDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="impressionExplan">
        <IconContext.Provider value={{ size: "1.2vw" }}>
          <ul>
            <li>Prevalence: {this.props.base}% </li>
            <li>Factors that decrease probability: </li>
            <li>
              <div className="nestedExplan">
                <ul>
                  {this.props.pos.map(currElement => {
                    return (
                      <li>
                        <div className="text">{currElement}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>Factors that increase probability: </li>
            <li>
              <div className="nestedExplan">
                <ul>
                  {this.props.neg.map(currElement => {
                    return (
                      <li>
                        <div className="text">{currElement}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
    );
  }
}

export default ImpDetails;
