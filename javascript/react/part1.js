// JSX is a javascript version of HTML (really just looks like HTML)
// Important to note that you can't render two JSX elements next to eachother, they have to be wrapped in a single JSX element

import React from "react" // These only work if you have the dependencies installed.
import ReactDOM from "react-dom"

ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root")) // You normally don't want direct JSX in this

// This is how you would normally render it: (same rules of only 1 JSX element apply here)
function MyApp() {
    return (<div>Hi</div>)
}

ReactDOM.render(<MyApp />, document.getElementById("root"));

// Generally you want each component in its own file (names by the function that is contained within it) - Still need to import react so it will render the JSX properly
// Also in order to be able to make your function available to other files, you need to export it
export default MyApp

// When you want to use it, you need to import it
import MyApp from "./MyApp" // js is the default extension

// You can use components within other compenents, you would just need to import it then call it as below
<MyApp />

// If you want to add classes in JSX you need to use className
var header = <header className="class"></header>
// Don't try adding classes to react components, only react elements

// You can style as you normally would with a css file.
// To do inline styling in JSX use a JS object, ends up being double curly braces
var jsxStyle = <h1 style={{color: 'green', backgroundColor: 'red'}}>Good morning</h1>

// You can put the style object in a separate variable and add it in
var style = {color: 'green', backgroundColor: 'red'};
jsxStyle = <h1 style={style}>Good morning</h1>

// This is advantageous for dynamic styling

// To insert javascript into a JSX element, just add curly braces
function MyApp() {
    const firstName = 'Sean'
    const lastName = 'Marten'

    return (
    <div>Hi my name is {firstName + " " + lastName}</div>
    )
}