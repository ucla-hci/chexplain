import React, { Component } from "react";
import Popup from "reactjs-popup";

const pleuralCroppedList = [
  [
    //abnormal
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2FEffusion1ACrop.png?alt=media&token=b8b16d86-e609-4709-b48b-13c990648473",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FEffusionA1.png?alt=media&token=37b9c8b6-c4ef-47d6-9c26-6082c2fdc550",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FEffusionA2.png?alt=media&token=7fcadd2e-6aa7-40de-a354-5b419ada97f7",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FEffusionA3.png?alt=media&token=45a6477e-f12b-443f-8008-3175e8230889"
  ], //normal
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fright_pleural100%25.png?alt=media&token=ed28e3df-e8ba-4e31-8109-945811e7e102",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FEffusionN1.png?alt=media&token=37854c92-e1d4-4b25-8804-775eca7a42c5",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FEffusionN2.png?alt=media&token=09b059c5-0950-4cb8-a235-46d4ba09755e",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FEffusionN3.png?alt=media&token=df9d71b4-7a14-4eac-aa9f-b42819ba73c7"
  ]
];

const edemaCroppedList = [
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fedemasmall.jpg?alt=media&token=88848484-faef-4e93-be5f-25ae0bb725df",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYEdema1.png?alt=media&token=6995ef11-3107-4127-bac2-86d97f1de4a6",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYEdema2.png?alt=media&token=67bb184c-801f-46a5-afbb-1aa841cd560a",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYEdema3.png?alt=media&token=843516d3-c135-471c-aa39-79cd5b6ceb23"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnoedema.jpg?alt=media&token=78b6338b-d890-45ee-ac34-ad701e8513a1",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FNEdema1.png?alt=media&token=b0a25cc4-7aa1-434e-ae3f-efc8eb375783",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FNEdema2.png?alt=media&token=7365fdd1-a593-49b7-a8c8-ff011f127880",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FNEdema3.png?alt=media&token=83bf9175-de6f-4c96-8292-956cf25134c5"
  ]
];

const cardioCroppedList = [
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fcardiosmall.jpg?alt=media&token=81e9b209-b02f-469f-8783-2614d1352155",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYCardio.png?alt=media&token=1cfa164c-1b31-4def-9d82-9ffb2d05573c",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYCardio2.png?alt=media&token=ae7282e8-2d92-4a19-8de0-57e0e74102e4",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FYCardio3.png?alt=media&token=ca7531a0-8b06-47cb-add0-8a162a8af986"
    //insert link to image
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnocardio.jpg?alt=media&token=2e0a8a5a-dd09-4116-81e1-67752f8d123c",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FNCardio.png?alt=media&token=5734569f-aee3-4d25-9d1d-5c1e1802759b",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FNCardio2.png?alt=media&token=1ab7c0ca-f94b-45b0-a20d-e198ae1913f8",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2FNCardio3.png?alt=media&token=a3790ceb-52d0-4f8b-9aff-cacb4497c012"
  ]
];

const atelectCroppedList = [
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fatelectsmall.jpg?alt=media&token=c0c47ef3-66b3-424f-8bc5-542ff94d3598",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2Fabnormal.png?alt=media&token=e5e7a067-2fb2-4dcf-b8ac-292073f7f2b9",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2Fabnormal2.png?alt=media&token=6520916f-af3f-4067-9e83-b30ae1ee8a22",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2Fabnormal3.png?alt=media&token=2f1ad0f8-e769-462e-96fe-58d94f77fb67"
  ],
  [
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCase%2011%2Fnoatelect.jpg?alt=media&token=3cf8689e-644c-47a4-880a-5cc5eef17eed",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2Fnormal1.png?alt=media&token=94e38426-25fa-4cc2-853d-c5350bfb9b6d",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2Fnormal2.png?alt=media&token=c8f1f805-01b2-4ca9-b086-7206f8f074a9",
    "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FPriorImages%2FCompImages%2Fnormal3.png?alt=media&token=98a04fcb-c71f-43b1-8e20-148643cbf590"
  ]
];

const Card = ({ title }) => (
  <div className="card">
    <div className="header">{title}</div>
    <div className="content">
      When you toggle STAT on, the system will show you significant results
      tailored to your time constraint.
    </div>
  </div>
);

class AnnoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index1: 0,
      index2: 0
    };
  }

  render() {
    let tempList = [];
    if (this.props.label === "Cardiomegaly") tempList = cardioCroppedList;
    else if (this.props.label === "Edema") tempList = edemaCroppedList;
    else if (this.props.label === "Pleural Effusion")
      tempList = pleuralCroppedList;
    else if (this.props.label === "Atelectasis") tempList = atelectCroppedList;
    const { index1, index2 } = this.state;
    return (
      <div className="annoDetails">
        <ul>
          <li>
            <div className="imageCaption">
              <img src={tempList[0][index1]} />
              {this.props.caption1}
              <div className="moreImageList">
                <ul>
                  <li>
                    <img
                      src={tempList[0][0]}
                      onClick={() =>
                        this.setState({
                          index1: 0
                        })
                      }
                    />
                  </li>
                  <li>
                    <img
                      src={tempList[0][1]}
                      onClick={() =>
                        this.setState({
                          index1: 1
                        })
                      }
                    />
                  </li>
                  <li>
                    <img
                      src={tempList[0][2]}
                      onClick={() =>
                        this.setState({
                          index1: 2
                        })
                      }
                    />
                  </li>
                  <li>
                    <img
                      src={tempList[0][3]}
                      onClick={() =>
                        this.setState({
                          index1: 3
                        })
                      }
                    />
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="imageCaption">
              <img src={tempList[1][index2]} />
              {this.props.caption2}
              <div className="moreImageList">
                <ul>
                  <li>
                    <img
                      src={tempList[1][0]}
                      onClick={() =>
                        this.setState({
                          index2: 0
                        })
                      }
                    />
                  </li>
                  <li>
                    <img
                      src={tempList[1][1]}
                      onClick={() =>
                        this.setState({
                          index2: 1
                        })
                      }
                    />
                  </li>
                  <li>
                    <img
                      src={tempList[1][2]}
                      onClick={() =>
                        this.setState({
                          index2: 2
                        })
                      }
                    />
                  </li>
                  <li>
                    <img
                      src={tempList[1][3]}
                      onClick={() =>
                        this.setState({
                          index2: 3
                        })
                      }
                    />
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default AnnoDetails;
