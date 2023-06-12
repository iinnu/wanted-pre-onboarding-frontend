import { useState } from 'react';
import apiInstance from 'api';
import * as S from 'components/common';
import TodoDefault from './TodoDefault';
import TodoUpdate from './TodoUpdate';

const TodoItem = ({ todo, onTodoDelete, onTodoUpdate }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [checked, setChecked] = useState(todo.isCompleted);

  const handleIsUpdate = () => setIsUpdate(!isUpdate);

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

  const handleTodoUpdate = async (updatedTodo) => {
    try {
      const todoUpdate = await apiInstance.put(`/todos/${todo.id}`, {
        todo: updatedTodo,
        isCompleted: checked,
      });

      if (todoUpdate.status === 200) {
        onTodoUpdate(todoUpdate.data);
        handleIsUpdate();
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
        <TodoDefault
          todo={todo.todo}
          onClickUpdate={handleIsUpdate}
          onClickDelete={handleTodoDelete}
        />
      )}
      {isUpdate && (
        <TodoUpdate
          todo={todo.todo}
          onClickSubmit={handleTodoUpdate}
          onClickCancel={handleIsUpdate}
        />
      )}
    </S.Li>
  );
};

export default TodoItem;
