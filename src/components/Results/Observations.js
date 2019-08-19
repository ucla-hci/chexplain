import React, {Component} from 'react';
import HoverWindow from './HoverWindow';
import ObsDetails from './ObsDetails';

const impressionList = ["Congestive Heart Failure", "Pneumonia", "Lung Cancer"];

const cardiomegalyImage = ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnormal-chest-x-ray.jpg?alt=media&token=a461a18d-e864-47fc-8cb6-46d4ab4e171c',
                    'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2FEdema.png?alt=media&token=0b5545a1-f8fc-4aad-9aa6-efca0e3e06ad'];
const edemaImage = ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnormal-chest-x-ray.jpg?alt=media&token=a461a18d-e864-47fc-8cb6-46d4ab4e171c',
                    'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2FEdema.png?alt=media&token=0b5545a1-f8fc-4aad-9aa6-efca0e3e06ad'];
const atelectasisImage = ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnormal-chest-x-ray.jpg?alt=media&token=a461a18d-e864-47fc-8cb6-46d4ab4e171c',
                    'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2FEdema.png?alt=media&token=0b5545a1-f8fc-4aad-9aa6-efca0e3e06ad'];
const pleuralEffusionImage = ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnormal-chest-x-ray.jpg?alt=media&token=a461a18d-e864-47fc-8cb6-46d4ab4e171c',
                    'https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2FEdema.png?alt=media&token=0b5545a1-f8fc-4aad-9aa6-efca0e3e06ad'];
const supportDeviceImage = ['https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnormal-chest-x-ray.jpg?alt=media&token=a461a18d-e864-47fc-8cb6-46d4ab4e171c',
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
    this.state.observations.map((currElement) => { //clears previously set colors
      document.getElementById(currElement).style.color = "#CDCDCD";
    });
    document.getElementById(observation).style.color = "#42C0FC"; //sets color of clicked observation to blue
    this.props.callbackFromParent(this.state.clicked);
  }

  render(){
    let obs1hover = ( //what appears for hover when obs1 is clicked
      <HoverWindow title="Cardiomegaly">
        <ObsDetails image1={cardiomegalyImage[0]} image2={cardiomegalyImage[1]}/>
      </HoverWindow>
    );
    let obs2hover = ( //what appears for hover when obs2 is clicked
      <HoverWindow title="Edema">
        <ObsDetails image1={edemaImage[0]} image2={edemaImage[1]}/>
      </HoverWindow>
    );
    let obs3hover = ( //what appears for hover when obs3 is clicked
      <HoverWindow title="Atelectasis">
        <ObsDetails image1={atelectasisImage[0]} image2={atelectasisImage[1]}/>
      </HoverWindow>
    );
    let obs4hover = ( //what appears for hover when obs4 is clicked
      <HoverWindow title="Pleural Effusion">
        <ObsDetails image1={pleuralEffusionImage[0]} image2={pleuralEffusionImage[1]}/>
      </HoverWindow>
    );
    let obs5hover = ( //what appears for hover when obs5 is clicked
      <HoverWindow title="Support Device">
        <ObsDetails image1={supportDeviceImage[0]} image2={supportDeviceImage[1]}/>
      </HoverWindow>
    );

    return (
      <div>
      <div className="Observations" id="ob">
        <div className="title"><div className="text">Significant Observations</div></div>
        <div className="obList">
          <ul>
            {
              this.state.observations.map((currElement, index) => {
                return <li id={currElement} onMouseEnter={() => this.handleClick(currElement)} onClick={() => this.handleClick(currElement)}>{currElement} {this.props.percentages[index]}</li>
              })
            }
          </ul>
        </div>
      </div>
      <div>
        {
          (() => {
            switch(this.state.clicked){
              case "Cardiomegaly":
                return obs1hover;
              case "Edema":
                return obs2hover;
              case "Atelectasis":
                return obs3hover;
              case "Pleural Effusion":
                return obs4hover;
              case "Support Device":
                return obs5hover;
              default:
                return <HoverWindow/>;
            }
          })()
        }
      </div>
      </div>
    );
  }
}

export default Observations;
