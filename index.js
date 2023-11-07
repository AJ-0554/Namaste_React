// const heading=React.createElement("h1",{id:"parent"},"hello world from react");
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);
const parent=React.createElement("div",{id:"parent_root"},[React.createElement("div",{id:"parent"},[React.createElement("h1",{id:"child1"},"from child1"),React.createElement("h1",{id:"child2"},"from child2")]),React.createElement("div",{id:"parent"},[React.createElement("h1",{id:"child1"},"from child1"),React.createElement("h1",{id:"child2"},"from child2")])])
//const parent=React.createElement("div",{id:"parent"},[React.createElement("h1",{id:"child1"},"from child1"),React.createElement("h1",{id:"child2"},"from child2")]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);