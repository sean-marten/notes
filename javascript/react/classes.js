import React from "react"

class App extends React.Component {
    yourMethodHere() { // No need to declare things as functions in classes, just use the parenthesis

    }

    render() {
        // You need to use 'this' when accessing props within a class
        // whenever you want to return, it needs to be in the fucntion render()
    }
}

// if you import component you can use simply Componenet to declare a class

import React, {Component} from "react"

class Greeting extends Component {
    
}