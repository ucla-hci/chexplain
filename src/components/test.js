import React, {Component} from 'react'

class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMe: true
    }
  }
  operation(){
    this.setState({
      showMe: !this.state.showMe
    });
  }

  render(){
    return (
      <div className="test">
        <h1>hide element</h1>
        {
          this.state.showMe?
          <div>Please hide me.</div>
          :null
        }

        <button onClick={() => this.operation()}>Click me</button>
      </div>
    );
  }
}

export default Test;
