import React, {Component} from 'react';

class Observations extends Component {
  constructor(props){
    super(props);
    this.state = {
      observations:this.props.observations,
      //add onclick on the rectangles later
    };
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

export default Observations;
