import React from "react";
import './App.css';
import TodoList from "./TodoList";
import Todo from "./Todo";

const todos = [
  "Get out of bed, Wed Sep 13 2017",
  "Brush teeth, Thu Sep 14 2017",
  "Eat breakfast, Fri Sep 15 2017",
];

class App extends React.Component {
  render() {
    const test = "Hello";
    return (
      <div>
        <TodoList />
        <h2>
          {test}, {this.props.name}! This is what you need to do:
        </h2>
        <ul>
          {todos.map(item => {
            return <Todo todo={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
