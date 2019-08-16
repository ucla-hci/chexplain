import React, {Component} from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state={ //can be altered as neeeded
      gender: this.props.patientGender,
      age: this.props.patientAge
    }
  }

  render(){
    return (
      <div className="headerResult">
        <div className="PatientInfo">Patient Information: {this.state.gender}. {this.state.age}</div>
      </div>
    );
  }
}

export default Header;
