import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
//import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import './App.css';

class App extends Component{

  state = {

      todos:[]
  };

  componentDidMount(){
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}));
  }

  //markcomplete
  markComplete = (id) =>{
    this.setState({
      todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  //Delete todo
  delTodo = (id) =>{

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));

  };

  AddTodo = (title) =>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
    .then(res => this.setState({todos: [...this.state.todos, res.data]}));
  };

  render(){
    //console.log(this.state.todos);
    
    return(
      <Router>  
      <div className = "App">
        <Header/>
        <Route
          exact 
          path="/"
          render={props =>(
            <React.Fragment>
              <div className="container">
                <AddTodo AddTodo = {this.AddTodo}/>
                <Todos
                  todos={this.state.todos}
                  markComplete = {this.markComplete}
                  delTodo = {this.delTodo}
                />
              </div>
            </React.Fragment>
          )}
        />
        <Route
          path="/about"
          component={About}
        />
      </div>
      </Router> 
    );
  }
}

export default App;
