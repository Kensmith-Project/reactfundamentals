import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  const handleClick = () => {
    setText("Hello world");
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>;<button onClick={handleClick}>change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
