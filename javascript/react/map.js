// Mapping components in react

const nums = [1,2,3,4,5,6,7,8,9,10]

const doubled = nums.map(function(nums){
    return num*2
})

import jokesData from "./jokesData"

// we can loop through an array with map and dynamically add stuff
function App() {
    jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
}