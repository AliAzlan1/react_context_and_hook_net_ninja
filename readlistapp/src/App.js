import React from 'react';
import BookListProvider from './contexts/BookList';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';

function App() {
  return (
    <div className="App">
      <BookListProvider>
        <Navbar/>
        <BookList/>
        <NewBookForm/>
      </BookListProvider>
    </div>
  );
}

export default App;
