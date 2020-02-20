import React from 'react';

const AddTodo = ({ input }) => {
  return (
    <input
      type="text"
      name="newTodo"
      className="add-todo"
      placeholder="Type and hit enter"
      onKeyDown={input}
      autoFocus
    />
  );
};

export default AddTodo;
