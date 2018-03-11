import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div>
        <li> {this.props.todo} </li>
      </div>
    )
  }
}

export default Todo; 