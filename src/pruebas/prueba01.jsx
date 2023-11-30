import React, { Component } from "react";
import { render } from "react-dom";


class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0
    };
  }

  aumentar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  resetar = () => {
    this.setState({
      contador: this.state.contador = 0
    });
  }

  render() {
    return (
      <div>
        <div>
          <p>{this.state.contador}</p>

        </div>
        <div className="">
          <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
            uppercase rounded-lg" onClick={this.aumentar}>Aumentar</button>
          <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
            uppercase rounded-lg" onClick={this.resetar}>Resetear</button>
        </div>

      </div>

    );
  }
}

export default function ContadorApp() {
  return (
    <div>
      <h1>Prueba 01</h1>
      <p>
        1. Impremente un nuevo botón que haga un Reset a Cero (0), al
        contador de la clase.
      </p>
      <Contador />
    </div>
  );
}
