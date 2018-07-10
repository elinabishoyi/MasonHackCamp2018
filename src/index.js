import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import "./ftextbodies/textbodies.js";
import "./fbutton/button.js"
import "./fbutton/button.js"

import {HackClubimg} from "./Images/images.js";
import {Paragraph} from "./ftextbodies/textbodies.js";
import {Button} from "./fbutton/button.js"

class SectionOne extends React.Component{
  render(){
    return(
      <div>
        <table>

          <tr>
            <td> <HackClubimg /> </td>
            <td>  Mason Hack Camp 2018 </td>
            <td>  <HackClubimg /> </td>
          </tr>
       </table>
       <br />
       <Paragraph />
      </div>
    );
  }
}

class SectionTwo extends React.Component{
  render(){
    return(
        <div>
          <Button />
        </div>
    );
  }
}

class WholePage extends React.Component{
  render() {
    return (
      <div>

        <div>
        <SectionOne />
        </div>
        <div>
          <h1>---</h1>
        </div>
        <div>
          <SectionTwo />
        </div>
      </div>
    );
  }
}


ReactDOM.render( <WholePage />, document.getElementById('root'));