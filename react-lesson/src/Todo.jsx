import { useState } from 'react';
import TodoEdit from './TodoEdit';

const Todo = ({ todo, toggleTodo, updateTodoNameRef, updateTodo }) => {
    const [isShows, setIsShow] = useState([
        {id: todo.id, visible: false}
    ]);

    const handleTodoEditVisible = () => {
        toggleVisible(todo.id);
    }

    const toggleVisible = (id) => {
        const editIsShows = [...isShows];
        const toggleIsShow = editIsShows.find((isShow) => isShow.id === id);
        toggleIsShow.visible = !toggleIsShow.visible;

        setIsShow(editIsShows);
    }

    const handleTodoClick = () => {
        toggleTodo(todo.id);
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick}/>
            </label>
        {todo.name}
        {isShows.map(isShow => <TodoEdit isShow={isShow} key={isShow.id} todo={todo} handleTodoEditVisible={handleTodoEditVisible} toggleVisible={toggleVisible} updateTodo={updateTodo} updateTodoNameRef={updateTodoNameRef}/>)}
        </div>
    )
}

export default Todo