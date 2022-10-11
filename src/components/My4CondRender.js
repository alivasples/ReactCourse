import React, { Component } from "react";

function LogIn(){
    return(
        <div> Log In </div>
    )
}

function LogOut(){
    return(
        <div> Log Out </div>
    )
}

export default class My4CondRender extends Component{
    constructor(props){
        super(props)
        this.state = {
            session: true
        }
    }

    render(){
        return(
            <div>
                <h2> Conditional Render </h2>
                {this.state.session ? <LogIn/> : <LogOut />}
            </div>
        )
    }
}