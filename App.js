const heading = React.createElement("h1", { id: "heading" }, [
  React.createElement("h1", { className: "header-1" }, "Header 1"),
  React.createElement("h2", {}, "Header 2"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
