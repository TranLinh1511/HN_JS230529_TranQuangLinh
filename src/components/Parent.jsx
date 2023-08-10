import React, { useState } from 'react';
import NoteHeader from './NoteHeader';
import NoteFooter from './NoteFooter';
import './style.css';

function Parent() {
  const [text, setText] = useState('');
  const getValue = (value) => {
    setText(value);
  };
  const handleToUpperCase = () => {
    const textUp = text.toUpperCase();
    setText(textUp);
  };
  const handleToLowerCase = () => {
    const textDown = text.toLowerCase();
    setText(textDown);
  };
  return (
    <div className="set-color">
      <NoteHeader text={text} />
      <NoteFooter
        text={text}
        getValue={getValue}
        handleToUpperCase={handleToUpperCase}
        handleToLowerCase={handleToLowerCase}
      />
    </div>
  );
}

export default Parent;
