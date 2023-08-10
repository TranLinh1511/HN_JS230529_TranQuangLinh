import React from 'react';

function NoteHeader({ text }) {
  return (
    <div className="container">
      <div className="title p-5">
        <h2>🔡 Word Counter</h2>
      </div>
      <div className="row p-3 disable-m">
        <div className="col-lg-4 col-sm-12  box">
          ✍Letter <p className="count-text">{text.trim().length}</p>
        </div>
        <div className="col-lg-4 col-sm-12  box">
          📝Word
          <p className="count-letter">{!text ? 0 : text.trim().split(' ').length}</p>
        </div>
        <div className="col-lg-4 col-sm-12 box">
          📜Paragraph
          <p className="count-paragraph">{!text ? 0 : text.trim().split(/\n+/).length}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteHeader;
