import React from 'react';

function NoteFooter({ getValue, handleToLowerCase, handleToUpperCase, text }) {
  return (
    <div className="container">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Enter/Paste your text here"
        className="w-100 m-4 note"
        value={text}
        onChange={(e) => {
          getValue(e.target.value);
        }}
      ></textarea>
      <div className="btn_flex">
        <button onClick={handleToUpperCase} className="btn btn-primary">
          Click to Uppercase
        </button>
        <button onClick={handleToLowerCase} className="btn btn-primary">
          Click to Lowercase
        </button>
      </div>
    </div>
  );
}

export default NoteFooter;
