/*
Making a todo using react!
want to model this site: http://todolistme.net/
terms:
  component
  stateless functional component
  lifecycle methods
  state
  props
  local storaage
  json
    stringify


*/
import React from 'react';
import Header from './Components/Header';
import SubHeading from './Components/SubHeading';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
// import FutureTodos from './Components/FutureTodos';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    //You can get rid of bindings below if you use arrow syntax
    //This is due to arrows functions not having a 'this' binding,
    //  instead they use whatever 'this' is in the scope
    // this.addNewTodo = this.addNewTodo.bind(this);
    this.todoInList = this.todoInList.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('todos');
      const todos = JSON.parse(json);

      if (todos) this.setState(() => ({ todos }));
    } catch (e) {
      console.log(`data corrupted, see: ${e}`);
    }
  }

  //Update local storage only if todos was actually changed
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const data = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', data);
    }
  }

  todoInList(todo) {
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].value === todo.value) {
        return true;
      }
    }
    return false;
  }

  addNewTodo = e => {
    const newTodo = { value: e.target.value };
    if (e.target.value === '') {
    }

    if (
      e.key === 'Enter' &&
      e.target.value !== '' &&
      !this.todoInList(newTodo)
    ) {
      const newTodos = this.state.todos.concat(newTodo);
      this.setState(() => ({ todos: newTodos }));
      e.target.value = '';
    }
  };

  deleteTodo(value) {
    const newTodos = this.state.todos;
    this.setState(prevState => ({
      todos: newTodos.filter(todo => {
        return value !== todo.value;
      }),
    }));
  }

  render() {
    return (
      <>
        <div className="content">
          <Header />
          <SubHeading />
          <TodoList
            todos={this.state.todos}
            handleDeleteClick={this.deleteTodo}
          />
          <AddTodo input={this.addNewTodo} />
        </div>
        <div className="message">
          {this.state.todos.length === 0 && <p>Add items to get started!</p>}
        </div>
      </>
    );
  }
}

export default TodoApp;
