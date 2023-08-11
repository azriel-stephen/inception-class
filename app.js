import ReactDOM from "react-dom/client";
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Hello world from JSX
  </h1>
);

// JSX => Babel transpiles the code to React.createElement => ReactElement-JS object => HTML element(render).

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
