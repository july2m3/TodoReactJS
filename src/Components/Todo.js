import React from 'react';

function handleTodoClick(e) {
  if (e.target.className.includes('far')) {
    e.target.className = 'fas fa-circle';
    e.target.parentNode.style = 'text-decoration: line-through';
  } else {
    e.target.className = 'far fa-circle';
    e.target.parentNode.style = 'text-decoration: none';
  }
}

const Todo = ({ value, handleDeleteClick }) => {
  return (
    <li>
      <i className="far fa-circle" onClick={handleTodoClick} />
      <span>{value}</span>
      <i
        className="fas fa-skull"
        onClick={e => {
          // handleDeleteClick(e.target.parentNode.children[1]);
          handleDeleteClick(value);
        }}
      />
    </li>
  );
};

export default Todo;
