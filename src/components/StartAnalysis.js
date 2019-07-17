import React, {Component} from 'react';
import Dialog from './Dialog';
import Loading from './Loading';
import Results from './ButtonList2';

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
  }

  render(){
    let loading = (
      <Loading callbackFromParent={this.myCallBack}/>
    );
    let results = (
      <Results currentValue={this.props.currentValue}/>
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
        {
          this.state.isAnalyzed && results
        }
      </div>
    );
  }
}

export default StartAnalysis;
