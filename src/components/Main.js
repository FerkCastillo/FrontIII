import data from "./data";
import React, { Component } from "react";
import Botonera from "./Botonera";
import Historial from "./Historial";


const historial = [];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      respuestaAnterior: null,
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.contador !== this.state.contador) {
      historial.push(this.state.respuestaAnterior);
    }
  }

  handleClick = (event) => {
    const id = event.target.id;
    if (this.state.contador >= 7) {
      alert("¡La historia finalizó!");
     
    } else if (id === "A" && this.state.respuestaAnterior !== "A") {
      this.setState({contador: this.state.contador + 1,
        respuestaAnterior: "A",
      });
    } else if (id === "A" && this.state.respuestaAnterior === "A") {
      this.setState({contador: this.state.contador + 2,
      });
    } else if (id === "B" && this.state.respuestaAnterior === "A") {
      this.setState({contador: this.state.contador + 3,
        respuestaAnterior: "B",
      });
    } else if (id === "B") {
      this.setState({contador: this.state.contador + 2,
        respuestaAnterior: "B",
      });
    }
  };

  render() {
    return (
      <div className= "layout">
        <h1 className= "historia">{data[this.state.contador].historia}</h1>
        <Botonera
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Historial
          respuestaAnterior={this.state.respuestaAnterior}
          historial={historial.map((opcion, index) => (<li key={index}>{opcion}</li>),
          )} />
      </div>
    );
  }
}

export default Main;
