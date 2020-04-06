import React from 'react'

export default function About() {
    return (
        // Ghost Element -> doesnt show in DOM but you need it for JSX
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0</p>
        </React.Fragment>
    )
}
