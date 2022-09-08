import { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';


function App() {
  const [todos, setTodos] = useState([
  ]);

  const todoNameRef = useRef();

  // タスクを追加する
  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if(name === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoNameRef.current.value = null;
  };

  // タクスの完了状態の変更
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  // タスクの削除
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タクスを追加</button>
      <button onClick={handleClear}>完了したタクスを削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
