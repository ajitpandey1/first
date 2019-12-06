import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      array: [1, 2, 3, 8, '*', 4, 7, 6, 5],
    }
  }

  rotateArray = () => {
    let { array } = this.state;
    let first = array[0];
    array[0] = array[3];
    array[3] = array[6];
    array[6] = array[7];
    array[7] = array[8];
    array[8] = array[5];
    array[5] = array[2];
    array[2] = array[1];
    array[1] = first;
    this.setState({ array });
  }
  render() {
    const { array } = this.state;
    return (
      <div className="App">
        {
          array.map((data) => {
            return <div className={data === "*" ? 'active' : ''} onClick={data === "*" ? this.rotateArray : null}>{data}</div>
          })
        }
      </div>
    );
  }
}


