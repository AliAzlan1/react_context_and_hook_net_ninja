import React, { createContext, useState } from 'react';
import uuid from 'uuid/dist/v1';

export const BookContext = createContext();

const BookListProvider = (props) => {
    const [books, setBooks] = useState([
        { title:'Get out of my way', author:'Loser', id:1},
        { title:'God is with me', author:'Ali Azlan', id:2},
        { title:'I feel the heat', author:'Ali Azlan', id:3},
    ])

    const addBook = (title, author)=> {
        setBooks([...books, { title:title, author:author, id:uuid() } ]);
    }

    const removeBook = (id) =>{
        setBooks(books.filter(book => {
            return id !== book.id;
        }));
    }

    return ( 
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookListProvider;