import React, {Component} from 'react';
import { GoX } from "react-icons/go";
import { IconContext } from "react-icons";

class Dialog extends Component{
  render(){
    let dialogStyles = this.props.big?"Dialog":"DialogSmall";
    let dialog = (
      <div className={dialogStyles}>
      <IconContext.Provider value={{ size: "3.2vw" }}>
      <div className="closeButton" onClick={this.props.onClose}><GoX/></div>
      </IconContext.Provider>
      <div>
        {this.props.children}
      </div>
      </div>
    );
    if(!this.props.isOpen){
      dialog = null;
    }
    return(
      <div>
        {dialog}
      </div>
    );
  }
}

export default Dialog;
