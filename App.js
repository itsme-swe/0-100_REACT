import React from "react";
import ReactDOM from "react-dom/client";

//1️⃣ This is way we create React Element before JSX
/*const heading = React.createElement(
    "h2",
    {id: "head"},
    "Namaste Developers 👍👍"
);
console.log(heading);
*/

//2️⃣ Creating react element using JSX(Is HTML-like syntax)
const jsxHeading = <h1 id="jsxhead">Hello I am JSX ‼️</h1> 

console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);