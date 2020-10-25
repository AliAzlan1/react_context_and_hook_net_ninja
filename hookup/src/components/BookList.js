import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return(
    <div className="book-list" style={{ color:theme.syntax, background:theme.bg }}>
      <ul style={{ background:theme.ui }}>
        {
          books.map(book => {
            return( <li key={book.id}>{book.title}</li> );
          })
        }
      </ul>
    </div>
  );
}

export default BookList;