import React from 'react';
import './TodoCounter.css';


function TodoCounter({totalTodos: total, completedTodos: completed, loading}){

    return (
        <section 
            className="todo-counter"
            style={loading? {'opacity': 0.2} : {}}
            >
        
            <h2 className="title">Has completado <br/> <b>{completed}</b> de <b>{total}</b> TODOs</h2>

        </section>
    );

}

export { TodoCounter };
