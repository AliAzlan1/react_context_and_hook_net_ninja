import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookList';

const BookList = () => {
    const { books } = useContext(BookContext);
    return(
        <div className="booklist">
            <ul>
                { 
                    books.map(book => 
                        {
                            return( <li key={book.id}> {book.title}, Written by {book.author} </li> );
                        }
                )}
            </ul>
        </div>
    );
}
 
export default BookList;