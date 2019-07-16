import React, {Component} from 'react'

class SendToRadiologist extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    alert("Sent to radiologists!");
    console.log("uidu");
  }
  render(){
    return (
      <div className="SendButton">
        <button onClick={() => this.handleClick()}>Send To Radiologists</button>
      </div>
    );
  }
}

export default SendToRadiologist;
