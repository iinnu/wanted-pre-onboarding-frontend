import TodoItem from './TodoItem';

const TodoList = ({ todos, onTodoDelete, onTodoUpdate }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onTodoDelete={onTodoDelete}
          onTodoUpdate={onTodoUpdate}
        />
      ))}
    </>
  );
};

export default TodoList;
