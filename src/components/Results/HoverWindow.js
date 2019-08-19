import React, {Component} from 'react';

class HoverWindow extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <div className="HoverWindow">
        <div className="title"><div className="text">{this.props.title||"Hover"}</div></div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
      </div>
    );
  }
}

export default HoverWindow;
