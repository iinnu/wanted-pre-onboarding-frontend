import { useEffect, useState } from 'react';
import apiInstance from 'api';
import TodoInput from 'components/todo/TodoInput';
import TodoList from 'components/todo/TodoList';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const handleTodoCreate = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTodoUpdate = (updatedTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          todo = updatedTodo;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    (async () => {
      try {
        const todo = await apiInstance.get('/todos');

        if (todo.status === 200) {
          setTodos(todo.data);
        }
      } catch {
        alert('투두리스트 불러오기에 실패했습니다. 다시 시도해주세요.');
      }
    })();
  }, []);

  return (
    <>
      <h1>My Todo</h1>
      <TodoInput onTodoCreate={handleTodoCreate} />
      <TodoList
        todos={todos}
        onTodoDelete={handleTodoDelete}
        onTodoUpdate={handleTodoUpdate}
      />
    </>
  );
};

export default TodoPage;
