import React, {Component} from 'react';
import { MdDone, MdClear, MdRemove } from "react-icons/md";
import { IconContext } from "react-icons";

class ImpDetails extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="impressionExplan">
      <IconContext.Provider value={{ size: "1.2vw"}}>
      <ul>
        <li><MdRemove/> Prevalence: {this.props.base}%</li>
        <li>
          <ul>
          {
            this.props.pos.map((currElement) => {
              return <li><MdDone/> {currElement}</li>
            })
          }
          </ul>
        </li>
        <li>
          <ul>
          {
            this.props.neg.map((currElement) => {
              return <li><MdClear/> {currElement}</li>
            })
          }
          </ul>
        </li>
      </ul>
      </IconContext.Provider>
      </div>
    );
  }
}

export default ImpDetails;
