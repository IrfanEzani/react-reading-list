import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ThemeContextProvider from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";

function App() {
  const Navbar = () => {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{background : theme.ui, color: theme.syntax}}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  };

  const BookList = () => {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const {isLightTheme, dark, light} = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
              <ul>
                <li style={{background: theme.ui}}>the way of kings</li>
                <li style={{background: theme.ui}}>the name of the wind</li>
                <li style={{background: theme.ui}}>the final empire</li>
              </ul>
          </div>
          )
        }}
      </ThemeContext.Consumer>
    );
  };
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
