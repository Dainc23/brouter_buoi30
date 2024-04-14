import React from 'react';
import { Link } from 'react-router-dom';

const Header1 = () => {
    return (
        <div className='header'>
            <div className='nav-left'>
                <Link to='/'>Home</Link>
                <Link to='/Contact'>Contact</Link>
                <Link to='/Product'>Product</Link>
            </div>
        </div>
    );
}

export default Header1;
