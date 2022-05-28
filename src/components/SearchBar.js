import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // make sure we call call back
    //from parent component
    onFormSubmit(text);
  };
  return (
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
