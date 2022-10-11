import React, { Component } from "react";

export class My6EventES6 extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }

        // IMPORTANT BINDING
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement(){
        this.setState({
            counter: this.state.counter -1
        })
    }

    render(){
        return(
            <div> 
                <h2> Events in class components with EcmaScript 6 </h2> 
                <h3> {this.state.counter} </h3>
                <nav>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </nav>
            </div>
        )
    }
}

export class My6EventES7 extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter -1
        })
    }

    render(){
        return(
            <div> 
                <h2> Events in class components with EcmaScript 7 </h2> 
                <h3> {this.state.counter} </h3>
                <nav>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </nav>
            </div>
        )
    }
}


export class My6MoreAboutEvents extends Component{
    
    handleSayHi = (e) => {
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(e.nativeEvent.target)
    }
    
    render(){
        return(
            <div>
                <h2> More About Events </h2>
                <button onClick={this.handleSayHi}> Say Hi </button>
            </div>
        )
    }
}