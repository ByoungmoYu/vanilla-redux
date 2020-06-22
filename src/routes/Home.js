import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../store';
import Todo from '../components/Todo';

function Home({ toDos, addTodo }) {
    console.log(toDos);
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(todo => (
                    <Todo {...todo} key={todo.id} />
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = (state) => {
    return { toDos: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addTodo: (text) => dispatch(actionCreator.addTodo(text))
        addTodo: (text) => dispatch(add(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);