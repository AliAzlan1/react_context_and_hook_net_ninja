import React from 'react';
import BookListProvider from './contexts/BookList';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookListProvider>
        <Navbar/>
        <BookList/>
      </BookListProvider>
    </div>
  );
}

export default App;
