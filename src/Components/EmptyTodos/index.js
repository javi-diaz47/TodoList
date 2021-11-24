import React from 'react';
import emptyImage from './empty.png';
import './EmptyTodos.css';

function EmptyTodos(){

    return (
        <section className="empty-todos">
           <img src={emptyImage} alt="Ilustra el vacio de los todos"></img>
           <h3>No tienes ningún Todo 
               <br/>
               <b>¡Agrega uno!</b>
            </h3>
        
        </section>
    );

}

export { EmptyTodos };

