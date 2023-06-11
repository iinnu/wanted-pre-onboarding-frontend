import apiInstance from 'api';
import { useEffect, useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const todo = await apiInstance.get('/todos');

        if (todo.status === 200) {
          console.log(todo.data);
        }
      } catch {
        alert('투두리스트 불러오기에 실패했습니다. 다시 시도해주세요.');
      }
    })();
  }, []);
};

export default TodoList;
