import React, { Fragment, useState } from "react";

function App() {
  // Correction: Changed 'cons' to 'const' in useState declaration
  const [title, setTitle] = useState("My name is somesh");

  function updateTitle() {
    // Correction: Removed space before Math.random() for correct string concatenation
    setTitle("My name is " + Math.random());
  }

  return (
    <Fragment>
      {/* Correction: Removed extra curly braces around updateTitle */}
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="Somesh 2"></Header>
    </Fragment>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
