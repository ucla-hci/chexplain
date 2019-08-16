import React, {Component} from 'react';

const impressionList = ["Congestive Heart Failure", "Pneumonia", "Lung Cancer"];

class Impressions extends Component {
  constructor(props){
    super(props);
    this.state = {
      impressions:this.props.impressions,
      clicked: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(impressions){
    await this.setState({
      clicked: impressions
    });
    this.state.impressions.map((currElement) => {
      document.getElementById(currElement).style.color = "#CDCDCD";
    });
    document.getElementById(impressions).style.color = "#42C0FC";
    this.props.callbackFromParent(this.state.clicked);
    let tempList = [];
    switch(impressions){
      case this.state.impressions[0]:
        tempList.push("Edema");
        tempList.push("Pleural Effusion");
        break;
      case this.state.impressions[1]:
        tempList.push("Atelectasis");
        tempList.push("Pleural Effusion");
        break;
      case this.state.impressions[2]:
        tempList.push("Pleural Effusion");
        break;
    }
    this.props.observations.map((currElement) => {
      document.getElementById(currElement).style.color = "#CDCDCD";
    });
    tempList.map((currElement) => {
      document.getElementById(currElement).style.color = "#42C0FC";
    });
    //return to parent obs list
    this.props.callbackFromParent2(tempList);
  }

  render(){
    return (
      <div>
      <div className="Impressions">
        <div className="title"><div className="text">Impressions</div></div>
        <div className="obList">
          <ul>
            {
              this.state.impressions.map((currElement) => {
                return <li id={currElement} onClick={() => this.handleClick(currElement)}>{currElement}</li>
              })
            }
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default Impressions;
