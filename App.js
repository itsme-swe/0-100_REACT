import React from "react";
import ReactDOM from "react-dom/client";

//1️⃣ This is way we create React Element before JSX
/*const heading = React.createElement(
    "h2",
    {id: "head"},
    "Namaste Developers 👍👍"
);

*/

//2️⃣ Creating react element using JSX(Is HTML-like syntax) And JSX is more readable 
const jsxHeading = <h1 id="jsxhead">Hello I am JSX ‼️</h1> 

//3️⃣ React Functional Component
const HeadComponent = () => {
   return <h1 id="fcomp">Namaste I am Functional Component🚀</h1>
}

const HeadComponent2 = () => (
    <h1 id="fcomp">Namaste I am Functional Component🚀</h1>
);





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

