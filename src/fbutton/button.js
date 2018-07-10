import React from 'react'
import "./button.css"

export class Button extends React.Component{
clicked(){
  alert("Hello!");
}
  render(){
    return(
      <div>
        <button onClick={this.clicked}>Click Me!</button>
      </div>
    );
  }
}