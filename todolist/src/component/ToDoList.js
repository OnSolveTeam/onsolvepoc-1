import React, { Component } from 'react';
import ToDoListItem from '../component/ToDoListItem'

export default class ToDoList extends Component {

    todolisitemreceivedata(data){
        console.log(data);
        this.props.todolistpropssenddataback(data);
    }

  render() {
    return (
      <div>
        <ToDoListItem todolistitemprops={this.props.todolistprops} 
        todolistitempropsbuttonclick={data => this.todolisitemreceivedata(data)} />
      </div>
    );
  }
}