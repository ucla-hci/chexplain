import React, {Component} from 'react';
import ResultsColumns from './ButtonList2';
import Annotations from './ToggleAnnotation';

class Results extends Component {
  constructor(props){
    super(props);

  }

  myCallBack = (dataFromChild) => {
    console.log(dataFromChild);
    this.setState({
      isAnalyzed: dataFromChild
    });
  }

  render(){
    return (
      <div>

      </div>
    );
  }
}

export default Results;
