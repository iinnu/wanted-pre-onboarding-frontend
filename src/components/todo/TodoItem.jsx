import { useState } from 'react';
import apiInstance from 'api';
import * as S from 'components/common';

const TodoItem = ({ todo, onTodoDelete, onTodoUpdate }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo.todo);
  const [checked, setChecked] = useState(todo.isCompleted);

  const handleTodoDelete = async () => {
    try {
      const todoDelete = await apiInstance.delete(`/todos/${todo.id}`);

      if (todoDelete.status === 204) {
        onTodoDelete(todo.id);
      }
    } catch {
      alert('투두 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleTodoUpdate = async () => {
    try {
      const todoUpdate = await apiInstance.put(`/todos/${todo.id}`, {
        todo: updatedTodo,
        isCompleted: checked,
      });

      if (todoUpdate.status === 200) {
        onTodoUpdate(todoUpdate.data);
        setIsUpdate(false);
        setUpdatedTodo('');
      }
    } catch {
      alert('투두 수정에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.Li>
      <label>
        <input
          type='checkbox'
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </label>
      {!isUpdate && (
        <>
          <span style={{ marginRight: '10px' }}>{todo.todo}</span>
          <button data-testid='modify-button' onClick={() => setIsUpdate(true)}>
            수정
          </button>
          <button data-testid='delete-button' onClick={handleTodoDelete}>
            삭제
          </button>
        </>
      )}
      {isUpdate && (
        <>
          <input
            data-testid='modify-input'
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
          <button data-testid='submit-button' onClick={handleTodoUpdate}>
            제출
          </button>
          <button
            data-testid='cancel-button'
            onClick={() => setIsUpdate(false)}
          >
            취소
          </button>
        </>
      )}
    </S.Li>
  );
};

export default TodoItem;
