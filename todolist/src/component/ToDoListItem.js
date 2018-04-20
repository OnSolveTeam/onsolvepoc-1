import React, { Component } from 'react';

export default class ToDoListItem extends Component {

  onClick(e)
  {
    console.log('hi');
    this.props.todolistitempropsbuttonclick(15);
  }

  render() {
    return (
      <div>
        Hiii : {this.props.todolistitemprops}
        <button onClick={e => this.onClick(e)}>Click</button>
      </div>
    );
  }
}