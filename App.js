const parent = React.createElement("div", 
    {id: "parent"}, 
    [React.createElement("div", 
        {id: "child"},
        [React.createElement("h1", 
            {id: "heading1"}, 
            "I'm HTML Child tag1"),
        React.createElement("h2", 
            {id: "heading"}, 
            "Hello, World from React1!")]),
        React.createElement("div", 
            {id: "child2"},
            [React.createElement("h1",
                 {id: "heading1"}, 
                 "I'm HTML Child tag2"),
            React.createElement("h2", 
                
                {id: "heading"}, 
                "Hello, World from React2!")]),

    ]);






// const heading = React.createElement("h1", {id: "heading"}, "Hello, World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent);
