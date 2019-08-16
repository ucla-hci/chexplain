import React, {Component} from 'react';

class Observations extends Component {
  constructor(props){
    super(props);
    this.state = {
      observations:this.props.observations,
      clicked: ""
      //add onclick on the rectangles later
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(observation){
    await this.setState({
      clicked: observation
    });
    this.props.callbackFromParent(this.state.clicked);
  }

  render(){
    return (
      <div>
      <div className="Observations" id="ob">
        <div className="title"><div className="text">Significant Observations</div></div>
        <div className="obList">
          <ul>
            {
              this.state.observations.map((currElement) => {
                return <li onClick={() => this.handleClick(currElement)}>{currElement}</li>
              })
            }
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default Observations;
