import React, { Component } from "react";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnalyzed: false
    };
  }
  componentDidMount() {
    setTimeout(
      function() {
        //Start the timer
        this.setState({ isAnalyzed: true }); //After 1 second, set render to true
        console.log(this.state.isAnalyzed);
        this.props.callbackFromParent(this.state.isAnalyzed);
      }.bind(this),
      3000
    );
  }
  render() {
    var Spinner = require("react-spinkit");
    return (
      <div>
        {!this.state.isAnalyzed && (
          <div className="loading">
            <Spinner name="cube-grid" color="white" />
            <h1>We are computing your results...</h1>
            <div className="overlay" />
          </div>
        )}
      </div>
    );
  }
}

export default Loading;
