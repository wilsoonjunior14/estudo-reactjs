import React from "react";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

export default class Toast extends React.Component{

    constructor(props){
        super(props);

        toast.configure({
            draggable: false,
            autoClose: 3000,
            hideProgressBar: false
        });
    }

    erro(message){
        toast.error(message);
    }

    sucesso(message){
        toast.success(message);
    }

    render(){
        return (<div>
            <ToastContainer>
            </ToastContainer>
        </div>);
    }

}