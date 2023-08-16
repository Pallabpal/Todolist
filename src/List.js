import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {

  render() {
    const {todos, getInd} =this.props;
    // console.log(todos)
    return (
      <div className="list">
        {todos.map((todo, i) => (
          <Todo key={i} todo={todo} Id={i} getInd={getInd} />
        ))}
      </div>
    );
  }
}
