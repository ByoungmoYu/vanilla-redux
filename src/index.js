import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// ----------------------------------------

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addTodo = (text) => {
//   return { type: ADD_TODO, text };
// }
// const deleteTodo = (id) => {
//   return { type: DELETE_TODO, id };
// }

// const reducer = (state = [], action) => {
//   console.log(action);
//   switch (action.type) {
//     case ADD_TODO:
//       // return [...state, { text: action.text, id: Date.now() }];
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE_TODO:
//       return state.filter(toDo => toDo.id !== action.id);
//     default:
//       return state;
//   }
// };
// const store = createStore(reducer);
// store.subscribe(() => {
//   console.log(store.getState());
// })

// const dispatchAddTodo = (text) => {
//   store.dispatch(addTodo(text));
// }
// const dispatchDeleteTodo = (e) => {
//   store.dispatch(deleteTodo(parseInt(e.target.parentNode.id)));
// }

// const paintTodo = () => {
//   const todos = store.getState();
//   ul.innerHTML = "";
//   todos.forEach(todo => {
//     const li = document.createElement('li');
//     const btn = document.createElement('button');
//     btn.innerHTML = 'Delete';
//     btn.addEventListener('click', dispatchDeleteTodo);
//     li.id = todo.id;
//     li.innerHTML = todo.text;
//     li.appendChild(btn);
//     ul.appendChild(li);
//   })
// }
// store.subscribe(paintTodo);

// const onSubmit = e => {
//   e.preventDefault();
//   const todo = input.value;
//   input.value = "";
//   dispatchAddTodo(todo);
// }

// form.addEventListener('submit', onSubmit);

/// ----------------------------------------------


// const addBtn = document.getElementById('add');
// const minusBtn = document.getElementById('minus');
// const number = document.querySelector('span');

// const ADD = "add";
// const MINUS = "minus";

// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }

// };
// const countStore = createStore(countModifier);

// const onChange = () => {
//   console.log(countStore.getState());
//   number.innerHTML = countStore.getState();
// }
// countStore.subscribe(onChange);

// const addFunc = () => {
//   countStore.dispatch({ type: ADD })
// }
// const minusFunc = () => {
//   countStore.dispatch({ type: MINUS })
// }
// addBtn.addEventListener('click', addFunc);
// minusBtn.addEventListener('click', minusFunc);
