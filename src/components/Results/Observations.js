import React, {Component} from 'react';
import HoverWindow from './HoverWindow';

const impressionList = ["Congestive Heart Failure", "Pneumonia", "Lung Cancer"];

const hoverImage = ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnormal-chest-x-ray.jpg?alt=media&token=a461a18d-e864-47fc-8cb6-46d4ab4e171c',
                    'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2FEdema.png?alt=media&token=0b5545a1-f8fc-4aad-9aa6-efca0e3e06ad'];

class Observations extends Component {
  constructor(props){
    super(props);
    this.state = {
      observations:this.props.observations,
      clicked: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(observation){
    await this.setState({
      clicked: observation
    });
    //highlight clicked observation
    this.state.observations.map((currElement) => {
      document.getElementById(currElement).style.color = "#CDCDCD";
    });
    document.getElementById(observation).style.color = "#42C0FC";
    //clear impression colors
    impressionList.map((currElement) => {
      document.getElementById(currElement).style.color = "#CDCDCD";
    });
    //link observation and related impression
    switch(observation){
      case "Edema":
        document.getElementById(impressionList[0]).style.color = "#42C0FC";
        break;
      case "Pleural Effusion":
        document.getElementById(impressionList[0]).style.color = "#42C0FC";
        document.getElementById(impressionList[1]).style.color = "#42C0FC";
        document.getElementById(impressionList[2]).style.color = "#42C0FC";
        break;
      case "Atelectasis":
        document.getElementById(impressionList[1]).style.color = "#42C0FC";
    }
    this.props.callbackFromParent(this.state.clicked);
  }

  render(){
    let obs1hover = ( //what appears for hover when obs1 is clicked
      <div>
      <ul>
        <li><div className="imageCaption"><img src={hoverImage[0]}/>ffff</div></li>
        <li><div className="imageCaption"><img src={hoverImage[1]}/>dddd</div></li>
      </ul>
      </div>
    );
    return (
      <div>
      <div className="Observations" id="ob">
        <div className="title"><div className="text">Significant Observations</div></div>
        <div className="obList">
          <ul>
            {
              this.state.observations.map((currElement, index) => {
                return <li id={currElement} onClick={() => this.handleClick(currElement)}>{currElement} {this.props.percentages[index]}</li>
              })
            }
          </ul>
        </div>
      </div>
      <HoverWindow>{obs1hover}</HoverWindow>
      </div>
    );
  }
}

export default Observations;
