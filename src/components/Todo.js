import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../store';

function Todo({ text, id, onDeleteClick }) {

    return (
        <li>
            <Link to={`/${id}`}>
                {text}
            </Link>
            <button onClick={onDeleteClick}>Delete</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteClick: (id) => dispatch(remove(ownProps.id))
    };
}

export default connect(null, mapDispatchToProps)(Todo);
