// All functions have 3 prototype methods

const that = this
fun.bind(that) // Whenever a function is called, I want this to our function, from a different this, bind needs to be called when the function is declared
fun.call()
fun.apply()