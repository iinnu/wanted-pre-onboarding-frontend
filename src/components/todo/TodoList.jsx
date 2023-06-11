import TodoItem from './TodoItem';

const TodoList = ({ todos, onTodoDelete, onTodoUpdate }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onTodoDelete={onTodoDelete}
          onTodoUpdate={onTodoUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
