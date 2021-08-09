import React, { Component } from "react";
import "./book.css";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Book extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(themeContext) => {
          const { isDarkTheme, dark, light } = themeContext;
          const theme = isDarkTheme ? dark : light;
          return (
            <div className="col-lg-4 col-sm-6 mb-4">
              <div
                className="portfolio-item"
                style={{
                  border: `solid 3px ${theme.txt}`,
                  borderRadius: "5px",
                }}
              >
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div
                    className="portfolio-hover"
                    style={{ backgroundColor: theme.hover }}
                  >
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid w-100 p-2"
                    src={this.props.book.imageURL}
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    {this.props.book.title}
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    {this.props.book.author}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
