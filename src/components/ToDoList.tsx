import React from 'react';
import {IToDo} from './interfaces';

type ToDoListProps = {
    todos: IToDo[]
    onToggle: (id: number) => void
    onRemove: (id: number) => void
}



export const ToDoList: React.FC<ToDoListProps> = ({ todos, onToggle, onRemove }) => {
    
    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.stopPropagation();
        onRemove(id);
    }

    return (
        <ul>
            {todos.length === 0 ?
                <p className='temple_text'>Никаких задач нет</p> :
                todos.map(todo => {
                return (
                    <li
                        onClick={onToggle.bind(null, todo.id)}
                        key={todo.id}
                        className={todo.completed
                        ? 'todo completed'
                            : 'todo'}>
                        <label htmlFor="">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i
                                className='material-icons red-text'
                                onClick={event => removeHandler(event, todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}