import React from 'react';
import './TodoCounter.css';

// Embeded styles
//They're just objects
// const style = {
//     color: 'red';
//     fontWeight: 'normal',
//     fontFamily: 'open sans'
// }



function TodoCounter({total, completed}){

    return (
        <>
            <section className="todo-counter">
                {/* <h2 style={style} className="title">Has completado <b>2</b> de <b>3</b> TODOs</h2> */}
            
                <h2 className="title">Has completado <br/> <b>{completed}</b> de <b>{total}</b> TODOs</h2>


            </section>
        </>
    );

}

export { TodoCounter };
