import React, {Component} from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state={ //can be altered as neeeded
      gender: "Female",
      age: "60"
    }
  }

  render(){

    return (
      <div className="headerResult">
        <div className="PatientInfo">Patient Information: {this.state.gender}. {this.state.age}</div>
        <div className="PriorImages">Prior Images</div>
        <button className="ShowHide">Show/Hide All</button>
        <button className="OnlyAb">Only Abnormal</button>
      </div>
    );
  }
}

export default Header;
