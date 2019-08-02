import React, {Component} from 'react'

class QuestionInputSelected extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputsSelected: this.props.dataFromQuestion
    };
  }

  render(){
    return (
      <div className="QuestionInputSelected">
        <div className="title">Question Input</div>
        <div className="buttonGroup1">
          <ul>
            {
              this.state.inputsSelected.map((currElement) => {
                return <li>{currElement}</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default QuestionInputSelected;
