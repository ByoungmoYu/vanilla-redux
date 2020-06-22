import { createStore } from 'redux';
import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';

// const ADD = "ADD";
// const DELETE = "DELETE";


// version 1
// const addTodo = (text) => {
//     return {
//         type: ADD,
//         text
//     }
// }
// const deleteTodo = (id) => {
//     return {
//         type: DELETE,
//         id
//     }
// }

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         // case ADD:
//         case addTodo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         // return [{ text: action.text, id: Date.now() }, ...state];
//         // case DELETE:
//         case deleteTodo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//             // return state.filter(toDo => toDo.id !== action.id);
//         default:
//             return state;
//     }
// }

// version 2
// const addTodo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// const reducer = createReducer([], {
//     [addTodo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteTodo]: (state, action) => state.filter(todo => todo.id !== action.payload)
// });

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter(todo => todo.id !== action.payload)
    }
});

const store = configureStore({ reducer: toDos.reducer });
// const store = configureStore({ reducer });
// const store = createStore(reducer);
// store.subscribe(console.log(store.getState()));

// export const actionCreator = {
//     addTodo,
//     deleteTodo
// }

export const { add, remove } = toDos.actions;

export default store;