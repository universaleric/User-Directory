import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="user"
          list="users"
          type="text"
          className="form-control"
          placeholder="Search"
          id="user"
        />
      </div>
    </form>
  );
}

export default SearchForm;
