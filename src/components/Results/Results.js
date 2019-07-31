import React, {Component} from 'react';
import ResultsColumns from './ButtonList2';
import Annotations from './ToggleAnnotation';
import PriorImages from './PriorImages';

class Results extends Component {

  render(){
    return (
      <div>
        <ResultsColumns currentValue={this.props.dataFromSlider}/>
        <PriorImages/>
        <Annotations display={this.props.dataFromQuestion}/>
      </div>
    );
  }
}

export default Results;
