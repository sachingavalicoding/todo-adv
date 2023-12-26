import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    delatedTodo: (id) => { },
    toggleTodo: (id) => { }
});


export const Todoprovider = TodoContext.Provider;


export function useTodo() {
    return useContext(TodoContext);
}
