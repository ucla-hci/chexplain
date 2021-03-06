import React, { Component } from "react";
import HoverWindow from "../HoverWindow";
import ObsDetails from "./ObsDetails";
import { IoIosArrowRoundForward, IoMdArrowDropright } from "react-icons/io";
import { IconContext } from "react-icons";

const cardiomegalyImage = [
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnormal-chest-x-ray.jpg?alt=media&token=a461a18d-e864-47fc-8cb6-46d4ab4e171c",
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fcardiomegaly.jpeg?alt=media&token=bc6e62ce-5fb8-4e8c-9ccb-4c36406c017a"
];
const edemaImage = [
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnormal-chest-x-ray.jpg?alt=media&token=a461a18d-e864-47fc-8cb6-46d4ab4e171c",
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2FEdema.png?alt=media&token=0b5545a1-f8fc-4aad-9aa6-efca0e3e06ad"
];
const atelectasisImage = [
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnormal-chest-x-ray.jpg?alt=media&token=a461a18d-e864-47fc-8cb6-46d4ab4e171c",
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fround-atelectasis.jpg?alt=media&token=9e9328a1-9045-4e42-8224-85a925e7edc7"
];
const pleuralEffusionImage = [
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnormal-chest-x-ray.jpg?alt=media&token=a461a18d-e864-47fc-8cb6-46d4ab4e171c",
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fpleural%20effusion.jpg?alt=media&token=292eaa7b-9dd7-49b9-8424-084f1b1463bb"
];
const supportDeviceImage = [
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnormal-chest-x-ray.jpg?alt=media&token=a461a18d-e864-47fc-8cb6-46d4ab4e171c",
  "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2FEdema.png?alt=media&token=0b5545a1-f8fc-4aad-9aa6-efca0e3e06ad"
];

// TODO: ADD MORE CONFIDENCE COMPARISONS IF YOU NEED IT FOR OTHER OBSERVATIONS, FORMAT [0% CONFIDENCE IMG, 100% CONFIDENCE IMG]

class Observations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      observations: this.props.observations,
      clicked: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(observation, index) {
    await this.setState({
      clicked: observation
    });
    //highlight clicked observation
    this.state.observations.map((currElement, count) => {
      //clears previously set colors
      document.getElementById(currElement).style.color = "#B0B0B0";
      document.getElementById(currElement).style.fontWeight = "lighter";
      document.getElementById(
        "triangle" + currElement.replace(/ /g, "")
      ).style.display = "none";
    });
    document.getElementById(observation).style.color = "#FFFFFF"; //sets color of clicked observation to blue
    document.getElementById(observation).style.fontWeight = "600";
    if (this.props.imageIndex === 0) {
      if (observation !== "Support Device")
        document.getElementById(
          "triangle" + observation.replace(/ /g, "")
        ).style.display = "inline";
    } else {
      if (observation !== "Support Device")
        document.getElementById(
          "triangle" + observation.replace(/ /g, "")
        ).style.display = "inline";
    }

    this.props.callbackFromParent(this.state.clicked);
    this.props.callbackClickedComponent("observations");
  }

  render() {
    let captionTemplate1 = "Unlikely ";
    let captionTemplate2 = "Definitely ";
    let titleTemplate = " (Unlikely vs. Definitely)";
    let cardioHover = ( //what appears for hover when obs1 is clicked
      <HoverWindow title={"Cardiomegaly" + titleTemplate}>
        <ObsDetails
          image1={cardiomegalyImage[0]}
          image2={cardiomegalyImage[1]}
          caption1={captionTemplate1 + "Cardiomegaly"}
          caption2={captionTemplate2 + "Cardiomegaly"}
          likelyhood={1}
        />
      </HoverWindow>
    );
    let edemaHover = ( //what appears for hover when obs2 is clicked
      <HoverWindow title={"Edema" + titleTemplate}>
        <ObsDetails
          image1={edemaImage[0]}
          image2={edemaImage[1]}
          caption1={captionTemplate1 + "Edema"}
          caption2={captionTemplate2 + "Edema"}
          likelyhood={1}
        />
      </HoverWindow>
    );
    let atelectHover = ( //what appears for hover when obs3 is clicked
      <HoverWindow title={"Atelectasis" + titleTemplate}>
        <ObsDetails
          image1={atelectasisImage[0]}
          image2={atelectasisImage[1]}
          caption1={captionTemplate1 + "Atelectasis"}
          caption2={captionTemplate2 + "Atelectasis"}
          likelyhood={1}
        />
      </HoverWindow>
    );
    let pleuralHover = ( //what appears for hover when obs4 is clicked
      <HoverWindow title={"Pleural Effusion" + titleTemplate}>
        <ObsDetails
          image1={pleuralEffusionImage[0]}
          image2={pleuralEffusionImage[1]}
          caption1={captionTemplate1 + "Pleural Effusion"}
          caption2={captionTemplate2 + "Pleural Effusion"}
          likelyhood={2}
        />
      </HoverWindow>
    );
    let supportHover = ( //what appears for hover when obs5 is clicked
      <HoverWindow title={"Support Device" + titleTemplate}>
        <ObsDetails
          image1={supportDeviceImage[0]}
          image2={supportDeviceImage[1]}
          caption1={captionTemplate1 + "Support Device"}
          caption2={captionTemplate2 + "Support Device"}
          likelyhood={3}
        />
      </HoverWindow>
    );
    // TODO: ADD MORE ____Hover FOR OTHER OBSERVATIONS IF YOUR OBSERVATION IS NOT ABOVE, CAN USE SAME FORMAT

    return (
      <div>
        <div className="Observations" id="ob">
          <div className="title">
            <IconContext.Provider value={{ size: "1.8vw" }}>
              <div className="text">
                Significant
                Observations&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                <IoIosArrowRoundForward />
              </div>
            </IconContext.Provider>
          </div>
          <div className="obList">
            <ul>
              {this.state.observations.map((currElement, index) => {
                return (
                  <li
                    id={currElement}
                    onClick={() => this.handleClick(currElement, index)}
                    onMouseEnter={
                      this.props.statMode
                        ? () => this.handleClick(currElement)
                        : false
                    }
                  >
                    {currElement} {this.props.percentages[index]}{" "}
                    <IconContext.Provider value={{ size: "1.8vw" }}>
                      <IoMdArrowDropright
                        id={"triangle" + currElement.replace(/ /g, "")}
                      />
                    </IconContext.Provider>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          {this.props.clickedComponent === "observations" &&
            !this.props.statMode &&
            (() => {
              switch (this.state.clicked) {
                case "Cardiomegaly":
                  return cardioHover;
                case "Edema":
                  return edemaHover;
                case "Atelectasis":
                  return atelectHover;
                case "Pleural Effusion":
                  return pleuralHover;
                case "Support Device":
                  return supportHover;
                // TODO: ADD YOUR OBSERVATION IF IT IS NOT INCLUDED ABOVE
                default:
                  return null;
              }
            })()}
        </div>
      </div>
    );
  }
}

export default Observations;
