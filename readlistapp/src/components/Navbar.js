import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookList';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>Navbar Reading List</h1>
            <p>You have currently {books.length} to read.</p>
        </div>
    );
}
 
export default Navbar;