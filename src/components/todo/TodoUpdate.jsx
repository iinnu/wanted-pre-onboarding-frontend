import { useState } from 'react';

const TodoUpdate = ({ todo, onClickSubmit, onClickCancel }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleTodoChange = (e) => setUpdatedTodo(e.target.value);

  return (
    <>
      <input data-testid="modify-input" value={updatedTodo} onChange={handleTodoChange} />
      <button data-testid="submit-button" onClick={() => onClickSubmit(updatedTodo)}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={onClickCancel}>
        취소
      </button>
    </>
  );
};

export default TodoUpdate;
