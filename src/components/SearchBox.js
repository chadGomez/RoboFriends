import React from "react";
import 'tachyons';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="Search robots here"
      onChange={searchChange}
    />
  )
}

export default SearchBox;