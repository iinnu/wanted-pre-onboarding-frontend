import { useState } from 'react';
import apiInstance from 'api';

const TodoInput = ({ onTodoCreate }) => {
  const [todo, setTodo] = useState('');

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const todoItem = await apiInstance.post('/todos', { todo });

      if (todoItem.status === 201) {
        onTodoCreate(todoItem.data);
        setTodo('');
      }
    } catch {
      alert('투두 추가에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-testid='new-todo-input'
          type='text'
          value={todo}
          onChange={handleTodoChange}
        />
        <button data-testid='new-todo-add-button' type='submit'>
          추가
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
