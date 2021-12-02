import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../Hooks/useTodos";
import { TodoIcon } from "../TodoIcon";
import './CreateTodoButton.css';

function CreateTodoButton({setCreating}){

    const onClickBtn = () => {
        setCreating(true);
    }

    return (

        <>

            <TodoIcon
                type="create"
                className="btn-create-todo"
                onClick={onClickBtn}
            />

        </>

    );

}

export { CreateTodoButton };