import React, { Component } from "react";
import data from "../helpers/data.json"

function My5Element(props){
    return(
        <li>
            <a href={props.url}> {props.name} </a>
        </li>
    )
}

export default class My5ElementsRender extends Component{

    constructor(props){
        super(props)
        this.state = {
            weekdays: ['monday', 'tuesday', 'wednesday', 
            'thursday', 'friday', 'saturday', 'sunday']
        }
    }

    render(){
        return(
            <div>
                <h2> Render of Elements </h2>
                <h3> Days of the week </h3>
                <ol>
                    {
                        this.state.weekdays.map((item, idx) => (
                            <li key={idx}> {item} </li>
                        ))
                    }
                </ol>
                <h3> Harry Potter Books </h3>
                <ul>
                    {
                        data.hpBooks.map((item, idx) => (
                            <My5Element key={item.id} url={item.website} name={item.name}/>
                        ))
                    }
                </ul>
            </div>
        )
    }

}