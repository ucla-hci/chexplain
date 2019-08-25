import React, {Component} from 'react'
const patientImageList = ["https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp11_view1_frontal.jpg?alt=media&token=fe4a268d-8e4d-4c84-8392-78e54631c646",  //11
                   "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp12_view1_frontal.jpg?alt=media&token=f00197d3-ca72-439d-95e3-a897332efa58",  //12
                   "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp19_view1_frontal.jpg?alt=media&token=63cb0d16-579e-4420-bd3c-f7a633b03b4f",  //19
                   "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp63_view1_frontal.jpg?alt=media&token=71a3d9c3-e0b2-484c-9a88-a474435eb684",  //63
                   "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp67_view1_frontal.jpg?alt=media&token=ebfdf414-8ec5-479a-8c8f-d451df57d18b",  //67
                   "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp69_view1_frontal.jpg?alt=media&token=f185aba4-9de5-4326-8638-42b687404971",  //69
                   "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp85_view1_frontal.jpg?alt=media&token=ed2bbec0-fe2c-40e9-a842-322ca4176fcb",  //85
                   "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp21622_view1_frontal.jpg?alt=media&token=5bb5ccc1-65e8-42c8-a11d-d47d91277d71", //21622
                   "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp21653_view1_frontal.jpg?alt=media&token=d21ef701-5d74-4518-8233-fe38d1edc4a8", //21653
                   "https://firebasestorage.googleapis.com/v0/b/chexinterface.appspot.com/o/images%2FMainImages%2Fp21675_view1_frontal.jpg?alt=media&token=c5725523-d1c6-4504-939d-469e5df91db6"]; //21675
const patientData = [
  ["Female","19"], //case 11
  ["Female","55"], //case 12
  ["Female","50"], //case 19
  ["Female","70"], //case 63
  ["Female","56"], //case 67
  ["Male","63"], //case 69
  ["Male","89"], //case 85
  ["Female","30"], //case 21622
  ["Male","80"], //case 21653
  ["Male","33"], //case 21675
  ["Female","30"] //case 21622
];
class SelectPatient extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedImage: "00011"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(imageName, index){
    await this.setState({
      selectedImage: imageName
    });
    let newIndex = 0;
    if(index!==0){
      newIndex = 1;
    }
    this.props.callbackFromParent(patientImageList[index], patientData[index], newIndex);
  }

  render(){
    let imageClass1 = this.state.selectedImage=="00011"?"pressed":"regular";
    let imageClass2 = this.state.selectedImage=="00012"?"pressed":"regular";
    let imageClass3 = this.state.selectedImage=="00019"?"pressed":"regular";
    let imageClass4 = this.state.selectedImage=="00063"?"pressed":"regular";
    let imageClass5 = this.state.selectedImage=="00067"?"pressed":"regular";
    let imageClass6 = this.state.selectedImage=="00069"?"pressed":"regular";
    let imageClass7 = this.state.selectedImage=="00085"?"pressed":"regular";
    let imageClass8 = this.state.selectedImage=="21622"?"pressed":"regular";
    let imageClass9 = this.state.selectedImage=="21653"?"pressed":"regular";
    let imageClass10 = this.state.selectedImage=="21675"?"pressed":"regular";
    let imageClass11 = this.state.selectedImage=="21677"?"pressed":"regular";
    return (
      <div className="ImageSelect">
        <div className="PatientImages">
          <ul>
            <li><div className="imageCaption"><img className={imageClass1} src={patientImageList[0]} id="0" onClick={() => this.handleClick("00011", 0)}/>Patient 00011</div></li>
            <li><div className="imageCaption"><img className={imageClass2} src={patientImageList[1]} id="1" onClick={() => this.handleClick("00012", 1)}/>Patient 00012</div></li>
            <li><div className="imageCaption"><img className={imageClass3} src={patientImageList[2]} id="2" onClick={() => this.handleClick("00019", 2)}/>Patient 00019</div></li>
            <li><div className="imageCaption"><img className={imageClass4} src={patientImageList[3]} id="3" onClick={() => this.handleClick("00063", 3)}/>Patient 00063</div></li>
            <li><div className="imageCaption"><img className={imageClass5} src={patientImageList[4]} id="4" onClick={() => this.handleClick("00067", 4)}/>Patient 00067</div></li>
            <li><div className="imageCaption"><img className={imageClass6} src={patientImageList[5]} id="5" onClick={() => this.handleClick("00069", 5)}/>Patient 00069</div></li>
            <li><div className="imageCaption"><img className={imageClass7} src={patientImageList[6]} id="6" onClick={() => this.handleClick("00085", 6)}/>Patient 00085</div></li>
            <li><div className="imageCaption"><img className={imageClass8} src={patientImageList[7]} id="7" onClick={() => this.handleClick("21622", 7)}/>Patient 21622</div></li>
            <li><div className="imageCaption"><img className={imageClass9} src={patientImageList[8]} id="8" onClick={() => this.handleClick("21653", 8)}/>Patient 21653</div></li>
            <li><div className="imageCaption"><img className={imageClass10} src={patientImageList[9]} id="9" onClick={() => this.handleClick("21675", 9)}/>Patient 21675</div></li>
            <li><div className="imageCaption"><img className={imageClass11} src={patientImageList[9]} id="10" onClick={() => this.handleClick("21677", 10)}/>Patient 21675</div></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SelectPatient;
