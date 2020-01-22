import React from "react";
import "../layout.css";

import Image from "../Image/index.js";

export default class GenderSelect extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        let estilo = {float: 'left', width: "100%"};
        return (<div style={estilo}>
            <Image src="arrow" posicao="left" style={{float: "left"}} />
            <Image src="arrow" posicao="right" style={{float: "right"}} />
        </div>);
    }

}