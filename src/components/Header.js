import React, {Component} from 'react';

class Header extends Component {
      render(){
        return (
          <div>
            <div className="DiffDiagTitle"><h1>Differential Diagnosis</h1></div>
            <div className="ImpressionTitle"><h1>Impression</h1></div>
            <div className="ExamTitle"><h1>Examinations</h1></div>
          </div>
        );
    }
}
export default Header;
