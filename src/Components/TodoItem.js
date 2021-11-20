import React from 'react';
import '../style/Components/TodoItem.css';

function TodoItem(props){

    const {title, text, completed} = props;

    const onComplete = () => {
        alert(`Ya completaste ${text}`);
    }

    const onRemove = () => {
        alert(`Eliminaste el todo ${text}`)
    }

    const onEdit = () => {
        alert(`Estas editando el todo ${text}`)
    }

    return (
        <>
            <article className="todo-item" completed={`${completed}`}>
                <h2>{title}</h2>
                <button 
                    className={`btn-edit completed-${completed}`}
                    onClick={onEdit}
                    >
                    <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="8" height="8" rx="4" fill="#010101"/>
                        <rect x="12" width="8" height="8" rx="4" fill="#010101"/>
                        <rect x="24" width="8" height="8" rx="4" fill="#010101"/>
                    </svg>
                </button>
                <p>
                    {text}
                </p>
                <button className="btn-completed" 
                        completed={`${completed}`}
                        onClick={onComplete}        
                >
                    {completed ? 'Completado' : 'completar'}
                </button>
                <button 
                    className={`btn-circle`}
                    onClick={onRemove}    
                >
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7301 1.30152H11.4444L11.1087 0.717144C11.0375 0.592211 10.928 0.48712 10.7923 0.413694C10.6567 0.340267 10.5003 0.301419 10.3408 0.301519H6.25866C6.09951 0.300984 5.9434 0.339687 5.80823 0.413195C5.67306 0.486703 5.56428 0.592042 5.49437 0.717144L5.15866 1.30152H0.872942C0.72139 1.30152 0.576045 1.3542 0.468881 1.44797C0.361718 1.54173 0.301514 1.66891 0.301514 1.80152L0.301514 2.80152C0.301514 2.93413 0.361718 3.0613 0.468881 3.15507C0.576045 3.24884 0.72139 3.30152 0.872942 3.30152H15.7301C15.8816 3.30152 16.027 3.24884 16.1341 3.15507C16.2413 3.0613 16.3015 2.93413 16.3015 2.80152V1.80152C16.3015 1.66891 16.2413 1.54173 16.1341 1.44797C16.027 1.3542 15.8816 1.30152 15.7301 1.30152V1.30152ZM2.20151 14.8953C2.22877 15.2761 2.42086 15.6335 2.73868 15.8948C3.0565 16.156 3.47616 16.3015 3.91223 16.3015H12.6908C13.1269 16.3015 13.5465 16.156 13.8643 15.8948C14.1822 15.6335 14.3743 15.2761 14.4015 14.8953L15.1587 4.30152H1.44437L2.20151 14.8953Z" fill="white"/>
                    </svg>
                </button>
            </article> 
        </>

    );

}

export { TodoItem };