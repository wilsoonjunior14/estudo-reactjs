import React from "react";

import arrow from "../Imgs/right.png";

export default class Image extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props.src);
    }

    render(){
        let estilo = {width: "30px", height: "30px"};

        if (this.props.posicao === 'right' && this.props.src == "arrow"){
            estilo.float       = "right";
            estilo.borderRadius= "50%";
            return (<div><img style={estilo} src={arrow} /></div>);
        }

        if (this.props.posicao === 'left'  && this.props.src == "arrow"){
            estilo.transform   = "rotate(180deg)";
            estilo.float       = "left";
            estilo.borderRadius= "50%"
            return (<div><img style={estilo} src={arrow} /></div>);
        }

    }

}