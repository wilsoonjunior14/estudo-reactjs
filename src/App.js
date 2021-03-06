import React from 'react';
import logo from './logo.svg';
import './App.css';
import './layout.css';
import Header from "./Header/index.js";
import NovoUsuario from "./NovoUsuario/index.js";
import Toast from "./Toast/index.js";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Header></Header>
        <div className="content">
          <NovoUsuario
          erro={msg => this.refs.toast.erro(msg)} />
          
          <Toast ref="toast"></Toast>
        </div>
      </div>
    );
  }
}

export default App;
