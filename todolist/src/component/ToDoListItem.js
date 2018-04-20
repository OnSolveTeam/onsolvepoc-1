import React, { Component } from 'react';

export default class ToDoListItem extends Component {
  render() {
    return (
      <div>
        Hiii : {this.props.todolistitemprops}
      </div>
    );
  }
}