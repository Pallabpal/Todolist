import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry", date:new Date().toLocaleTimeString() },
        { text: "Iron the clothes", date:new Date().toLocaleTimeString() },
        { text: "Go for a walk", date:new Date().toLocaleTimeString() }
      ]
    };
  }
 
  // create handleAdd and handleRemove functions here
  handleAdd = (value)=>{
   
  // console.log(this.state.todos);
  this.setState({
   todos: [{"text":value, "date":new Date().toLocaleTimeString()}, ...this.state.todos]
  })
    
  }

  handleRemove=(ind)=>{
    
    this.state.todos.splice(ind, 1);
    this.setState({
      todos: this.state.todos
    })
  }
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form getValue={this.handleAdd}/>
        <List todos={this.state.todos} getInd={this.handleRemove}  />
      </div>
    );
  }
}
