import React, {Component} from 'react';
import Loading from './Loading';
import ImageUpload from './ImageUpload';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      isAnalyzed: false,
      isPressed: false,
      gender: "",
      age: ""
    }
  }

  componentWillReceiveProps(nextProps, nextState){
    if((nextProps.gender != this.state.gender)||(nextProps.age != this.state.age)){
      this.setState({
        gender: nextProps.gender,
        age: nextProps.age
      });
    }
  }

  myCallBackFromLoading = (dataFromChild) => {
    console.log(dataFromChild);
    this.setState({
      isAnalyzed: dataFromChild
    });
    this.props.callbackFromParentLoading(this.state.isAnalyzed);
  }

  myCallBackFromImage = (dataFromChild) => {
    console.log(dataFromChild);
    this.setState({
      url: dataFromChild
    });
    this.props.callbackFromParentImage(this.state.url);
  }


  render(){
    let loading = (
      <Loading callbackFromParent={this.myCallBackFromLoading}/>
    );
    return (
      <div>
      <div className="headerResult">
        <div className="PatientInfo">Patient Information: {this.state.gender}. {this.state.age}</div>
      </div>
      <div className="AnalyzeButton">
        <button className="StartAnalysis" onClick={(e)=>(
          this.setState({
            isOpen: true,
            isPressed: true
          })
        )}>Start Analysis</button>
      </div>
      <div>
          {
            this.state.isOpen && loading
          }
      </div>
      </div>
    );
  }
}

export default Header;
