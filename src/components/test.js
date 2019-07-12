import React, {Component} from 'react';
import Dialog from './Dialog';
import QuestionInput from './QuestionInput'

class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render(){
    return(
      <div className="test">
        <button onClick={(e)=>(
          this.setState({
            isOpen: true
          })
        )}>Open Dialog</button>
        <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
          <QuestionInput/>
        </Dialog>
      </div>

    );
  }

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     showMe: true
  //   }
  // }
  // operation(){
  //   this.setState({
  //     showMe: !this.state.showMe
  //   });
  // }
  //
  // render(){
  //   return (
  //     <div className="test">
  //       <h1>hide element</h1>
  //       {
  //         this.state.showMe?
  //         <div>Please hide me.</div>
  //         :null
  //       }
  //
  //       <button onClick={() => this.operation()}>Click me</button>
  //     </div>
  //   );
  // }
}

export default Test;
