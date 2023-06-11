import TodoInput from 'components/todo/TodoInput';
import TodoList from 'components/todo/TodoList';

const TodoPage = () => {
  return (
    <>
      <h1>My Todo</h1>
      <TodoInput />
      <TodoList />
    </>
  );
};

export default TodoPage;
