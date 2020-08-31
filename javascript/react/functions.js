// To call a function in a class, use this
// You never want to modify state directly, you completely replace it (VIRTUAL DOM)
// Use setState to change the state

import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState((prevState) => {
            return {
                count: prevState.count++
            }
        })
        // this.setState({ count: 1 }) // Doesn't work, we need to bind ^^
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App