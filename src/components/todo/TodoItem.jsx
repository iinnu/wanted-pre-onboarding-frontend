import apiInstance from 'api';

const TodoItem = ({ todo, onTodoDelete, onTodoUpdate }) => {
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

  return (
    <li>
      <label>
        <input type='checkbox' />
        <span>{todo.todo}</span>
      </label>
      <button data-testid='modify-button'>수정</button>
      <button data-testid='delete-button' onClick={handleTodoDelete}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
