import React from "react";

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isDarkTheme: true,
    dark: { bg: "#082032", txt: "#FF4C29", hover: "rgba(255, 76, 41,0.8)" },
    light: { bg: "#FCECDD", txt: "#FEA82F", hover: "rgba(255,103,1,0.8)" },
  };

  changeTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeTheme: this.changeTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
