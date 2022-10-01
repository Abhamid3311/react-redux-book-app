import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <Link to={'/'}>Home</Link>
            <Link to={'/add'}>Add Books</Link>
            <Link to={'/view'}>View Books</Link>
            <Link to={'/about'}>About Us</Link>
        </nav>
    );
};

export default Navbar;