# Notes
**1️⃣** To make our React code more readable we use JSX and with the help of JSX we create React Elements.

**2️⃣** JSX is javascript syntax to create React Elements.

    const jsxHeading = < h1 id="head" > I am JSX </h2>

**3️⃣** JSX code cannot be understood by JS Engine so our bundler **Parcel** transpiled/convert code before it reaches to the JS Engine. An on the behalf of **Parcel** this work is done by **Babel**.

**4️⃣ Bundler** is a tool that compiles and bundles JavaScript code and its dependencies into a single file (or a few files) for efficient delivery to the browser. 

 Some most commonly used bundlers in React projects are **Webpack**, **Parcel** and **Vite**. 

**5️⃣** There are 2 types of components in React 

    🔸 Class Bases Component -- The older version of writing code
    
    🔸 Functional Components -- The newer version of writing code


**6️⃣ Functional Component** is an normal javascript function which returns some JSX Element.

    🔸 const HeadingComponent = () => (

            return <h1 id="fcomp">Namaste I am Functional Component🚀</h1>
    );

    🔸 const HeadComponent2 = () => (

            <h1 id="fcomp">Namaste I am Functional Component🚀</h1>    
    );

    🔸To render functional component on screen we need to use <ComponentName/>.

    root.render(<HeadComponent2/>);

**7️⃣ Component Composition** is passing one component inside another component to render on screen.

    const Title = () => (

        <h1 className="title">
            Namaste react 🚀
        </h1>
    );

    const HeadingComponent = () => (

        <div id="container">
            <Title/>  🔸This is the first way we can call other functional component
            {Title()} 🔸Or, we can component as function direct inside component 
            <h1 className="subClass">I am Functinal Component2🚀</h1>
        </div>
    );

**8️⃣** We can add **JavaScript** and **reactElement** inside JSX code with the help of **{ }** curly braces in the following way:

    const name = <h3>I am Harsh Mehra</h3>

    const Title = () => (
        <div id="head">
            {name}
        <h1> I am Functional Component </h1>
        </div>
    );