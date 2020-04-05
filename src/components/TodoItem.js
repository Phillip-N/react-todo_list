import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // ternary operator
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = (e) => {
        
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.markComplete} /> {' '}
                    { this.props.todo.title }
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.popTypes = {
    todo: PropTypes.object.isRequired
}


// Style
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }


export default TodoItem