import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  const calculateChecked = () => {
    // Added an ability to calculate completed tasks
    const completedTodos = todos.filter((todo) => todo.checked === true).length;
    return completedTodos;
  };

return (
  <div className="todo-results">
    Done:
    {' '}
    {calculateChecked()}
  </div>
  );
};
