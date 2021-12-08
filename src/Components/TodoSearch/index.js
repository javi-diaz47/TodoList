import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}){
    

    //Using array destructuring to the useState Hook
    //to get a state and a setState function which change the state

    const onSerchValueChange = (ev) => {
        setSearchValue(ev.target.value);
        //Changing the state
    }

    return (
        <section className="search-todo"
                style={loading? {'opacity': 0.2}: {}}     
        >
            <input 
                className="search-bar" 
                placeholder="Buscar ToDo"
                // connecting the state with the element which may change the state
                value={searchValue}
                onChange={onSerchValueChange}
            ></input> 
            <span className="btn-circle" id="search-icon">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.57328 18.7416L6.27273 15.0415C6.4397 14.8745 6.53247 14.6481 6.53247 14.4106V13.8057C7.8423 14.83 9.4898 15.4386 11.282 15.4386C15.5455 15.4386 19 11.9835 19 7.71932C19 3.45514 15.5455 0 11.282 0C7.01855 0 3.56401 3.45514 3.56401 7.71932C3.56401 9.51183 4.17254 11.1596 5.19666 12.4697H4.59184C4.35436 12.4697 4.12801 12.5624 3.96104 12.7294L0.261595 16.4295C-0.0872002 16.7784 -0.0872002 17.3425 0.261595 17.6876L1.31169 18.7379C1.66048 19.0867 2.22449 19.0867 2.57328 18.7416ZM6.53247 7.71932C6.53247 5.09549 8.65492 2.96897 11.282 2.96897C13.9054 2.96897 16.0315 5.09178 16.0315 7.71932C16.0315 10.3431 13.9091 12.4697 11.282 12.4697C8.65863 12.4697 6.53247 10.3469 6.53247 7.71932Z" fill="white"/>
                </svg>
            </span>
        </section>
   );

}

export { TodoSearch };