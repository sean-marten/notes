// How do you make a compnent customizable? Props

import React from "react"

// props is an object that has the properties of the stuff that you passed in
function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}
// The call from the app

import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">
            <ContactCard 
                name="Mr.Whiskerson" // Each of these items is a property of the prop
                imgUrl="http:placekitten.com/300/200"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
        </div>
    )
}

// A better way to do it is to use an object to pass the prop in
function App() {
    return (
        <div className="contacts">
            <ContactCard 
                contact={{name: "Mr.Whiskerson"}} // Can pass props as a whole object
            />
        </div>
    )
}