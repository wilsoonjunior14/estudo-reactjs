import React from "react";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

export default class Toast extends React.Component{

    constructor(props){

    }

    render(){
        return (<div>
            <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={true}
            closeOnClick
            pauseOnHover>

            </ToastContainer>
        </div>);
    }

}