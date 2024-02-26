import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos(){
  const array = [];
  for (let index=0; index<2500; index++){
    array.push({id:index+1,text:'할 일' +(index+1),checked:false});
  }
  return array;
}

const App = () => {
  const [todos,setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501); // id 관리용
  const onInsert = useCallback(
    (text) => {
    const nextTodo = {id:nextId.current,text:text,checked:false};
    setTodos(todos.concat(nextTodo));
    nextId.current = nextId.current + 1; // id 4 -> 5
    },[]);

    // TodoListItem remove button click -> id
    const onRemove = useCallback(
      (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
      },[]
    );

    const onToggle = useCallback(
      (id) => {
      setTodos(todos.map(
        todo => todo.id == id ? {...todo,checked:!todo.checked} : todo)
        );
    },[]
    );

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
  );
};

export default App;