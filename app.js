import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent", className: "heading" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "heading1"),
      React.createElement("h2", {}, "heading2"),
    ]),
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "heading1"),
      React.createElement("h2", {}, "heading2"),
    ]),
  ]
);

ReactDOM.createRoot(document.getElementById("root")).render(parent);
