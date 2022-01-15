import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        Tja!!
        <canvas id="thecanvas">
        </canvas>
      </div>
    );
  }

  componentDidMount() {
    var c = document.getElementById("thecanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Hello World", 10, 50);
  }
}

export default App;
