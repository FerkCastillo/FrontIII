import React, { Component } from "react";

class Historial extends Component {

  render() {

    return (
      <div className ="recordatorio">
        <h3> Última elección: {this.props.seleccionPrevia} </h3>
        <h3> Historial: </h3>
        <ul> {this.props.historial} </ul>
      </div>
    );
  }
}

export default Historial;
