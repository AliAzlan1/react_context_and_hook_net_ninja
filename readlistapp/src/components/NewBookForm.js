import React,{ useContext, useState } from 'react';
import { BookContext } from '../contexts/BookList';

const NewBookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e)=> {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} placeholder='Add title' 
                    onChange={(e) => setTitle(e.target.value)}  required />
                <input type='text' value={author} placeholder='Add author' 
                    onChange={(e) => setAuthor(e.target.value)}  required />
                <input type='submit' value='add book' />
            </form>
        </div>
    );
}
 
export default NewBookForm;