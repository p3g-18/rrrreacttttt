import React from "react";
import ReactDOM from "react-dom";

const title = <h1>MY MAN</h1>;

const JsxHeading = () => (
  <div id="container">
    {title}
    <h2 className="header">hello pg using jsx</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxHeading />);
