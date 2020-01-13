import React from "react";
import "../layout.css";
import masculino from "../Imgs/masculino.jpg";
import feminino from "../Imgs/feminino.jpg";

export default class SexoSelector extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const estilo = {
        }

        return (
            <div className="select-sexo"
                style={estilo}>
                <div className="select-sexo-item"
                    style={{backgroundColor: this.props.sexo == "masculino" ? "green" : "white"}}
                    onClick={() => this.props.selecionar("masculino")}>
                    <img src={masculino} />
                </div>
                <div className="select-sexo-item"
                    style={{backgroundColor: this.props.sexo == "feminino" ? "green" : "white"}}
                    onClick={() => this.props.selecionar("feminino")}>
                    <img src={feminino} />
                </div>
            </div>
        );
    }

}