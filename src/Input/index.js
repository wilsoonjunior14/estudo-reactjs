import React from "react";

export default function Input(props){

    const estilo = {
        borderColor: props.valorValido ? 'red' : 'white',
        backgroundColor: props.valorValido ? 'red' : 'white'
    }

    let settings = Object.assign({}, props);
    delete settings.valorValido;

    return (
        <input
        type="text"
        style={estilo}
        {...settings} />
    );
}