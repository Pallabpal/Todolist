import { Component } from "react";

export class Todo extends Component {
  constructor(){
    super();
    this.state={
      d:new Date().toLocaleString()
    }
  }
  render() {
    // console.log(this.state.d)
    const {Id, getInd} =this.props;
    
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        <button onClick={()=>getInd(Id)}>x</button>
        <p className="Date">{this.props.todo.date}</p>
      </div>
    );
  }
}
