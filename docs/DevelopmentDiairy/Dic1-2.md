# **Nov 1 - 3**

## React Render Patterns
The code written with React can be improved by just following some techniques or patterns that make the code more easy to maintain and scale


### React Principles
#### 1. Composition
In order to get a more flexible code the composition principle let us to chose where and how we want to render some information which implies that every component have to do some specific task but it don't tell us how to use the solution that is providing us with.
\
&nbsp;
>The simplest way to compose React components is to follow these rules:
>1. Divide components into stateful “containers” and stateless “presenters”.
>2. Pass functions (“callbacks”) that change the container state as props to children
>3. If two components need access to the same state, move the state into their common parent
>
>[React Composition Patterns From The Ground Up](https://medium.com/@rachelbrandsness/stateful-vs-stateless-components-in-react-js-2811b67e6883)

&nbsp;

With this principle we can go without the use of `React.Context` (at least in the todo list app) that add a layer of complexity to our app, however this feature is still relevant when there are a lot components and generations in our code.

&nbsp;

If we have
```jsx
function App(){
    return (
        <TodoList todos={todos} />
    );
}
```

```jsx
function TodoList({todos}){
    return (
        <section>
            {
                todos.map(todo => (
                <TodoItem {...todo}/>
                ))
            }
        </section>
    );

}
```

But if we delegate the task of render the list of todos to App instead of TodoList, we have:
```jsx
function App(){
    return (
        <TodoList/>

            <section>
                {
                    todos.map(todo => (
                    <TodoItem {...todo}/>
                    ))
                }
            </section>
        
        <TodoList/>

    );
}
```

```jsx
function TodoList({children}){
    return (
        {children}
    );

}
```
Now we have more flexibility with out TodoList component since we don't have a fixed content and we can change so easily what is inside of it.

In a briefly with this principle we can create components that does not need to specify what is its content but delegate this responsability to the father component

&nbsp;

#### 2. Render Props
Render props are similar to the composition principle nevertheless they are more specific about what, when and where we want to render the content

If we remembering the way consumer we get:
```jsx
<Provider value={...something}>
    <Consumer>
    {
        something => (
            <MyComponent
                {...something}
            >
        )
    }
    <Consumer>
</Provider>
```
The pattern that is implemented in the consumer is what we call `render function` which is basically insert a component into a function

Using this pattern we could do
```jsx
<RenderFunction>
    {
        info => (
            <Component {...info}>
        )
    }
</RenderFunction>
```
On the other hand, we have the `render props` which is send our component as a props to another component instead of using the children property

```jsx
<RenderProps
    renderProp={<Component>}
/>

<RenderProps
    renderProp={info => <Component {...info}>}
/>
```

e.g.

Let's imagine that we want to implement the `Render props` in order to show to the user an alert when an error ocurred or a succeeded message insetead

```jsx
<Form
    onError={
        error => (
            <FormError error={error}>
        )
    }

    onSuccess={
        newData => (
            <FormSuccess data={newData}>
        )
    }
/>
```

If we keep with the example of the wave app and apply the composition and render props principle we get...

Hooks/useWave.js <==> Context/index.js
```jsx
    function useWave(){
        
        const {
            item: people,
            saveItem: savePeople,
            error,
            loading
        } = useLocaleStorage('People', []);

        return {
                people,
                savePeople,
                error,
                loading
            }

    }

```
Components/App.js
```jsx

function App(){

    const {people, error, loading} = useWave();

    return (

        <WaveList
            people={people}
            error={error}
            loading={loading}
            onLoading={<WaveLoading/>}
            onError={<WaveError/>}
            render={person => (
                <Wave
                    name={person.name} 
                />
            )}
        />

        or
        <WaveList
            people={people}
            error={error}
            loading={loading}
            onLoading={<WaveLoading/>}
            onError={<WaveError/>}
       >
        //Render Fucntion
       {
           person => (
                <Wave
                    name={person.name} 
                />
           )
        }
 
       </WaveList>

    );

}
```

Components/WaveList.js
```jsx

function WaveList(props){

    const renderFunc = props.children || props.render;
    
    return (

        <section className="wave-list">
            //Using render props 
            {props.error && props.onError}

            {props.loading && !props.people.length && 
            props.onLoading}

            {!props.loading && props.people
                props.people.map(props.render
                (person))

                props.people.map(renderFunc)

                //And now the component can render the main content wherever it comes, either as a render props or as a render function
            }

        </section>
    );

}
```

So we don't need to use the `React Context` anymore (at least for now)




