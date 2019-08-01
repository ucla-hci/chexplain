import React, {Component} from 'react';
import Loading from './Loading';
import ImageUpload from './ImageUpload';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      isAnalyzed: false,
      isPressed: false
    }
  }

  myCallBack = (dataFromChild) => {
    console.log(dataFromChild);
    this.setState({
      isAnalyzed: dataFromChild
    });
    this.props.callbackFromParent(this.state.isAnalyzed);
  }

  render(){
    let loading = (
      <Loading callbackFromParent={this.myCallBack}/>
    );
    return (
      <div>
      <div className="header">
        <ImageUpload/>
        <div className="AnalyzeButton">
          <button className="StartAnalysis" onClick={(e)=>(
            this.setState({
              isOpen: true,
              isPressed: true
            })
          )}>Start Analysis</button>
        </div>
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
