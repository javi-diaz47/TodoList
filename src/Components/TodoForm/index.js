import React, { useContext } from 'react';
import { useState } from 'react';
import './CreateTodoModal.css';

function TodoForm(props){

    const {
        action, 
        onClose, 
        submitInputValue,
        titlePlaceholder="Ingles",
        textPlaceholder="Practicar 2 horas"
    } = props;

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();
        if(text !== ''){
            action(title, text);
            setTitle('');
            setText('');
            onClose();
        }
    }

    const titleOnChange = (ev) => {
        setTitle(ev.target.value);
    }

    const textOnChange = (ev) => {
        setText(ev.target.value);
    }

    return (

        <form  onSubmit={onSubmit} className="wrapper">
            
            <div className="set-title">
                <label name='title'>Titulo</label>
                <input 
                    onChange={titleOnChange}
                    value={title} 
                    name='title' 
                    placeholder={titlePlaceholder}
                >
                </input>
            </div>

            <div className="set-text">
                <label name='text'>Todo</label>
                <textarea 
                    onChange={textOnChange} 
                    value={text}
                    name='text' 
                    placeholder={textPlaceholder} 
                    required
                ></textarea>
            </div>

            <div className='form-buttons'>
                <button 
                    onClick={onClose} 
                    className='cancel-creation'
                >
                    Cancelar
                </button>
                <input  
                    type='submit' 
                    value={submitInputValue}
                >
                </input>
            </div>

        </form>


    );

}

export { TodoForm };