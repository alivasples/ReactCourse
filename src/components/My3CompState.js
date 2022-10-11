import React, {Component} from "react";

function StateToChild(props){
    return (
        <div>
            <h3> {props.counterChild} </h3>
        </div>
    )
}

export default class My3CompState extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter: 0,
        }

        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    render() {
        return(
            <div>
                <h2> Component with state </h2>
                <p> {this.state.counter} </p>
                <StateToChild counterChild={this.state.counter} />
            </div>
        )
    }
}