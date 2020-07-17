import React, {useState, useRef} from 'react';

interface ToDOFormProps {
    onAdd(title: string): void
 
  }

export const ToDoForm : React.FC<ToDOFormProps> = ({ onAdd }) => { 

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {      
            onAdd(ref.current!.value);
            ref.current!.value = '';            
        }
    }

    return (
        <div className='input-field' style={{
            marginTop: '5rem'
        }}>
            <input
                ref={ref}
                onKeyPress={keyPressHandler}            
                type="text"
                id='title'
                placeholder='Введите название дела...'/>
            <label htmlFor="title" className='active'>Введите название дела</label>
        </div>
    )
}