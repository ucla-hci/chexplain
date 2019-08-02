import React, {Component} from 'react';
import { GoX } from "react-icons/go";
import { IconContext } from "react-icons";
let dialogStyles_big = {
    width: '90%',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 10px 40px 70px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogStyles_small = {
    width: '40%',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 10px 40px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    alignSelf: 'flex-end'
};

class Dialog extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let dialogStyles = this.props.big?dialogStyles_big:dialogStyles_small;
    let dialog = (
      <div className="Dialog">
        {this.props.children}
        <IconContext.Provider value={{ size: "3.2vw" }}>
        <div className="closeButton" onClick={this.props.onClose}><GoX/></div>
        </IconContext.Provider>
      </div>
    );
    if(!this.props.isOpen){
      dialog = null;
    }
    return(
      <div>{dialog}</div>
    );
  }
}

export default Dialog;
