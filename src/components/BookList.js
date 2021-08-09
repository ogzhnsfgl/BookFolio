import React, { Component } from "react";
import Book from "./Book";
import "./bookList.css";
import { BookContext } from "../contexts/BookContext";
import ThemeContextProvider, { ThemeContext } from "../contexts/ThemeContext";

export default class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => (
          <BookContext.Consumer>
            {(contextBook) => {
              const { books } = contextBook;
              const { changeTheme, isDarkTheme, dark, light } = contextTheme;
              const theme = isDarkTheme ? dark : light;

              return (
                <section
                  className="page-section"
                  style={{ background: theme.bg, color: theme.txt }}
                  id="portfolio"
                >
                  <div className="container" style={{ marginTop: "-50px" }}>
                    <div className="text-center">
                      <h2 className="section-heading text-uppercase">
                        BookFolio
                      </h2>
                      <h3 className="section-subheading text-muted">
                        All time fav books
                      </h3>
                      <button
                        type="button"
                        className={`btn btn-sm ${
                          isDarkTheme
                            ? "btn-outline-danger"
                            : "btn-outline-secondary"
                        }`}
                        style={{ marginTop: "-70px" }}
                        onClick={changeTheme}
                      >
                        Change Theme
                      </button>
                    </div>
                    <div className="row mt-3">
                      {books.map((book, i) => {
                        return <Book book={book} key={i} />;
                      })}
                    </div>
                  </div>
                </section>
              );
            }}
          </BookContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
