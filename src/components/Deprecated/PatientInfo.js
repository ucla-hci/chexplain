import React, {Component} from 'react'

class PatientInfo extends Component {
  render(){
    var text = "Female, 60";
    return (
      //to be replaced by patient information given
      <div className="InfoBar">
        &nbsp;&nbsp;&nbsp;&nbsp;{text}
      </div>
    );
  }
}

export default PatientInfo;
