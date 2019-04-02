import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "hi",
        comleted: false
      },
      {
        id: 2,
        title: "hallow",
        comleted: false
      },
      {
        id: 3,
        title: "goodbye",
        comleted: false
      }
    ]
  };
  render() {
    console.log(this.state.todos);

    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
