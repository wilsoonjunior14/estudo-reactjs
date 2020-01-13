class Usuario{
    constructor(){
        this.nome = ""
        this.sexo = ""
    }

    validarNome(){
        if (typeof this.nome === "string" &&
        this.nome.length != 0 &&
        this.nome.length <= 40){
            return true;
        }
        return false;
    }

    validarSexo(){
        return ["masculino", "feminino"].some(param => {
            return this.sexo === param
        });
    }
}

export default Usuario;