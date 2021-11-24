import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import { TodoIcon } from "../TodoIcon";
import './CreateTodoButton.css';

function CreateTodoButton(){

    const {
        setCreating
        } = useContext(TodoContext);

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