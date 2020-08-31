// State is the data that a component maintains (this can change
// Props are immutable!!!!!!!
// States allow us to change data more easily (ONLY ON CLASS BASED COMPONENTS)

import React from "react"

class App extends React.Component {
    // A method that initializes parts of the class
    constructor() {
        super() // Always make this call, makes a request from the parent class (Component) and lets us use some of the data 
        this.state = {
            answer: "Yes"
        } // This is mutable, so we can do stuff with it. We can also pass this to a child component, but it passes through as a prop
        // If we ever change the state, React updates all references to it
    }

    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
            </div>
        )
    }
}

export default App