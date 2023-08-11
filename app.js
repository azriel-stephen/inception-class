import ReactDOM from "react-dom/client";
import { createElement } from "react";

const nestedHeader = createElement("div", { className: "title" }, [
  createElement("h1", {}, "Nested Header h1"),
  createElement("h2", {}, "Nested Header h2"),
  createElement("h3", {}, "Nested Header h3"),
]);

const nestedJSX = (
  <div className="title">
    <h1>Nested Header h1</h1>
    <h2>Nested Header h2</h2>
    <h3>Nested Header h3</h3>
  </div>
);

const Heading = () => <h1>Heading of something</h1>;

const NestedComponent = () => {
  return (
    <div className="title">
      <Heading />
      {Heading()}
      <Heading></Heading>
      <h1>Nested Header h1</h1>
      <h2>Nested Header h2</h2>
      <h3>Nested Header h3</h3>
    </div>
  );
};
console.log(nestedHeader, typeof nestedHeader);
console.log(nestedJSX, typeof nestedJSX);
console.log(NestedComponent, typeof NestedComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NestedComponent />);
// root.render(nestedJSX);
