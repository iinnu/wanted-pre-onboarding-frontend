const TodoItem = ({ todo }) => {
  <li>
    <label>
      <input type='checkbox' checked={todo.isCompleted} />
      <span>{todo.todo}</span>
    </label>
  </li>;
};

export default TodoItem;
