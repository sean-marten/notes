import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default App


// conditional rendering - just loads if some sort of condition is met (good for loading screens?)

// && 

this.state.unreadMessages.length > 0 && 
<h2>You have {this.state.unreadMessages.length} unread messages!</h2>
// && evaluates the left side, if true, it returns that, if not it returns the right