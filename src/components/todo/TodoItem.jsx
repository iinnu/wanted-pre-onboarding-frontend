const TodoItem = ({ todo }) => {
  return (
    <li>
      <label>
        <input type='checkbox' />
        <span>{todo.todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
