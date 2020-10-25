import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;