import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookList';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);
    return(
        <div className="book-list">
            <ul>
                {
                    books.length ? 
                    (
                        books.map(book =>
                        {
                            return( <BookDetails book={book} key={book.id} /> );
                        })
                    )
                    :
                    ( <div>No books to read</div> )
                }
            </ul>
        </div>
    );
}
 
export default BookList;