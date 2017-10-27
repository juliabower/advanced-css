import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CSS Things</h1>
        </header>
        {/* CALC */}
        <div className="App-section">
          <div className="App-section-header">Calc</div>
          <div className="App-section-body calc">I know that my header is 25px high, so I have to use calc()
            to fill the rest of the box. If i set my height to 100% I will spill over
          </div>
        </div>

        {/* EMPTY */}
        <div className="App-section">
          <div className="App-section-header">:empty - below is an empty div, if I use :empty then it will be red</div>
          <div className="App-section-body empty">
          </div>
        </div>

        {/* NOT */}
        <div className="App-section">
          <div className="App-section-header">:not</div>
          <div className="App-section-body">I want to be pink so I'll say be pink if NOT the header</div>
        </div>

        {/* COLLAPSING MARGINS */}
        <div className="App-section">
          <div className="App-section-header">Collapsing margins</div>
          <div className="App-section-body">
            <div className="App-section-item">I am collapsed</div>
            <div className="App-section-item">I am collapsed</div>
            <div className="App-section-item">I am collapsed</div>
            <div className="App-section-item float">I am not collapsed because I'm floating!</div>
            <div className="App-section-item inline">I am not collapsed because I'm an inline block!</div>
          </div>
        </div>

        {/* *-OF-TYPE */}
        <div className="App-section type">
          <div className="App-section-header">*-of-type</div>
          <div className="App-section-body">
            <li>I am the first item</li>
            <li>Second</li>
            <li>Third</li>
            <li>nth(4)</li>
            <li>Last!</li>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
