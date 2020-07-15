import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const Navbar = () => {
    return ( 
      <nav>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }

  const BookList = () => {
    return ( 
      <div className="book-list">
        <ul>
          <li>the way of kings</li>
          <li>the name of the wind</li>
          <li>the final empire</li>
        </ul>
      </div>
    );
  }
  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
