import React, { Component } from "react";
import BookList from "./BookList";
import BookContextProvider from "../contexts/BookContext";
import ThemeContextProvider from "../contexts/ThemeContext";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <ThemeContextProvider>
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}
