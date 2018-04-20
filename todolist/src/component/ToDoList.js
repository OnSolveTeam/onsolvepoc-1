import React, { Component } from 'react';
import ToDoListItem from '../component/ToDoListItem'

export default class ToDoList extends Component {
  render() {
    return (
      <div>
        <ToDoListItem todolistitemprops={this.props.todolistprops}  />
      </div>
    );
  }
}