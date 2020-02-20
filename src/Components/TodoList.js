import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, handleDeleteClick }) => {
  const listItems = todos.map(todo => (
    <Todo
      key={todo.value}
      value={todo.value}
      handleDeleteClick={handleDeleteClick}
    />
  ));
  return (
    <div className="todo-list">
      <ul>{listItems}</ul>
    </div>
  );
};

export default TodoList;
