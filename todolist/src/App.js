import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './component/ToDoList';

export default class App extends Component {

  receivedDataFromChild(data)
  {
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <ToDoList todolistprops={12}
          todolistpropssenddataback={data => this.receivedDataFromChild(data)}/>
      </div>
    );
  }
}