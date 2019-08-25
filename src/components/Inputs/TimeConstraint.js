import React, {Component} from 'react';
import Toggle from 'react-toggle';

class TimeConstraint extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      stat: this.props.data
    };
  }

  async handleClick(bool){
    await this.setState({
      stat: !this.state.stat
    });
    this.props.callbackFromParent(bool);
  }

  render(){
    var divName = this.props.type?"TimeConstraintToggle":"TimeConstraintToggle_result";
    return (
      <div className={divName}>
        <div className="text">STAT</div>
        <Toggle
          defaultChecked={this.props.data}
          icons={false}
          onChange={() => this.handleClick(!this.state.stat)} />
      </div>
    );
  }
}

export default TimeConstraint;
