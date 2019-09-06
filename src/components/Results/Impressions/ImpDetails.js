import React, { Component } from "react";
import { IconContext } from "react-icons";
import Popup from "reactjs-popup";

//card below is for popup function explanations
const Card = ({ title }) => (
  <div className="card">
    <div className="header">
      Prevalence is the percentage of the population in the US with a certain
      differential diagnosis.
    </div>
  </div>
);

class ImpDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="impressionExplan">
        <IconContext.Provider value={{ size: "1.2vw" }}>
          <ul>
            <li>
              <Popup
                trigger={<div>Prevalence: {this.props.base}%</div>}
                position="left bottom"
                on="hover"
                defaultOpen={false}
              >
                <Card />
              </Popup>
            </li>
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
                        <div className={currElement[1]}>{currElement[0]}</div>
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
