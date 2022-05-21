import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("Clean up");
      window.removeEventListener("resize", checkSize);
    };
  });
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
