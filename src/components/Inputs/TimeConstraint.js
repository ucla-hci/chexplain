import React, { Component } from "react";
import Toggle from "react-toggle";
import Popup from "reactjs-popup";

const Card = ({ title }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      When you toggle STAT on, the system will show you significant results
      tailored to your time constraint.
    </div>
  </div>
);

class TimeConstraint extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      stat: this.props.data
    };
  }

  async handleClick(bool) {
    await this.setState({
      stat: !this.state.stat
    });
    this.props.callbackFromParent(bool);
  }

  render() {
    var divName = this.props.type
      ? "TimeConstraintToggle"
      : "TimeConstraintToggle_result";
    return (
      <div className={divName}>
        <Popup
          trigger={
            <div>
              <div className="text">STAT</div>
              <Toggle
                defaultChecked={this.props.data}
                icons={false}
                onChange={() => this.handleClick(!this.state.stat)}
              />
            </div>
          }
          position="left top"
          on="hover"
          defaultOpen={this.props.type}
        >
          <Card title="Urgency Level" />
        </Popup>
      </div>
    );
  }
}

export default TimeConstraint;
