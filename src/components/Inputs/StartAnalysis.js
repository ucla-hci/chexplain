import React, {Component} from 'react';
import Dialog from '../Dialog';
import Loading from './Loading';
import Results from '../Results/ButtonList2';

class StartAnalysis extends Component {
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
    let startAnalysis = this.state.isPressed?"pressedAnL":"StartAnalysis";
    return (
      <div className="AnalyzeButton">
        <button className={startAnalysis} onClick={(e)=>(
          this.setState({
            isOpen: true,
            isPressed: true
          })
        )}>Start Analysis</button>
        {
          this.state.isOpen && loading
        }
      </div>
    );
  }
}

export default StartAnalysis;
