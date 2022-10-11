import React from "react"
import PropTypes from "prop-types"

export default function My2CompWithProps(props){
    return(
        <div>
            <h2> {props.defTitle} </h2>
            <h3> {props.msg} </h3>
            <p> {props.year} </p>
            <p> {props.isLeapYear ? "Leap Year" : "Non Leap Year"} </p>
            <p> Comming years: {props.commingYears.join(', ')} </p>
            <p> {props.event.date + ': ' + props.event.name}</p>
            {props.reactElement}
            {props.reactComp}
        </div>
    )
}

My2CompWithProps.defaultProps = {
    defTitle: "This is a default title"
}

My2CompWithProps.propTypes = {
    year: PropTypes.number
}

// Optional using prop types
// Need to install: npm i -S prop-types