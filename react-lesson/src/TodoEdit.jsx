import React from 'react'

const TodoEdit = ({ todo, isShow, handleTodoEditVisible, toggleVisible, updateTodo, updateTodoNameRef }) => {
    const handleTodoUpdate = () => {
        const updateTodoName = updateTodoNameRef.current.value;
        updateTodo(todo.id, updateTodoName);

        updateTodoNameRef.current.value = null;

        toggleVisible(todo.id);
    }

    return (
        <>
            <label className={isShow.visible ? 'show' : 'hidden'}>
                <input type='text' ref={updateTodoNameRef}/>
                <button onClick={handleTodoUpdate}>更新</button>
                <button onClick={handleTodoEditVisible}>戻る</button>
            </label>
            <label className={isShow.visible ? 'hidden' : 'show'}>
                <button onClick={handleTodoEditVisible}>編集</button>
            </label>
        </>
    )
}

export default TodoEdit