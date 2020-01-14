import React from "react";
import "../layout.css";
import Label from "../Label/index.js";
import Input from "../Input/index.js";
import SexoSelector from "../SexoSelector/index.js";
import Button from "../Button/index.js";

import Usuario from "../Models/Usuario.js";

export default class NovoUsuario extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            usuario: new Usuario(),
            validacao: {
              nomeValido: true,
              sexoInvalido: true
            },
            primeiraVisaoCompleta: false
        };
    }

    atualizarNome(e){
        let usuario  = this.state.usuario;
        usuario.nome = e.target.value;
        this.setState({
            usuario: usuario
        }); 
    }

    atualizarSexo(e){
        let usuario  = this.state.usuario;
        let validacao= this.state.validacao;
        validacao.sexoInvalido = false;
        usuario.sexo = e;
        this.setState({
            usuario: usuario,
            validacao: validacao
        });

    }

    salvar(){
        let usuario   = this.state.usuario;
        let validacao = this.state.validacao;
        
        validacao.sexoInvalido = usuario.validarSexo();
        validacao.nomeValido = usuario.validarNome();

        let mensagem = "";
        let primeiraVisaoCompleta = false;
        if (!validacao.sexoInvalido && !validacao.nomeValido){
            mensagem = "Nome e Sexo estão inválidos!";
        }else if (validacao.sexoInvalido && !validacao.nomeValido){
            mensagem = "Nome está inválido!";
        }else if (!validacao.sexoInvalido && validacao.nomeValido){
            mensagem = "Sexo está inválido!";
        }else{
            primeiraVisaoCompleta = true;   
        }

        if (!primeiraVisaoCompleta){
            this.props.erro(mensagem);
        }

        this.setState({

        });

        this.setState({
            validacao: validacao
        });
        console.log(this.state);
    }

    render(){
        return (<div>
            <form>
                <Label htmlFor="nome" text="Quem é você ??" valorValido={this.state.validacao.nomeValido}></Label>
                <Input id="nome" 
                    maxLength="255" 
                    placeholder="Nome Completo"
                    readOnly={false}
                    valorValido={this.state.validacao.nomeValido}
                    onChange={this.atualizarNome.bind(this)} />

                <Label htmlFor="sexo" text="Sexo" valorValido={this.state.validacao.sexoInvalido}></Label>
                <SexoSelector sexo={this.state.usuario.sexo}
                    sexoValido={this.state.validacao.sexoInvalido}
                    selecionar={this.atualizarSexo.bind(this)} />

                <Button text="Próximo"
                    type="button" 
                    proximo="true" 
                    onClick={this.salvar.bind(this)}></Button>
            </form>
        </div>);
    }

}