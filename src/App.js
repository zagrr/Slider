import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SayWhoIsThere name = "John" age="21"/>
        <SayWhoIsThere name = "Mike" age="31"/>
        <SayWhoIsThere name = "Carl" age="41"/>
       
      </div>
    );
  }
}

function SayWhoIsThere(props) {
  return (
    <div>
      <p>Here is {props.name}</p>
      <p>{props.name} is {props.age} years old</p>
    </div>
  );


}


export default App;
