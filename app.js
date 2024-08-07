// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading", //attributes object
//   },
//   "Hello world from react!"
// );
const divConstructor = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("div", { id: "child-1" }, "Hello div 1"),
    React.createElement("div", { id: "child-2" }, "Hello div 2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divConstructor);
