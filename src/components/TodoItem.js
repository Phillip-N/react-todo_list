import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            paddingTop: '12px',
            fontSize: '18px',
            fontFamily: 'Helvetica, sans-serif',
            borderRadius: '2px',
            // ternary operator
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            color: this.props.todo.completed ? 'red' : 'black'
        }
    }

    render() {
        // destructuring, to allow reference without this.props.todo
        const { id, title } = this.props.todo;
        return (
            <div className="bg-light border border-primary border-top-0 border-left-0 border-right-0" style={this.getStyle()}>
                <p>
                    <input className="ml-2" type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)} /> {' '}
                    { title }
                    <button className="btn btn-outline-danger" style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    padding: '0px 7px',
    marginRight: '5px',
    float: 'right',
}

// Style
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }


export default TodoItem
