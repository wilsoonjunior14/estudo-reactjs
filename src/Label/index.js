import React from "react";

export default function Label(props){

    const estilo = {
        color: props.valorValido ? 'green' : 'red'
    }

    return (<div>
        <label htmlFor={props.for} style={estilo}>{props.text}</label>
    </div>);
}