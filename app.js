// const heading = React.createElement(
//     'h1',
//     {id:'heading', className:'heading', children: 'this is children passed as props'},
//     'This is rendered using ReactDOM'
// )
// console.log('heading: ',heading, typeof heading)
// const root = ReactDOM.createRoot(document.getElementById('root'))
// console.log('root: ',root, typeof root)
// root.render(heading)

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
