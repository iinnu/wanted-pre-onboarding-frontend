import useField from 'hook/useField';

const TodoInput = () => {
  const [title, handleTitleChange] = useField('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid='new-todo-input'
        type='text'
        value={title}
        onChange={handleTitleChange}
      />
      <button data-testid='new-todo-add-button' type='submit'>
        추가
      </button>
    </form>
  );
};

export default TodoInput;
