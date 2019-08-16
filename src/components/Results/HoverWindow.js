import React, {Component} from 'react';

class HoverWindow extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <div className="HoverWindow">
        <div className="title"><div className="text">Hover</div></div>
      </div>
      </div>
    );
  }
}

export default HoverWindow;
