import React from 'react'

export default function Card(props) {

    const divStyle = {
        backgroundColor: "#873e23",
        fontSize: "30px",
        color: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "2rem"

    }



    return (
        <div style={divStyle}>
            <p>{props.id} {props.title} </p>
        </div>
    )
}
