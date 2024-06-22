import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child"},
            [
                React.createElement("h1", {id: "child1"}, "I am child one in h1 tag!!"),
                React.createElement("h2", {id: "child2"}, "I am child two in h2 tag!!")
            ]
        ),

        React.createElement(
            "div",
            {id: "SecondChild"},
            [
                React.createElement("h1", {id: "c1"}, "I am grand child one in h1 tag!!"),
                React.createElement("h2", {id: "c2"}, "I am grand child two in h2 tag!!")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);