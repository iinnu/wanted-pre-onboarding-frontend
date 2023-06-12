const TodoDefault = ({ todo, onClickUpdate, onClickDelete }) => {
  return (
    <>
      <span style={{ marginRight: '10px' }}>{todo}</span>
      <button data-testid='modify-button' onClick={onClickUpdate}>
        수정
      </button>
      <button data-testid='delete-button' onClick={onClickDelete}>
        삭제
      </button>
    </>
  );
};

export default TodoDefault;
