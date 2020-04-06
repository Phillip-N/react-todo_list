import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-primary" style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    borderRadius: '8px 8px 0px 0px',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginTop: '20px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;