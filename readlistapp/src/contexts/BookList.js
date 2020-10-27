import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookListProvider = (props) => {
    const [books, dispatch ] = useReducer(bookReducer, [])

    return ( 
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookListProvider;