import React from 'react';
import { useHistory } from 'react-router-dom';


export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <div className='container'>
            <h1 className='center'>Anton Kurdo</h1>
            <button onClick={() => {history.push('/')}} className='btn'>Обратно к делам</button>
        </div>
        
    )
};