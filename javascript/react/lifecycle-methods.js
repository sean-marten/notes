import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    static getDerivedStateFromProps(props, state) {
        // Return the new, updated state based upon the props
        // Not commonly used
    }

    getSnapshotBeforeUpdate() {
        // Create a backup of the current way things are (usually data, like an object)
    }
    
    componentDidMount() {
        // Essentially this was just added to the screen
        // Usually used for API calls
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Dictates whether or not we should really update something. 
        // Allows us to optimize the app
        // Returns booleans
    }

    componentWillUnmount() {
        // Usually for cleanup/teardown (eliminate clutter)
        // Usually if you set up an eventlistener in componentDidMount(), remove it here
    }

    componentDidUpdate(prevProps, prevState) {
        // Inside here, if we need to set the state, we need to prevent the infinite loop
        if (prevState.count !== this.state.count) {
            const newColor = randomColor();
            this.setState({color:newColor})
        }
    }

    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App