import React, { Component } from "react";

class Botonera extends Component {

  render() {
      
    return (
      <div className ="opciones">

        <div className ="opcion">
          <button id="A" className ="botones" onClick={this.props.handleClick}> A
          </button>
          <h3>{this.props.opcionA}</h3>
        </div>

        <div className ="opcion">
          <button id="B" className ="botones" onClick={this.props.handleClick}> B
          </button>
          <h3>{this.props.opcionB}</h3>
        </div>

      </div>
    );
  }
}
  

export default Botonera;
