import React from "react";
import ReactDOM from "react-dom/client";

//1️⃣ This is way we create React Element before JSX
/*const heading = React.createElement(
    "h2",
    {id: "head"},
    "Namaste Developers 👍👍"
);

*/

/*2️⃣ Creating react element using JSX(Is HTML-like syntax) And JSX is more readable 
const jsxHeading = <h1 id="jsxhead">Hello I am JSX ‼️</h1> */ 

//3️⃣ React Functional Component
const Title = () => (
    
    <h1 className="title">
        Namaste react 🚀
    </h1>
);

const name = <h3>I am Harsh Mehra</h3>;     //🔸 React element

const HeadingComponent = () => (
    <div id="container">
        <Title/> {/*Adding another component inside another component*/}
        {name}  {/*Adding React Element inside component*/}
        <h1 className="subClass">I am Functinal Component2🚀</h1>
    </div>
);
    


const root = ReactDOM.createRoot(document.getElementById("root"));

//4️⃣ Rendering React element on browser
// root.render(jsxHeading);

//5️⃣ Rendering functional component on browser
root.render(<HeadingComponent/>);

