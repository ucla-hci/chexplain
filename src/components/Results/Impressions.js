import React, {Component} from 'react';

class Impressions extends Component {
  constructor(props){
    super(props);
    this.state = {
      impressions:this.props.impressions,
      //add onclick on the rectangles later
    };
  }

  render(){
    return (
      <div>
      <div className="Impressions">
        <div className="title">Impressions</div>
        <div className="rectangle"/>
        <div className="rectangle"/>
        <div className="rectangle"/>
        <div className="obList">
          <ul>
            {
              this.state.impressions.map((currElement) => {
                return <li>{currElement}</li>
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