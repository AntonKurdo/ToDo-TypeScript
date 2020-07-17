import React, {useState, useEffect} from 'react';
import {ToDoForm} from '../components/ToDoForm';
import {ToDoList} from '../components/ToDoList';
import { IToDo } from '../components/interfaces';

declare var confirm: (quest: string) => boolean;

export const TodosPage: React.FC = () => {
    
    const [todos,
        setTodos] = useState < IToDo[] > ([]);
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('todos') || '[]')as IToDo[];
        setTodos(data)
    }, [])
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const addHandler = (title : string) => {
        const newTodo : IToDo = {
            id: Date.now(),
            title: title,
            completed: false
        };
        setTodos(prev => [
            newTodo, ...prev
        ])
    }
    
    const toggleHandler = (id : number) => {
        setTodos(prev => prev.map(todo => {
    
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }
    
    const removeHandler = (id : number) => {
        const shouldRemove = confirm('Вы уверены, что хотите удалить эту задачу?');
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    
    }

    return (
        <div className='container'>
            <ToDoForm onAdd={addHandler}/>
            <ToDoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
        </div>
    )
}