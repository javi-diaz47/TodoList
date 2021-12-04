# **Nov 19 - 22**

## React basics
React Hooks are functions that let us works with some react features such as state without work with classes. 

### React Hooks Rules:
* All React Hooks start with use
* A react Hook can't be inside a react Hook
* A react Hook can be inside a custom Hook


### useEffect 
Let us control the render of components based on certain conditions.
use Effect received a function as first parameter, and an array as second; This second array will be works as the conditions to execute
```js
    useEffect(() => {
        //Code
    }, [/*Condition*/])
```
This useFffect is only execute when the state of arrayOfPerson has change.
If the second parameter is `[]` then the hooks will be only excecute at the first render of the page
\
&nbsp;
### Custom Hook
Let us abstract logic into a function an implement it as a React Hook.

A custom hooks is just a function that return a Array of two positions (sometimes)
```js
function useLocaleStorage(itemName, initValue){

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initValue);

  useEffect(() => {
    try{
        
      setTimeout(() => {
        let localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem){ // if it's empty then create it with a initValue
          localStorage.setItem(itemName, JSON.stringify(initValue));
          parsedItem = initValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
        
        setItem(parsedItem);
        setLoading(false);

      }, 1000);


    }catch(err){
      setError(true);
    }

  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    error,
    loading,
  };

}

```
### React Context - Sharing State
It's use to avoid the giving of maaany props from one component to another, and as a side effect make the code more readable and sustentable.
`createContext()` give us two variable `Provider` and `Consumer` which will be use in order to share the props with other components no matter if is from a father to a great-great-grandson this without the need of passing all the props throughout the son, granson and so on.
\
&nbsp;
### Provider and Cosumer
The way `Provider` and `Consumer` share info is through an object inside the variable value in Provider.
The pair of these are use like JSX elements
so it's `<Provider></Provider>` and `<Consumer></Consumer>` with the open and close tag so we can send as props the components we want to have the all the properties they need
\
&nbsp;
#### Declaring a React Context
Context/index.js
```js
import { createContext } from 'react';
//  const {Provider, Consumer} = createContext();
const MyContext = createContext();

function MyProvider(props){

    const {
        item: people,
        saveItem: savePeople,
        error,
        loading
    } = useLocaleStorage('People', []);

    return (
        <MyContext.Provider
            value={{
                people,
                savePeople,
                error,
                loading
            }} 
        
        >
            {props.children}
        </MyContext.Provider>
    );

}

export {MyContext, MyProvider};

```
In this case the function `MyProvider` receive as a props the children of all the components that will be use props inside our function
\
&nbsp;
Components/App/index.js
```js
    import AppUI from './AppUI';
    import {MyProvider} from '../Context]';

    function App(){
        return(
            <MyProvider>

                <AppUI/>

            </MyProvider>
        );

    }

```
\
&nbsp;
Components/App/AppUI.js
```js
    import {MyContext} from '../Context';

    function AppUI(){

        const {people} = useContext(MyContext);

        return(

            <header>some stuffs</header>

            <MyContext>
                //Using some React sintax we could create an arrow function which receive the value object and return the Component that need the props
                {(value) => (
                    
                    value.people.map(person => {

                        <Wave 
                            name={person.name}
                        />

                    ));

                }}


            <MyContext>
            

            <footer>more stuffs</footer>

        );

    }

```
\
&nbsp;
Components/Wave/index.js
```js
    import {MyProvider} from '../Context]';

    function Wave({name}){
        return(
            <h2>Hello {name}</h2>
        );

    }

```

## Portals - createPortal
With `React DOM` we could create a portal which is nothing more than link our react app with another `HTML` tag.
The components inside a portal could receive the same props as the other compoents, the only difference it's where they are located.

The function `createPortal` reaceive two parameters, the first are the components we want to render. our second parameter is the HTML tag where we want to render the components.
```jsx
    import ReactDOM from 'react-dom';

    function Modal(props){

        return ReactDom.createPortal(
            props.children;
            ,
            document.getElementById('moda');

        );

    }

```

### Import images and icons inside React
```js
import {ReactComponent as MyIcon} from './icon.svg'
```

