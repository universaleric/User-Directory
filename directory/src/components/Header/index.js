import React from "react";
import "./style.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    background: "#101146",
  },
  headingStyle: {
    fontSize: 35,
  },
  subHeadingStyle: {
    fontSize: 12,
  },
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Employee Directory</h1>
      <p style={styles.subHeadingStyle}>
        Click on the carrots to filter by heading or use the search box to
        narrow your results.
      </p>
    </header>
  );
}

export default Header;
