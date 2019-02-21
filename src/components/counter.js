import React from 'react'

export default class Counter extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            number: 0
        }
        this.myCounter = this.myCounter.bind(this)
    }

    myCounter(num) {
        this.setState ({
            number: this.state.number + num
        })

    }

    render() {
        return(
        <div>
            <button onClick = {() => this.myCounter(1)}>Add</button>
            <button onClick = {() => this.myCounter(-1)}>Subtract</button>

            <h2>Your current number is: {this.state.number}</h2>
        </div>
        )
    }
}
