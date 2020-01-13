import React from "react";

export default class Button extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const estilo = {
            float: this.props.proximo ? "right" : "left",
            backgroundColor: this.props.proximo ? "black" : "green",
            color: "white",
            boxSizing: 'border-box',
            maxWidth: '320px',
            padding: "5px"
        };

        return (
            <div>
                <button {...this.props}
                    style={estilo}>
                    {this.props.text}
                </button>
            </div>
        );
    }

}