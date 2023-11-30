import React, { Component } from "react";
import { render } from "react-dom";


class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  syncChanges(type, value) {
    this.setState({
      [type]: value
    });
  }

  submitForm = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="flex flex-col justify-center items-center">
        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          
          
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-3"
            onChange={ev => {
              this.syncChanges("email", ev.target.value);
            }}
            type="email"
            value={this.state.email}
            placeholder="Email"
          />
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-3"
            onChange={ev => {
              this.syncChanges("password", ev.target.value);
            }}
            type="password"
            value={this.state.password}
            placeholder="*********"
          />
          <div>
            <input
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
              onClick={this.submitForm}
              type="submit"
              value="Iniciar sesión"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default function FormularioApp() {
  return (
    <div>
      <h1>Prueba 02</h1>
      <p>1. Optimice el siguiente  componente de clase  para que solo tenga
        un método de sincronización, para actualizar los valores de los
        identificadores email y password en el estado del componente</p>
      <Formulario />
    </div>
  );
}
