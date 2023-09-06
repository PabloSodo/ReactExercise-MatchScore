import { Component } from "react";


class Equipo extends Component {
  render() {
    return (
      <div className='tablero_cabecera'>
          <h3> {this.props.nombre}</h3>
          <h3>{this.props.contador}</h3>

          
          <img className='img_sel' src={this.props.bandera} alt="" />
      </div>
    )
  }
}

export default Equipo;