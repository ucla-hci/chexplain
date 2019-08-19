import React, {Component} from 'react';

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
                return <li id={currElement} onMouseEnter={() => this.handleClick(currElement)} onClick={() => this.handleClick(currElement)}>{currElement}</li>
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
